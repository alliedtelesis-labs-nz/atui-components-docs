import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
import { a as autoUpdate, c as computePosition, o as offset, f as flip, s as shift, b as size } from './p-CQbxAaEb.js';

const AtuiMenu = /*@__PURE__*/ proxyCustomElement(class AtuiMenu extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiMenuStateChange = createEvent(this, "atuiMenuStateChange", 7);
        /**
         * Menu's x offset from edge in pixels. Only applied for origin_x = 'start' | 'end'
         */
        this.offset_x = 0;
        /**
         * Menu's y offset from edge in pixels. Only applied for origin_y = 'top' | 'bottom'
         */
        this.offset_y = 0;
        /**
         * Position of opened menu element relative to the trigger element.
         */
        this.position = 'bottom';
        /**
         * Alignment of opened menu element relative to trigger element.
         */
        this.align = 'start';
        /**
         * Prevent closing of menu when options are selected. Used for multi-selection controls.
         */
        this.autoclose = true;
        /**
         * Event type that triggers the menu open state. Click or Hover.
         */
        this.trigger = 'click';
        /**
         * Close the menu when the user clicks within the menu panel. Default for single selection menus.
         */
        this.role = 'menu';
        /**
         * Prevent opening menu
         */
        this.disabled = false;
        this.isOpen = false;
        this.triggerEls = [];
        this.updatePosition = async () => {
            if (this.triggerEl && this.menuEl && this.isOpen) {
                await this.updateFloatingPosition();
            }
        };
        this.externalTriggerListeners = [];
    }
    disabledChanged(newValue) {
        if (newValue && this.isOpen) {
            this.closeMenu();
        }
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async toggleMenu() {
        if (this.disabled) {
            return;
        }
        if (this.menuEl) {
            this.menuEl.togglePopover();
            this.isOpen = this.menuEl.matches(':popover-open');
        }
        this.atuiMenuStateChange.emit(this.isOpen);
        await this.updatePosition();
        this.updateAriaExpanded();
    }
    /**
     * Opens the dropdown menu.
     */
    async openMenu() {
        if (this.disabled) {
            return;
        }
        if (this.menuEl) {
            this.menuEl.showPopover();
            this.isOpen = true;
        }
        this.atuiMenuStateChange.emit(true);
        await this.updatePosition();
        this.updateAriaExpanded();
    }
    /**
     * Closes the dropdown menu.
     */
    async closeMenu() {
        if (this.menuEl) {
            this.menuEl.hidePopover();
            this.isOpen = false;
        }
        this.atuiMenuStateChange.emit(false);
        this.updateAriaExpanded();
    }
    updateAriaExpanded() {
        if (this.trigger_id && this.triggerEl) {
            this.triggerEl.setAttribute('aria-expanded', this.isOpen ? 'true' : 'false');
        }
    }
    /**
     * Return the current menu open state
     */
    async getIsOpen() {
        return this.isOpen;
    }
    async componentDidLoad() {
        this.popoverId = `atui-menu-${Math.random().toString(36).substr(2, 9)}`;
        if (this.trigger_id) {
            this.triggerEls = Array.from(document.querySelectorAll(`[data-id="${this.trigger_id}"]`));
            if (this.triggerEls.length === 0) {
                console.warn(`atui-menu: No elements found with data-id="${this.trigger_id}"`);
                return;
            }
        }
        else {
            this.triggerEl = this.el.querySelector('[data-name="menu-trigger"]');
        }
        await this.setupFloatingUI();
        setTimeout(() => this.setupPopoverEventListeners(), 0);
        if (this.trigger_id && this.triggerEls.length) {
            this.setupExternalTriggerListeners();
        }
    }
    setupPopoverEventListeners() {
        if (this.menuEl) {
            this.menuEl.addEventListener('toggle', (event) => {
                const customEvent = event;
                this.isOpen = customEvent.newState === 'open';
                this.atuiMenuStateChange.emit(this.isOpen);
                if (this.isOpen) {
                    requestAnimationFrame(() => this.updatePosition());
                }
            });
        }
    }
    setupExternalTriggerListeners() {
        if (!this.triggerEls || this.triggerEls.length === 0)
            return;
        this.triggerEls.forEach((el) => {
            const listeners = [];
            if (this.trigger === 'hover') {
                const mouseEnterHandler = () => {
                    if (!this.disabled) {
                        this.triggerEl = el;
                        this.mouseEnterHandler();
                    }
                };
                const mouseLeaveHandler = () => {
                    if (!this.disabled) {
                        this.triggerEl = el;
                        this.mouseLeaveHandler();
                    }
                };
                listeners.push({ event: 'mouseenter', handler: mouseEnterHandler }, { event: 'mouseleave', handler: mouseLeaveHandler });
            }
            if (this.trigger === 'click') {
                const clickHandler = async (event) => {
                    if (!this.disabled) {
                        event.preventDefault();
                        event.stopPropagation();
                        this.triggerEl = el;
                        if (this.isOpen) {
                            await this.closeMenu();
                        }
                        else {
                            await this.openMenu();
                        }
                    }
                };
                listeners.push({ event: 'click', handler: clickHandler });
            }
            const keydownHandler = async (event) => {
                if (!this.disabled) {
                    this.triggerEl = el;
                    switch (event.key) {
                        case 'Escape':
                            await this.closeMenu();
                            break;
                        case 'Enter':
                        case ' ':
                            event.preventDefault();
                            await this.toggleMenu();
                            break;
                    }
                }
            };
            listeners.push({ event: 'keydown', handler: keydownHandler });
            listeners.forEach(({ event, handler }) => {
                el.addEventListener(event, handler);
                this.externalTriggerListeners.push({
                    element: el,
                    event,
                    handler,
                });
            });
            el.setAttribute('aria-haspopup', 'true');
            el.setAttribute('aria-expanded', 'false');
        });
    }
    disconnectedCallback() {
        this.cleanupFloatingUI();
        this.cleanupExternalTriggerListeners();
    }
    cleanupExternalTriggerListeners() {
        this.externalTriggerListeners.forEach(({ element, event, handler }) => {
            element.removeEventListener(event, handler);
        });
        this.externalTriggerListeners = [];
    }
    async mouseEnterHandler() {
        if (this.timedOutCloser)
            clearTimeout(this.timedOutCloser);
        if (!this.isOpen) {
            await this.openMenu();
        }
    }
    async mouseLeaveHandler() {
        await this.closeMenu();
    }
    async setupFloatingUI() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
        }
        if (this.triggerEl && this.menuEl) {
            const observer = new IntersectionObserver((entries) => {
                if (!entries[0].isIntersecting && this.isOpen) {
                    this.mouseLeaveHandler();
                }
            }, { threshold: 0 });
            observer.observe(this.triggerEl);
            this.cleanupAutoUpdate = autoUpdate(this.triggerEl, this.menuEl, () => {
                if (this.isOpen) {
                    const placement = this.getFloatingUIPlacement();
                    const strategy = 'fixed';
                    computePosition(this.triggerEl, this.menuEl, {
                        placement,
                        strategy,
                        middleware: [
                            offset(this.position === 'bottom' ||
                                this.position === 'top'
                                ? this.offset_y
                                : this.offset_x),
                            flip({
                                fallbackStrategy: 'bestFit',
                                padding: 8,
                            }),
                            shift({
                                padding: 8,
                                mainAxis: true,
                                crossAxis: true,
                            }),
                            size({
                                apply({ availableWidth, availableHeight, elements, }) {
                                    Object.assign(elements.floating.style, {
                                        maxWidth: `${availableWidth}px`,
                                        maxHeight: `${availableHeight}px`,
                                    });
                                },
                            }),
                        ],
                    }).then(({ x, y }) => {
                        const styles = {
                            position: strategy,
                            left: `${x}px`,
                            top: `${y}px`,
                            margin: '0',
                            transform: 'none',
                        };
                        if (this.width) {
                            styles.width = this.width;
                        }
                        Object.assign(this.menuEl.style, styles);
                    });
                }
            }, {
                ancestorScroll: true,
                ancestorResize: true,
                elementResize: true,
                layoutShift: true,
                animationFrame: true,
            });
            const originalCleanup = this.cleanupAutoUpdate;
            this.cleanupAutoUpdate = () => {
                originalCleanup();
                observer.disconnect();
            };
        }
    }
    cleanupFloatingUI() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
    }
    async updateFloatingPosition() {
        if (!this.triggerEl || !this.menuEl)
            return;
        await this.setupFloatingUI();
    }
    getFloatingUIPlacement() {
        const positionMap = {
            top: 'top',
            bottom: 'bottom',
            left: 'left',
            right: 'right',
        };
        const alignMap = {
            start: 'start',
            end: 'end',
        };
        const position = positionMap[this.position] || 'bottom';
        const align = alignMap[this.align] || 'start';
        return `${position}-${align}`;
    }
    render() {
        return (h(Host, { key: 'ed4ba146ec1573c03321a7a953e728f187c52ae9', class: "z-modal relative" }, h("div", { key: 'ef6afe909b65031db18630ffc261f04e8f14b7bf', class: "relative", onBlur: () => this.trigger === 'click' && !this.disabled
                ? this.mouseLeaveHandler()
                : null }, !this.trigger_id && (h("div", { key: '60f8046051e3ee2cf2f29cdb9466f2b7961122d0', "aria-haspopup": "true", "data-name": "menu-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, onMouseEnter: () => this.trigger === 'hover' && !this.disabled
                ? this.mouseEnterHandler()
                : null, onKeyDown: async (event) => {
                switch (event.key) {
                    case 'Escape':
                        await this.closeMenu();
                        break;
                    case 'Enter':
                    case ' ':
                        event.preventDefault();
                        await this.toggleMenu();
                        break;
                }
            }, onMouseLeave: () => this.trigger === 'hover' && !this.disabled
                ? this.mouseLeaveHandler()
                : null, onClick: async (event) => {
                if (this.trigger === 'click' &&
                    !this.disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.isOpen) {
                        await this.closeMenu();
                    }
                    else {
                        await this.openMenu();
                    }
                }
            }, class: this.disabled ? 'contents' : '' }, h("slot", { key: '9d4c2a003bce41631d5a4048492e37c6e7cfb6d1', name: "menu-trigger" }))), h("div", { key: 'fee26237ddee3aa478228196bee21592a087dd6b', role: this.role, "data-position": this.position, "data-align": this.align, ref: (el) => (this.menuEl = el), "aria-hidden": `${this.isOpen ? 'false' : 'true'}`, popover: "auto", id: this.popoverId, onMouseEnter: () => this.trigger === 'hover' &&
                !this.disabled &&
                this.mouseEnterHandler(), onMouseLeave: () => this.trigger === 'hover' &&
                !this.disabled &&
                this.mouseLeaveHandler(), onKeyDown: async (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ' ||
                    event.key === 'Escape') {
                    if (this.autoclose) {
                        await this.mouseLeaveHandler();
                    }
                }
            }, onClick: () => this.autoclose && this.mouseLeaveHandler(), class: "w-fit rounded-md bg-white p-4 shadow-md", "data-name": "menu-content-wrapper" }, h("slot", { key: '0fb0d453f16a42d0c7458eca80f931f8bf71a574' })))));
    }
    get el() { return this; }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
}, [260, "atui-menu", {
        "offset_x": [2],
        "offset_y": [2],
        "position": [1],
        "align": [1],
        "width": [1],
        "autoclose": [4],
        "trigger": [1],
        "role": [1],
        "disabled": [4],
        "trigger_id": [1],
        "isOpen": [32],
        "toggleMenu": [64],
        "openMenu": [64],
        "closeMenu": [64],
        "getIsOpen": [64]
    }, undefined, {
        "disabled": ["disabledChanged"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-menu"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiMenu);
            }
            break;
    } });
}

export { AtuiMenu as A, defineCustomElement as d };
//# sourceMappingURL=p-C6qlH9rK.js.map

//# sourceMappingURL=p-C6qlH9rK.js.map