'use strict';

var index = require('./index-w3vomLqM.js');
var floatingUi_dom = require('./floating-ui.dom-Ca6tS7ef.js');

const AtMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiMenuStateChange = index.createEvent(this, "atuiMenuStateChange", 7);
    }
    /**
     * Menu's x offset from edge in pixels. Only applied for origin_x = 'start' | 'end'
     */
    offset_x = 0;
    /**
     * Menu's y offset from edge in pixels. Only applied for origin_y = 'top' | 'bottom'
     */
    offset_y = 0;
    /**
     * Position of opened menu element relative to the trigger element.
     */
    position = 'bottom';
    /**
     * Alignment of opened menu element relative to trigger element.
     */
    align = 'start';
    /**
     * String representing the 'width' style of the menu element ('auto' or 'NUMpx'). When not specified, defaults to trigger element width.
     * To fit menu to content use width="fit-content" - Avoid width='auto' as this will result in 100% width.
     */
    width;
    /**
     * Prevent closing of menu when options are selected. Used for multi-selection controls.
     */
    autoclose = true;
    /**
     * Event type that triggers the menu open state. Click or Hover.
     */
    trigger = 'click';
    /**
     * Close the menu when the user clicks within the menu panel. Default for single selection menus.
     */
    role = 'menu';
    /**
     * Prevent opening menu
     */
    disabled = false;
    /**
     * Data-id of an external element to use as the trigger. When provided, the trigger slot is not needed.
     */
    trigger_id;
    disabledChanged(newValue) {
        if (newValue && this.isOpen) {
            this.closeMenu();
        }
    }
    isOpen = false;
    triggerEl;
    menuEl;
    triggerEls = [];
    popoverId;
    cleanupAutoUpdate;
    updatePosition = async () => {
        if (this.triggerEl && this.menuEl && this.isOpen) {
            await this.updateFloatingPosition();
        }
    };
    get el() { return index.getElement(this); }
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
    /**
     * Emits an event containing the open menu state.
     */
    atuiMenuStateChange;
    timedOutCloser;
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
    externalTriggerListeners = [];
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
            this.cleanupAutoUpdate = floatingUi_dom.autoUpdate(this.triggerEl, this.menuEl, () => {
                if (this.isOpen) {
                    const placement = this.getFloatingUIPlacement();
                    const strategy = 'fixed';
                    floatingUi_dom.computePosition(this.triggerEl, this.menuEl, {
                        placement,
                        strategy,
                        middleware: [
                            floatingUi_dom.offset(this.position === 'bottom' ||
                                this.position === 'top'
                                ? this.offset_y
                                : this.offset_x),
                            floatingUi_dom.flip({
                                fallbackStrategy: 'bestFit',
                                padding: 8,
                            }),
                            floatingUi_dom.shift({
                                padding: 8,
                                mainAxis: true,
                                crossAxis: true,
                            }),
                            floatingUi_dom.size({
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
        return (index.h(index.Host, { key: 'f95f417e0572a71c5809da9b0b9c7cf9d35a5d28', class: "relative", onBlur: () => this.trigger === 'click' && !this.disabled
                ? this.mouseLeaveHandler()
                : null }, !this.trigger_id && (index.h("div", { key: '325794e87d624f5025660f765f83127cf3e734ce', "aria-haspopup": "true", "data-name": "menu-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, onMouseEnter: () => this.trigger === 'hover' && !this.disabled
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
                if (this.trigger === 'click' && !this.disabled) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.isOpen) {
                        await this.closeMenu();
                    }
                    else {
                        await this.openMenu();
                    }
                }
            }, class: this.disabled ? 'contents' : '' }, index.h("slot", { key: 'b83e1e4148f9830f8287c570c8e6dee329d747ba', name: "menu-trigger" }))), index.h("div", { key: '4f8d5c3bf2c13c1cd27f034db3863d09f2629d43', role: this.role, "data-position": this.position, "data-align": this.align, ref: (el) => (this.menuEl = el), "aria-hidden": `${this.isOpen ? 'false' : 'true'}`, popover: "auto", id: this.popoverId, onMouseEnter: () => this.trigger === 'hover' &&
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
            }, onClick: () => this.autoclose && this.mouseLeaveHandler(), class: "w-fit rounded-md bg-white p-4 shadow-md", "data-name": "menu-content-wrapper" }, index.h("slot", { key: 'bcafa5c06494a4ced815acd5706ae4782368bc77' }))));
    }
    static get watchers() { return {
        "disabled": ["disabledChanged"]
    }; }
};

exports.at_menu = AtMenu;
//# sourceMappingURL=at-menu.entry.cjs.js.map
