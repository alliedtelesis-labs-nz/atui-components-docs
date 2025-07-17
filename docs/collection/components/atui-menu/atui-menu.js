import { h, Host, } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('fixed z-menu w-full rounded-md border border-solid border-light bg-white p-4 shadow-md', {
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
        this.isOpen = false;
        this.isIntersectingViewport = false;
        this.updatePosition = () => {
            requestAnimationFrame(() => {
                const trigger = this.triggerEl;
                if (trigger) {
                    this.triggerPosition = trigger.getBoundingClientRect();
                }
            });
        };
        this.handleOutsideClick = (event) => {
            if (this.isOpen && !this.el.contains(event.target)) {
                this.mouseLeaveHandler();
            }
        };
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async toggleMenu() {
        this.atuiMenuStateChange.emit(!this.isOpen);
        this.isOpen = !this.isOpen;
        this.updatePosition();
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async openMenu() {
        this.isOpen = true;
        this.atuiMenuStateChange.emit(true);
    }
    /**
     * Toggles the dropdown menu's open state.
     */
    async closeMenu() {
        this.isOpen = false;
        this.atuiMenuStateChange.emit(false);
    }
    /**
     * Return the current menu open state
     */
    async getIsOpen() {
        return this.isOpen;
    }
    componentDidLoad() {
        this.updatePosition();
        window.addEventListener('scroll', this.updatePosition, true);
        window.addEventListener('resize', this.updatePosition);
        window.addEventListener('click', this.handleOutsideClick);
        this.initIntersectionObserver();
    }
    disconnectedCallback() {
        window.removeEventListener('scroll', this.updatePosition, true);
        window.removeEventListener('resize', this.updatePosition);
        window.removeEventListener('click', this.handleOutsideClick);
        if (this.observer) {
            this.observer.disconnect();
        }
    }
    initIntersectionObserver() {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        };
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    this.isIntersectingViewport = true;
                    this.positionStrategy(entry);
                }
                else {
                    this.isIntersectingViewport = false;
                }
            });
        }, options);
        const menuElement = this.el.querySelector('[data-name="menu-content-wrapper"]');
        if (menuElement) {
            this.observer.observe(menuElement);
        }
    }
    positionStrategy(entry) {
        if (!this.isOpen)
            return;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const { top, right, left, height } = entry.boundingClientRect;
        // TODO: VCOMPLIB-887: Improve menu positioning strategy
        if (this.position === 'bottom' && top + height >= viewportHeight) {
            this.position = 'top';
        }
        else if (this.position === 'top' && top <= 0) {
            this.position = 'bottom';
        }
        if (this.position === 'right' && right >= viewportWidth) {
            this.position = 'left';
        }
        else if (this.position === 'left' && left <= 0) {
            this.position = 'right';
        }
    }
    mouseEnterHandler() {
        if (this.timedOutCloser)
            clearTimeout(this.timedOutCloser);
        if (!this.isOpen) {
            this.isOpen = true;
            this.atuiMenuStateChange.emit(true);
            this.updatePosition();
        }
    }
    mouseLeaveHandler() {
        this.isOpen = false;
        this.atuiMenuStateChange.emit(false);
    }
    get positionStyle() {
        var _a, _b;
        const style = {};
        const triggerRect = (_a = this.triggerEl) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const menuRect = (_b = this.menuEl) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
        if (!triggerRect)
            return style;
        switch (this.position) {
            case 'top':
                style.top = `${triggerRect.top - menuRect.height}px`;
                if (this.align === 'start') {
                    style.left = `${triggerRect.left}px`;
                }
                else {
                    style.right = `${window.innerWidth - triggerRect.right}px`;
                }
                break;
            case 'bottom':
                style.top = `${triggerRect.bottom + this.offset_y}px`;
                if (this.align === 'start') {
                    style.left = `${triggerRect.left}px`;
                }
                else {
                    style.right = `${window.innerWidth - triggerRect.right - 8}px`;
                }
                break;
            case 'left':
                style.left = `${triggerRect.left - menuRect.width}px`;
                if (this.align === 'start') {
                    style.top = `${triggerRect.top}px`;
                }
                else {
                    style.bottom = `${window.innerHeight - triggerRect.bottom}px`;
                }
                break;
            case 'right':
                style.left = `${triggerRect.right + this.offset_x}px`;
                if (this.align === 'start') {
                    style.top = `${triggerRect.top}px`;
                }
                else {
                    style.bottom = `${window.innerHeight - triggerRect.bottom}px`;
                }
                break;
        }
        style.width = this.width;
        return style;
    }
    render() {
        const classname = variants({
            open: this.isOpen,
        });
        return (h(Host, { key: '23b47de71ea9b397d257fac0597ad347c0937a6b' }, h("div", { key: '0c491d413415451f14d7e975e4b8c7b04b40f1db', class: "relative", onBlur: () => this.trigger === 'click' && !this.disabled
                ? this.mouseLeaveHandler()
                : null }, h("div", { key: '667edb9cd222600f2da52c91566a78f03879dbba', "aria-haspopup": "true", "data-name": "menu-trigger", ref: (el) => (this.triggerEl = el), "aria-expanded": `${this.isOpen ? 'true' : 'false'}`, onMouseEnter: () => this.trigger === 'hover' && !this.disabled
                ? this.mouseEnterHandler()
                : null, onKeyDown: async (event) => {
                if (event.key === 'Escape') {
                    await this.closeMenu();
                }
            }, onMouseLeave: () => this.trigger === 'hover' && !this.disabled
                ? this.mouseLeaveHandler()
                : null, onClick: () => this.trigger === 'click' && !this.disabled
                ? this.toggleMenu()
                : null, class: this.disabled ? 'contents' : '' }, h("slot", { key: '401129981392a64300b9e4fdbfa4e0555c6d917c', name: "menu-trigger" })), h("div", { key: '3434330e723e9d26563527ae308a6edef948c129', role: this.role, style: this.positionStyle, "data-position": this.position, "data-align": this.align, ref: (el) => (this.menuEl = el), "aria-hidden": `${this.isOpen ? 'false' : 'true'}`, onMouseEnter: () => this.trigger === 'hover' &&
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
            }, onClick: () => this.autoclose && this.mouseLeaveHandler(), class: classname, "data-name": "menu-content-wrapper" }, h("slot", { key: 'a635182689f4d391af86c99f1754ab8389536ba1', name: "menu-content" })))));
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
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "isIntersectingViewport": {},
            "triggerPosition": {}
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
