import { h, Host, } from "@stencil/core";
import { cva } from "class-variance-authority";
const variants = cva('transition-size relative flex flex-col overflow-y-auto overflow-x-hidden bg-sidebar-background text-sidebar-foreground duration-300 ease-in-out', {
    variants: {
        collapsible: {
            none: null,
            icon: 'min-w-sidebar-collapsed group-data-[state=collapsed]/sidebar-wrapper:w-sidebar-collapsed',
            offcanvas: 'group-data-[state=collapsed]/sidebar-wrapper:w-0',
        },
        side: {
            left: null,
            right: 'order-1',
        },
    },
});
/**
 * @category Navigation
 * @description A collapsible sidebar navigation component with menu support and responsive behavior. Features animation, auto-collapse, and keyboard navigation.
 * @slot sidebar-header - Header of the sidebar (likely to be atui-sidebar-trigger)
 * @slot sidebar-content - Content displayed in the sidebar (likely to be atui-sidebar-menu elements)
 * @slot sidebar-footer - Footer displayed in the sidebar
 * @slot page-content - Content of the page
 */
export class AtuiSidebarComponent {
    constructor() {
        /**
         * Position of the sidebar on the page
         */
        this.side = 'left';
        /**
         * Width of the sidebar
         */
        this.width = 'menu';
        /**
         * Size of the sidebar when collapsed.
         */
        this.collapsible = 'icon';
        /**
         * Opens the sidebar by default when set
         */
        this.default_open = true;
        this.isOpen = false;
    }
    componentWillLoad() {
        if (this.default_open !== undefined) {
            this.isOpen = this.default_open;
        }
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Toggles the sidebar's open state.
     */
    async toggleSidebar() {
        this.isOpen = !this.isOpen;
        console.log('stenciltoggleSidebar', this.isOpen);
        this.atuiSidebarChange.emit(this.isOpen);
    }
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    async getIsOpen() {
        return this.isOpen;
    }
    render() {
        const classname = variants({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (h(Host, { key: '42781d85322781d8b5d151f0b2175f161630f2b0', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, h("nav", { key: '51404a8d1d961c847176352cb0706ec31c9e9a72', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("div", { key: '8cd1703c7cc1b2d2179f09d18d9bc2fac9315dfe', class: "flex p-8" }, h("slot", { key: '7d88db3ae8e1343021df286d39b725f54ff9af22', name: "sidebar-header" })), h("div", { key: 'b76c6878da6dc341ec9394e6cbfc32e60a275255', class: "align-items flex flex-1 flex-col p-8" }, h("slot", { key: '1b9734f52014c743322fd461a94f7f267d6d6095', name: "sidebar-content" })), h("div", { key: '90bd60167615b848f5d127c7491351853599dab7', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '3007a731fc19f0340a80baefae8d4666209df62c', name: "sidebar-footer" }))), h("div", { key: '1c7448ba440c5c319fd890a0d43aac82e72a81ac', class: "flex w-full overflow-auto" }, h("slot", { key: '5b2d9a1348a5693f78c988263997e2d526e008b0', name: "page-content" }))));
    }
    static get is() { return "atui-sidebar"; }
    static get originalStyleUrls() {
        return {
            "$": ["atui-sidebar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["atui-sidebar.css"]
        };
    }
    static get properties() {
        return {
            "side": {
                "type": "string",
                "attribute": "side",
                "mutable": false,
                "complexType": {
                    "original": "Side",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "Side": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-sidebar/atui-sidebar.tsx",
                            "id": "src/components/atui-sidebar/atui-sidebar.tsx::Side"
                        }
                    }
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
                "defaultValue": "'left'"
            },
            "width": {
                "type": "string",
                "attribute": "width",
                "mutable": false,
                "complexType": {
                    "original": "Width",
                    "resolved": "\"auto\" | \"menu\" | \"panel-lg\" | \"panel-md\" | \"panel-sm\" | \"panel-xl\" | \"panel-xs\"",
                    "references": {
                        "Width": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-sidebar/atui-sidebar.tsx",
                            "id": "src/components/atui-sidebar/atui-sidebar.tsx::Width"
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
                "defaultValue": "'menu'"
            },
            "collapsible": {
                "type": "string",
                "attribute": "collapsible",
                "mutable": false,
                "complexType": {
                    "original": "Collapsible",
                    "resolved": "\"icon\" | \"none\" | \"offcanvas\"",
                    "references": {
                        "Collapsible": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-sidebar/atui-sidebar.tsx",
                            "id": "src/components/atui-sidebar/atui-sidebar.tsx::Collapsible"
                        }
                    }
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
                "defaultValue": "'icon'"
            },
            "default_open": {
                "type": "boolean",
                "attribute": "default_open",
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
                "defaultValue": "true"
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
}
//# sourceMappingURL=atui-sidebar.js.map
