import { h, Host, } from "@stencil/core";
import { computePosition, flip, shift, offset, size, autoUpdate, } from "@floating-ui/dom";
export class AtuiMenu {
    constructor() {
        /**
         * Menu's x offset from edge in pixels. Only applied for origin_x = 'start' | 'end'
         */
        this.offset_x = 0;
        /**
         * Menu's y offset from edge in pixels. Only applied for origin_y = 'top' | 'bottom'
         */
        this.offset_y = 0;
        /**
         * Position of opened menu element relative to trigger element.
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
        this.updatePosition = async () => {
            if (this.triggerEl && this.menuEl && this.isOpen) {
                await this.updateFloatingPosition();
            }
        };
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
    }
    /**
     * Opens the dropdown menu.
     */
    async openMenu() {
        if (this.disabled) {
            return; // Don't open if disabled
        }
        if (this.menuEl) {
            this.menuEl.showPopover();
            this.isOpen = true;
        }
        this.atuiMenuStateChange.emit(true);
        await this.updatePosition();
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
    }
    /**
     * Return the current menu open state
     */
    async getIsOpen() {
        return this.isOpen;
    }
    async componentDidLoad() {
        this.popoverId = `atui-menu-${Math.random().toString(36).substr(2, 9)}`;
        await this.setupFloatingUI();
        setTimeout(() => this.setupPopoverEventListeners(), 0);
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
    disconnectedCallback() {
        this.cleanupFloatingUI();
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
        this.setupFloatingUI();
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
        const popoverAttrs = {
            popover: 'auto',
            id: this.popoverId,
        };
        const triggerAttrs = {};
        return (h(Host, { key: 'daea5bb52871c22f749e376ddfeea4bec58b3688', class: "relative z-modal" }, h("div", { key: 'dba4f637383eae25ee84c6d907a26d7a003bf5ec', class: "relative", onBlur: () => this.trigger === 'click' && !this.disabled
                ? this.mouseLeaveHandler()
                : null }, h("div", Object.assign({ key: '67f378f73edce625ba9e04a1733909d8ea4c88f3', "aria-haspopup": "true", "data-name": "menu-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}` }, triggerAttrs, { onMouseEnter: () => this.trigger === 'hover' && !this.disabled
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
            }, class: this.disabled ? 'contents' : '' }), h("slot", { key: '63769b68d5bea6e94deb3a25f399e3c5fccf7070', name: "menu-trigger" })), h("div", Object.assign({ key: '5740471e881c4aa21d0b0e4ff598fc23b37b6a5a', role: this.role, "data-position": this.position, "data-align": this.align, ref: (el) => (this.menuEl = el), "aria-hidden": `${this.isOpen ? 'false' : 'true'}` }, popoverAttrs, { onMouseEnter: () => this.trigger === 'hover' &&
                !this.disabled &&
                this.mouseEnterHandler(), onMouseLeave: () => this.trigger === 'hover' &&
                !this.disabled &&
                this.mouseLeaveHandler(), onKeyDown: (event) => {
                if (event.key === 'Enter' ||
                    event.key === ' ' ||
                    event.key === 'Escape') {
                    if (this.autoclose) {
                        this.mouseLeaveHandler();
                    }
                }
            }, onClick: () => this.autoclose && this.mouseLeaveHandler(), class: "w-fit rounded-md border border-solid border-light bg-white p-4 shadow-md", "data-name": "menu-content-wrapper" }), h("slot", { key: '22aaaffd1e1187b4724c50b81b6c99d5ebc3167c', name: "menu-content" })))));
    }
    static get is() { return "atui-menu"; }
    static get properties() {
        return {
            "offset_x": {
                "type": "number",
                "attribute": "offset_x",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Menu's x offset from edge in pixels. Only applied for origin_x = 'start' | 'end'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "offset_y": {
                "type": "number",
                "attribute": "offset_y",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Menu's y offset from edge in pixels. Only applied for origin_y = 'top' | 'bottom'"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "0"
            },
            "position": {
                "type": "string",
                "attribute": "position",
                "mutable": false,
                "complexType": {
                    "original": "Position",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {
                        "Position": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-menu/atui-menu.tsx",
                            "id": "src/components/atui-menu/atui-menu.tsx::Position"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of opened menu element relative to trigger element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'bottom'"
            },
            "align": {
                "type": "string",
                "attribute": "align",
                "mutable": false,
                "complexType": {
                    "original": "Align",
                    "resolved": "\"end\" | \"start\"",
                    "references": {
                        "Align": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-menu/atui-menu.tsx",
                            "id": "src/components/atui-menu/atui-menu.tsx::Align"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Alignment of opened menu element relative to trigger element."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'start'"
            },
            "width": {
                "type": "string",
                "attribute": "width",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "String representing the 'width' style of the menu element ('auto' or 'NUMpx'). When not specified, defaults to trigger element width.\nTo fit menu to content use width=\"fit-content\" - Avoid width='auto' as this will result in 100% width."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "autoclose": {
                "type": "boolean",
                "attribute": "autoclose",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Prevent closing of menu when options are selected. Used for multi-selection controls."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "trigger": {
                "type": "string",
                "attribute": "trigger",
                "mutable": false,
                "complexType": {
                    "original": "OpenOn",
                    "resolved": "\"click\" | \"hover\"",
                    "references": {
                        "OpenOn": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-menu/atui-menu.tsx",
                            "id": "src/components/atui-menu/atui-menu.tsx::OpenOn"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Event type that triggers the menu open state. Click or Hover."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'click'"
            },
            "role": {
                "type": "string",
                "attribute": "role",
                "mutable": false,
                "complexType": {
                    "original": "AriaRole",
                    "resolved": "\"listbox\" | \"menu\"",
                    "references": {
                        "AriaRole": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-menu/atui-menu.tsx",
                            "id": "src/components/atui-menu/atui-menu.tsx::AriaRole"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Close the menu when the user clicks within the menu panel. Default for single selection menus."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'menu'"
            },
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Prevent opening menu"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {}
        };
    }
    static get events() {
        return [{
                "method": "atuiMenuStateChange",
                "name": "atuiMenuStateChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an event containing the open menu state."
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggleMenu": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles the dropdown menu's open state.",
                    "tags": []
                }
            },
            "openMenu": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Opens the dropdown menu.",
                    "tags": []
                }
            },
            "closeMenu": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Closes the dropdown menu.",
                    "tags": []
                }
            },
            "getIsOpen": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Return the current menu open state",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "disabled",
                "methodName": "disabledChanged"
            }];
    }
}
//# sourceMappingURL=atui-menu.js.map
