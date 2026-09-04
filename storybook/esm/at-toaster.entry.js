import { r as registerInstance, a as getElement, h } from './index-Dnh7MvHP.js';

const atToasterCss = () => `@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fade-in.sc-at-toaster{animation:fadeIn 0.2s ease-in}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fade-out.sc-at-toaster{animation:fadeOut 0.2s ease-out forwards}@keyframes fadeInBackdrop{from{background-color:rgba(0, 0, 0, 0)}to{background-color:rgba(0, 0, 0, 0.2)}}@keyframes animInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes animOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}[popover].sc-at-toaster-h{position:fixed;inset:auto;width:auto;height:auto;margin:0;border:0;padding:0;overflow:visible;background:transparent;color:inherit}.at-toaster.sc-at-toaster{position:fixed;display:flex;flex-direction:column;z-index:var(--token-z-index-modal);gap:8px;padding:12px;pointer-events:none}.at-toaster.top-right.sc-at-toaster{top:12px;right:12px;align-items:flex-end}.at-toaster.top-left.sc-at-toaster{top:12px;left:12px;align-items:flex-start}.at-toaster.bottom-right.sc-at-toaster{bottom:12px;right:12px;align-items:flex-end}.at-toaster.bottom-left.sc-at-toaster{bottom:12px;left:12px;align-items:flex-start}.at-toaster.top-center.sc-at-toaster{top:12px;left:50%;transform:translateX(-50%);align-items:center}.at-toaster.bottom-center.sc-at-toaster{bottom:12px;left:50%;transform:translateX(-50%);align-items:center}.at-toast.sc-at-toaster{pointer-events:auto;min-width:var(--token-width-panel-xs);max-width:var(--token-width-panel-sm);box-shadow:var(--token-shadow-1);border-radius:4px;overflow:hidden;display:flex;flex-direction:column;position:relative;cursor:pointer;animation:animInUp 300ms ease-out forwards}.at-toast.undismissible.sc-at-toaster{cursor:default}.at-toast.close.sc-at-toaster{animation:animOut 200ms ease-out forwards}`;

const AtToasterComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /**
     * Position of the toaster on the screen
     */
    position = 'bottom-right';
    toasts = [];
    dismissTimers = new Set();
    /**
     * Adds a new toast to the toaster container
     * This method is called from the ToasterService when a new toast is created.
     *
     * @param toast The toast to add
     */
    async addToast(toast) {
        this.toasts = [...this.toasts, toast];
        if (toast.dismissible && toast.timeout > 0) {
            const timer = setTimeout(() => {
                this.dismissTimers.delete(timer);
                this.removeToast(toast.id);
            }, toast.timeout);
            this.dismissTimers.add(timer);
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
    disconnectedCallback() {
        this.dismissTimers.forEach((timer) => clearTimeout(timer));
        this.dismissTimers.clear();
    }
    /**
     * Removes a toast from the toaster container by its ID
     * This method is called by tapToast.
     *
     * @param id The ID of the toast to remove
     */
    async removeToast(id) {
        const toastEl = this.el.querySelector(`.at-toast[data-id="${id}"]`);
        // The toast's auto-dismiss timeout (see addToast) can fire after the
        // toast was already removed (e.g. tapped/closed manually, or the
        // toaster itself torn down), in which case the element no longer
        // exists in the DOM.
        if (!toastEl) {
            return;
        }
        toastEl.classList.add('close');
        toastEl.addEventListener('animationend', () => {
            this.toasts = this.toasts.filter((toast) => toast.id !== id);
        });
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
    classSet(toast) {
        return `at-toast ${toast.dismissible ? '' : 'undismissible'}`;
    }
    /**
     * Renders the toaster container and all active toasts.
     * Each toast is wrapped with <at-message> for UI presentation.
     */
    render() {
        return (h("div", { key: '441db181d5204d258346c48e4b8d5fc84379514b', class: `at-toaster ${this.position}` }, this.toasts.map((toast) => (h("div", { class: this.classSet(toast), key: toast.id, "data-id": toast.id, onClick: () => this.tapToast(toast) }, h("at-message", { type: toast.type, message_title: toast.title, content: toast.message }, toast.closeButton && (h("at-button", { slot: "actions", type: "secondaryText", size: "sm", onClick: (event) => {
                event.stopPropagation();
                this.clickCloseButton(toast);
            } }, h("at-icon", { slot: "icon", name: "close" })))))))));
    }
};
AtToasterComponent.style = atToasterCss();

export { AtToasterComponent as at_toaster };
