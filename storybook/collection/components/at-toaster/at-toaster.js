import { h } from "@stencil/core";
/**
 * @category Overlays
 * @description A toaster component for displaying messages to users. Supports toast types, positions, timeout and dismissible.
 */
export class AtToasterComponent {
    el;
    /**
     * Position of the toaster on the screen
     */
    position = 'bottom-right';
    toasts = [];
    timers = new Map();
    frame = 0;
    /**
     * Adds a new toast to the toaster container
     * This method is called from the ToasterService when a new toast is created.
     *
     * @param toast The toast to add
     */
    async addToast(toast) {
        this.toasts = [...this.toasts, toast];
        if (toast.dismissible && toast.timeout > 0) {
            this.timers.set(toast.id, {
                total: toast.timeout,
                remaining: toast.timeout,
                resumedAt: performance.now(),
                paused: false,
                hovered: false,
                focused: false,
                handle: setTimeout(() => this.removeToast(toast.id), toast.timeout),
            });
            this.scheduleFrame();
        }
        this.raiseAboveModals();
    }
    /**
     * A modal at-dialog sits in the browser's top layer, which no z-index can
     * reach — showing the host as a manual popover joins that layer, and
     * re-showing on every toast re-inserts it above dialogs opened since.
     */
    raiseAboveModals() {
        if (!('showPopover' in HTMLElement.prototype)) {
            return;
        }
        try {
            this.el.setAttribute('popover', 'manual');
            if (this.el.matches(':popover-open')) {
                this.el.hidePopover();
            }
            this.el.showPopover();
        }
        catch {
            // An unshown popover is display: none — worse than sitting
            // behind a backdrop, so put the attribute back.
            this.el.removeAttribute('popover');
        }
    }
    remainingFor(timer) {
        return timer.paused
            ? timer.remaining
            : Math.max(0, timer.remaining - (performance.now() - timer.resumedAt));
    }
    /**
     * Paints the countdown bars and nothing else — the setTimeout in addToast
     * still decides when a toast goes, so a toast in a background tab (where
     * rAF is suspended) expires on the same schedule it always did.
     *
     * Reading the position from the clock every frame is also what survives
     * raiseAboveModals: hiding and re-showing the popover restarts CSS
     * animations, so a keyframed bar would jump back to full whenever another
     * toast arrived.
     */
    paint = () => {
        this.frame = 0;
        this.timers.forEach((timer) => {
            if (timer.bar) {
                const fraction = this.remainingFor(timer) / timer.total;
                timer.bar.style.transform = `scaleX(${fraction})`;
            }
        });
        this.scheduleFrame();
    };
    scheduleFrame() {
        if (!this.frame && this.timers.size) {
            this.frame = requestAnimationFrame(this.paint);
        }
    }
    attachBar(id, el) {
        const timer = this.timers.get(id);
        if (timer) {
            timer.bar = el;
        }
    }
    /**
     * A toast the user is hovering or has tabbed into is one they are reading
     * or reaching for, so the clock stops rather than pulling the message out
     * from under them.
     *
     * Pointer and keyboard are independent holds, tracked separately: letting
     * go of one while the other still has the toast must not restart the clock.
     */
    setHold(id, hold, held) {
        const timer = this.timers.get(id);
        if (!timer) {
            return;
        }
        timer[hold] = held;
        if (timer.hovered || timer.focused) {
            this.pause(timer);
        }
        else {
            this.resume(id, timer);
        }
    }
    pause(timer) {
        if (timer.paused) {
            return;
        }
        clearTimeout(timer.handle);
        timer.remaining = this.remainingFor(timer);
        timer.handle = null;
        timer.paused = true;
    }
    resume(id, timer) {
        if (!timer.paused) {
            return;
        }
        timer.resumedAt = performance.now();
        timer.paused = false;
        timer.handle = setTimeout(() => this.removeToast(id), timer.remaining);
        this.scheduleFrame();
    }
    /**
     * Focus is delegated from the container rather than bound per toast: the
     * events bubble, and focusout fires before the new target takes focus, so
     * relatedTarget is the only way to tell a move within a toast from a move
     * out of it.
     */
    handleFocusShift = (event) => {
        const entered = event.target?.closest?.('.at-toast');
        const left = event.relatedTarget?.closest?.('.at-toast');
        if (entered === left) {
            return;
        }
        if (left) {
            this.setHold(Number(left.getAttribute('data-id')), 'focused', false);
        }
        if (entered) {
            this.setHold(Number(entered.getAttribute('data-id')), 'focused', event.type === 'focusin');
        }
    };
    clearTimer(id) {
        const timer = this.timers.get(id);
        if (timer) {
            clearTimeout(timer.handle);
            this.timers.delete(id);
        }
    }
    componentDidLoad() {
        this.el.addEventListener('focusin', this.handleFocusShift);
        this.el.addEventListener('focusout', this.handleFocusShift);
    }
    disconnectedCallback() {
        this.el.removeEventListener('focusin', this.handleFocusShift);
        this.el.removeEventListener('focusout', this.handleFocusShift);
        cancelAnimationFrame(this.frame);
        this.frame = 0;
        this.timers.forEach((timer) => clearTimeout(timer.handle));
        this.timers.clear();
    }
    /**
     * Removes a toast from the toaster container by its ID
     * This method is called by tapToast.
     *
     * @param id The ID of the toast to remove
     */
    async removeToast(id) {
        const toastEl = this.el.querySelector(`.at-toast[data-id="${id}"]`);
        // A handle held by the caller can outlive the toast it was taken for,
        // so dismissing one that has already gone is a no-op rather than a
        // failure.
        if (!toastEl || toastEl.classList.contains('close')) {
            return;
        }
        this.clearTimer(id);
        toastEl.classList.add('close');
        // Every animation inside the toast bubbles animationend here, so the
        // exit has to be identified by name and target; dropping the state
        // entry on any other animation would take the toast down mid-life.
        const onExit = (event) => {
            if (event.target !== toastEl || event.animationName !== 'animOut') {
                return;
            }
            toastEl.removeEventListener('animationend', onExit);
            this.toasts = this.toasts.filter((toast) => toast.id !== id);
        };
        toastEl.addEventListener('animationend', onExit);
    }
    /**
     * Removes a toast from the toaster container by tapping the toast
     *
     * @param toast The toast that was tapped
     */
    tapToast(toast) {
        if (toast.dismissible) {
            this.removeToast(toast.id);
        }
    }
    /**
     * Removes a toast from the toaster container by clicking the close button
     *
     * @param toast The toast to remove
     */
    clickCloseButton(toast) {
        this.removeToast(toast.id);
    }
    /**
     * The action is offered for as long as the toast stands, so taking it takes
     * the toast down with it -- an Undo that stays on screen after it has been
     * used invites a second, meaningless click.
     */
    clickActionButton(toast) {
        toast.action.onTrigger();
        this.removeToast(toast.id);
    }
    classSet(toast) {
        return `at-toast ${toast.dismissible ? '' : 'undismissible'}`;
    }
    hasCountdown(toast) {
        return toast.dismissible && toast.timeout > 0;
    }
    /**
     * Renders the toaster container and all active toasts.
     * Each toast is wrapped with <at-message> for UI presentation.
     */
    render() {
        return (h("div", { key: '6e8d8bd36b0d1391a040c834d32aa4375b46b8e1', class: `at-toaster ${this.position}` }, this.toasts.map((toast) => (h("div", { class: this.classSet(toast), key: toast.id, "data-id": toast.id, role: "status", "aria-live": "polite", onClick: () => this.tapToast(toast), onMouseEnter: () => this.setHold(toast.id, 'hovered', true), onMouseLeave: () => this.setHold(toast.id, 'hovered', false) }, h("at-message", { type: toast.type, message_title: toast.title, content: toast.message }, toast.action && (h("at-button", { slot: "actions", type: "secondaryText", size: "sm", "data-name": "toast-action", label: toast.action.label, onClick: (event) => {
                event.stopPropagation();
                this.clickActionButton(toast);
            } })), toast.closeButton && (h("at-button", { slot: "actions", type: "secondaryText", size: "sm", onClick: (event) => {
                event.stopPropagation();
                this.clickCloseButton(toast);
            } }, h("at-icon", { slot: "icon", name: "close" })))), this.hasCountdown(toast) && (h("div", { class: "at-toast-progress", "data-name": "toast-progress", "aria-hidden": "true" }, h("div", { class: `at-toast-progress-fill ${toast.type}`, ref: (el) => this.attachBar(toast.id, el) }))))))));
    }
    static get is() { return "at-toaster"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-toaster.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-toaster.css"]
        };
    }
    static get properties() {
        return {
            "position": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtIToastPosition",
                    "resolved": "\"bottom-center\" | \"bottom-left\" | \"bottom-right\" | \"top-center\" | \"top-left\" | \"top-right\"",
                    "references": {
                        "AtIToastPosition": {
                            "location": "import",
                            "path": "../../types/toast",
                            "id": "src/types/toast.ts::AtIToastPosition",
                            "referenceLocation": "AtIToastPosition"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the toaster on the screen"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "position",
                "defaultValue": "'bottom-right'"
            }
        };
    }
    static get states() {
        return {
            "toasts": {}
        };
    }
    static get methods() {
        return {
            "addToast": {
                "complexType": {
                    "signature": "(toast: AtIToast) => Promise<void>",
                    "parameters": [{
                            "name": "toast",
                            "type": "AtIToast",
                            "docs": "The toast to add"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "AtIToast": {
                            "location": "import",
                            "path": "../../types/toast",
                            "id": "src/types/toast.ts::AtIToast",
                            "referenceLocation": "AtIToast"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Adds a new toast to the toaster container\nThis method is called from the ToasterService when a new toast is created.",
                    "tags": [{
                            "name": "param",
                            "text": "toast The toast to add"
                        }]
                }
            },
            "removeToast": {
                "complexType": {
                    "signature": "(id: number) => Promise<void>",
                    "parameters": [{
                            "name": "id",
                            "type": "number",
                            "docs": "The ID of the toast to remove"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "AnimationEvent": {
                            "location": "global",
                            "id": "global::AnimationEvent"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Removes a toast from the toaster container by its ID\nThis method is called by tapToast.",
                    "tags": [{
                            "name": "param",
                            "text": "id The ID of the toast to remove"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
