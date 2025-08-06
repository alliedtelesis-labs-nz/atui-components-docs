import { h, Host, } from "@stencil/core";
import { cva } from "class-variance-authority";
import { computePosition, flip, shift, offset, autoUpdate, } from "@floating-ui/dom";
import { createMenuKeydownHandler, focusFirstElement, } from "../../utils/keyboard-navigation";
const variants = cva('z-menu w-full rounded-md border border-solid border-light bg-white p-4 shadow-md', {
    variants: {
        open: {
            true: null,
            false: 'hidden',
        },
    },
});
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
         * String representing the 'width' style of the menu element ('auto' or 'NUMpx'). Use auto when you want the menu to inherit the host's width..
         */
        this.width = '280px';
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
        /**
         * Use portal-style positioning (fixed to viewport) instead of relative positioning - required for ag-grid cell components
         */
        this.portal = false;
        this.isOpen = false;
        this.portalContainer = null;
        this.updatePosition = async () => {
            if (this.triggerEl && this.menuEl && this.isOpen) {
                await this.updateFloatingPosition();
            }
        };
        this.handleOutsideClick = (event) => {
            var _a;
            if (this.isOpen &&
                !this.el.contains(event.target) &&
                !((_a = this.portalContainer) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                this.mouseLeaveHandler();
            }
        };
        this.handleMenuKeyDown = (event) => {
            const handler = createMenuKeydownHandler({
                container: this.menuEl,
                onEscape: () => {
                    this.closeMenu();
                    this.triggerEl.focus();
                },
            });
            handler(event);
        };
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async toggleMenu() {
        this.atuiMenuStateChange.emit(!this.isOpen);
        this.isOpen = !this.isOpen;
        if (this.isOpen && this.portal) {
            this.moveMenuToPortal();
        }
        else if (!this.isOpen && this.portal) {
            this.cleanupPortalContainer();
        }
        this.updatePosition();
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async openMenu() {
        this.isOpen = true;
        this.atuiMenuStateChange.emit(true);
        if (this.portal) {
            this.moveMenuToPortal();
        }
        await this.updatePosition();
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async closeMenu() {
        this.isOpen = false;
        this.atuiMenuStateChange.emit(false);
        if (this.portal) {
            this.cleanupPortalContainer();
        }
    }
    /**
     * Return the current menu open state
     */
    async getIsOpen() {
        return this.isOpen;
    }
    componentDidLoad() {
        window.addEventListener('click', this.handleOutsideClick);
        this.setupFloatingUI();
    }
    disconnectedCallback() {
        window.removeEventListener('click', this.handleOutsideClick);
        this.cleanupFloatingUI();
        this.cleanupPortalContainer();
    }
    mouseEnterHandler() {
        if (this.timedOutCloser)
            clearTimeout(this.timedOutCloser);
        if (!this.isOpen) {
            this.isOpen = true;
            this.atuiMenuStateChange.emit(true);
            if (this.portal) {
                this.moveMenuToPortal();
            }
            this.updatePosition();
        }
    }
    mouseLeaveHandler() {
        this.isOpen = false;
        this.atuiMenuStateChange.emit(false);
        if (this.portal) {
            this.cleanupPortalContainer();
        }
    }
    //TODO: Replace floatingUI positioning with CSS popover and anchor positioning when supported in a browsers
    createPortalContainer() {
        if (!this.portalContainer) {
            this.portalContainer = document.createElement('div');
            Object.assign(this.portalContainer.style, {
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: '9999',
            });
            this.portalContainer.setAttribute('data-atui-menu-portal', 'true');
            document.body.appendChild(this.portalContainer);
        }
    }
    moveMenuToPortal() {
        if (this.portal && this.menuEl && this.isOpen) {
            this.createPortalContainer();
            this.portalContainer.innerHTML = '';
            this.portalContainer.appendChild(this.menuEl);
            this.menuEl.style.display = '';
            Object.assign(this.menuEl.style, {
                pointerEvents: 'auto',
                display: 'block',
                visibility: 'visible',
                position: 'fixed',
                width: this.width,
                zIndex: '9999',
            });
            focusFirstElement(this.menuEl);
            this.menuEl.addEventListener('keydown', this.handleMenuKeyDown);
            this.setupFloatingUI();
        }
    }
    cleanupPortalContainer() {
        if (this.portalContainer && this.portalContainer.parentNode) {
            if (this.menuEl) {
                this.menuEl.removeEventListener('keydown', this.handleMenuKeyDown);
                const menuWrapper = this.el.querySelector('[data-name="menu-content-wrapper"]');
                if (menuWrapper) {
                    menuWrapper.appendChild(this.menuEl);
                }
                Object.assign(this.menuEl.style, {
                    display: '',
                    visibility: '',
                    pointerEvents: '',
                    position: '',
                });
            }
            this.portalContainer.parentNode.removeChild(this.portalContainer);
            this.portalContainer = null;
        }
    }
    setupFloatingUI() {
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
                    const strategy = this.portal ? 'fixed' : 'absolute';
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
                        ],
                    }).then(({ x, y }) => {
                        Object.assign(this.menuEl.style, {
                            position: strategy,
                            left: `${x}px`,
                            top: `${y}px`,
                            width: this.width,
                            zIndex: '9999',
                        });
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
        const classname = variants({
            open: this.isOpen && !this.disabled,
        });
        return (h(Host, { key: '0f7657697205f12f9830e68dfbde2a5cf9ee9927' }, h("div", { key: 'd8c43f09aed813d88540e56681ab8c459f02aa46', class: "relative", onBlur: () => this.trigger === 'click' && !this.disabled
                ? this.mouseLeaveHandler()
                : null }, h("div", { key: '160570bc4c4a6a3634bd50ec4f8d618df0740da6', "aria-haspopup": "true", "data-name": "menu-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, onMouseEnter: () => this.trigger === 'hover' && !this.disabled
                ? this.mouseEnterHandler()
                : null, onKeyDown: async (event) => {
                switch (event.key) {
                    case 'Escape':
                        await this.closeMenu();
                        break;
                    case 'Enter':
                    case ' ':
                        event.preventDefault();
                        await this.openMenu();
                        break;
                }
            }, onMouseLeave: () => this.trigger === 'hover' && !this.disabled
                ? this.mouseLeaveHandler()
                : null, onClick: () => this.trigger === 'click' && !this.disabled
                ? this.toggleMenu()
                : null, class: this.disabled ? 'contents' : '' }, h("slot", { key: '03af929c5c7f52d1609b2e4afd19a09679257299', name: "menu-trigger" })), h("div", { key: '309d4498c6e6a047bbb35b9c2bd659e765870323', role: this.role, "data-position": this.position, "data-align": this.align, ref: (el) => (this.menuEl = el), "aria-hidden": `${this.isOpen ? 'false' : 'true'}`, onMouseEnter: () => this.trigger === 'hover' &&
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
            }, onClick: () => this.autoclose && this.mouseLeaveHandler(), class: classname, "data-name": "menu-content-wrapper" }, h("slot", { key: 'b05589a756bee1570d3fbcfaaf71903de73c9ff8', name: "menu-content" })))));
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
                    "text": "String representing the 'width' style of the menu element ('auto' or 'NUMpx'). Use auto when you want the menu to inherit the host's width.."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'280px'"
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
            },
            "portal": {
                "type": "boolean",
                "attribute": "portal",
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
                    "text": "Use portal-style positioning (fixed to viewport) instead of relative positioning - required for ag-grid cell components"
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
                    "text": "Toggles the dropdown menu's open state.",
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
                    "text": "Toggles the dropdown menu's open state.",
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
}
//# sourceMappingURL=atui-menu.js.map
