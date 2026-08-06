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
    side = 'left';
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
        return (h(Host, { key: '0073f94f3b9bf7fd5e896ec872b98bb4c0de3056', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-side": this.side, class: `mode-${this.mode} side-${this.side} collapse-${this.collapsible}` }, isModalOverlay && (h("div", { key: 'e463ac6066aa69c672322eaa00b7ad3c8c14e8e3', class: "backdrop", "data-name": "backdrop", onClick: this.handleBackdropClick, "aria-hidden": "true" })), h("nav", { key: 'b8903362aed2d6d21391e6130227d9a5b6817f6f', "data-name": "sidebar", "data-open": this.isOpen, class: `sidebar collapse-${this.collapsible} w-${this.width}`, "aria-hidden": !this.isOpen && this.collapsible === 'offcanvas'
                ? 'true'
                : 'false', role: "navigation", "aria-label": "Sidebar navigation" }, h("div", { key: '2040601774c4b49b87adb37ff8239f1b19057651', class: "sidebar-header", "data-name": "sidebar-header" }, h("slot", { key: '4c7446263321d3097e3051fce34ac9fa36befa9a', name: "sidebar-header" })), h("div", { key: '8bfb0815c9573e485d37c1761665f7d2844be261', class: "sidebar-content", "data-name": "sidebar-content" }, h("slot", { key: 'ce6f17552fc5d6370c62d8b58d8c7d5e64bc8b79', name: "sidebar-content" })), h("div", { key: '206fea29220cbebc84bd6b66c42293956554352c', class: `sidebar-footer`, "data-name": "sidebar-footer" }, h("slot", { key: 'df8438f0d93e082a88fa6f78b63d7e2ac46f6827', name: "sidebar-footer" }))), h("div", { key: '5ae1af4df2f51eba98aa39457158501508d8f86f', class: "page-content", "data-name": "page-content", "aria-hidden": isModalOverlay ? 'true' : 'false', inert: isModalOverlay }, h("slot", { key: 'e8940826d666cf845df369122701d160407d16ee', name: "page-content" }))));
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
                "attribute": "side",
                "defaultValue": "'left'"
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
