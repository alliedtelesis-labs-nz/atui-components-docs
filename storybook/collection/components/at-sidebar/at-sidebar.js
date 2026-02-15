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
        return (h(Host, { key: '37e5cccdfbce5748f35956b32b5e3a390d7e33ba', "data-state": this.isOpen ? 'expanded' : 'collapsed', class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: 'b8d4aa5e3d233c320db3cdbb2358e2ea80d737ac', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: '8bbdb11610f5832a95ab9810c8bd67e14e2dd0d8', "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible}`, "aria-expanded": this.isOpen ? 'true' : 'false', "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false' }, h("div", { key: 'd0776f2acc58a0897c02dfb2f3ccd8c0fd5e2eee', class: "sidebar-header", "data-name": "sidebar-header" }, h("slot", { key: 'bcffb23ef0ef2f593725a07f97079ccf0e943e51', name: "sidebar-header" })), h("div", { key: 'b6b79b771d3136a80305dda8d6a915d1cb5c6e4d', class: "sidebar-content", "data-name": "sidebar-content" }, h("slot", { key: 'fe9ee0fa5434b5a40449c86334f1fd58591bf493', name: "sidebar-content" })), h("div", { key: '023db7173df0c24fb3dde6d7104cdd572642c054', class: `sidebar-footer`, "data-name": "sidebar-footer" }, h("slot", { key: '7cd52aec5205f74e840e58f0095cb6dd150dd273', name: "sidebar-footer" }))), h("div", { key: 'b3e6c8cc33ed9872c4da495cfc630d6721c40707', class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: 'afcfb39f0bcabefcad2f3230e8f9f3fa879cc495', name: "page-content" }))));
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
