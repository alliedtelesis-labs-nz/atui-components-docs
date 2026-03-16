import { h, Host, } from "@stencil/core";
/**
 * @category Navigation
 * @description A collapsible sidebar navigation component with menu support and responsive behavior. Features animation, auto-collapse, and keyboard navigation.
 * @slot sidebar-header - Header of the sidebar (likely to be atui-sidebar-trigger)
 * @slot sidebar-content - Content displayed in the sidebar (likely to be atui-sidebar-menu elements)
 * @slot sidebar-footer - Footer displayed in the sidebar
 * @slot page-content - Content of the page
 */
export class AtSidebarComponent {
    /**
     * Position of the sidebar on the page
     */
    side;
    /**
     * Width of the sidebar
     */
    width = 'menu';
    /**
     * Size of the sidebar when collapsed.
     */
    collapsible;
    /**
     * How the sidenav interacts with main content when open
     */
    mode;
    /**
     * Display a clickable backdrop when mode = over
     */
    backdrop = false;
    /**
     * Opens the sidebar by default when set
     */
    default_open = false;
    isOpen = false;
    /**
     * Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open
     */
    atuiSidebarChange;
    el;
    componentWillLoad() {
        if (this.default_open !== undefined) {
            this.isOpen = this.default_open;
        }
        this.atuiSidebarChange.emit(this.isOpen);
    }
    componentDidLoad() {
        this.el.addEventListener('atuiClick', this.handleMenuItemClick);
    }
    /**
     * Toggles the sidebar's open state.
     */
    async toggleSidebar() {
        this.isOpen = !this.isOpen;
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    async getIsOpen() {
        return this.isOpen;
    }
    handleBackdropClick = () => {
        if (this.mode === 'over' && this.isOpen) {
            this.toggleSidebar();
        }
    };
    /**
    Automate closing of the menu via menu-item click if the menu is in offcanvas mode and currently open
     */
    handleMenuItemClick = (event) => {
        const target = event.target;
        if (target.getAttribute('slot') === 'accordion-trigger') {
            return;
        }
        if (this.collapsible === 'offcanvas' && this.isOpen) {
            this.toggleSidebar();
        }
    };
    render() {
        const isModalOverlay = this.mode === 'over' && this.backdrop && this.isOpen;
        return (h(Host, { key: 'ea1ff09e1a10a47e1cb4ddd293e90883bdb86a7e', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: '8eebade9eef85416a30695f2e48828205529d4d1', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: '11cb6bbe7a13cb555e97ab4d3d0726f75f890398', "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible} overflow-auto`, "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false' }, h("div", { key: '8656d5529256f49eeb07ca06a33ad2f860cd3a0c', class: "sidebar-header", "data-name": "sidebar-header" }, h("slot", { key: '56431927fb242d14843ec3845d9f5b88bcb13c12', name: "sidebar-header" })), h("div", { key: 'ff973c69a5f22c17d8def48a7ba3e75ce05d2606', class: "sidebar-content", "data-name": "sidebar-content" }, h("slot", { key: '92772601127a4808adb8b607447224ec72417d15', name: "sidebar-content" })), h("div", { key: '8bb26a039f24c779c0e14b963fc6dd13c4c16589', class: `sidebar-footer`, "data-name": "sidebar-footer" }, h("slot", { key: 'aafa364a1f26edac908e4a54831f2672d42c7eb5', name: "sidebar-footer" }))), h("div", { key: '2c587399d0ad24475dc3b1d887384d0ed7cd0140', class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: 'ac8e9c9bef674ee4b3929e0e153e3c83035d38b4', name: "page-content" }))));
    }
    static get is() { return "at-sidebar"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-sidebar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-sidebar.css"]
        };
    }
    static get properties() {
        return {
            "side": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right'",
                    "resolved": "\"left\" | \"right\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Position of the sidebar on the page"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "side"
            },
            "width": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtSideBarWidth",
                    "resolved": "\"auto\" | \"menu\" | \"panel-lg\" | \"panel-md\" | \"panel-sm\" | \"panel-xl\" | \"panel-xs\"",
                    "references": {
                        "AtSideBarWidth": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-sidebar/at-sidebar.tsx",
                            "id": "src/components/at-sidebar/at-sidebar.tsx::AtSideBarWidth"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Width of the sidebar"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'menu'"
            },
            "collapsible": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'offcanvas' | 'icon' | 'none'",
                    "resolved": "\"icon\" | \"none\" | \"offcanvas\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Size of the sidebar when collapsed."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "collapsible"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'over' | 'push'",
                    "resolved": "\"over\" | \"push\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How the sidenav interacts with main content when open"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode"
            },
            "backdrop": {
                "type": "boolean",
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
                    "text": "Display a clickable backdrop when mode = over"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "backdrop",
                "defaultValue": "false"
            },
            "default_open": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Opens the sidebar by default when set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "default_open",
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
                "method": "atuiSidebarChange",
                "name": "atuiSidebarChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open"
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "toggleSidebar": {
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
                    "text": "Toggles the sidebar's open state.",
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
                    "text": "Getter method for the open state of the sidebar",
                    "tags": [{
                            "name": "returns",
                            "text": "The current open state of the sidebar"
                        }]
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
