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
        this.atuiChange.emit(this.isOpen);
    }
    /**
     * Toggles the sidebar's open state.
     */
    async toggleSidebar() {
        this.isOpen = !this.isOpen;
        this.atuiChange.emit(this.isOpen);
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
        return (h(Host, { key: 'e5804c18c8aff30f82f9dec97ef42e6356ad2c27', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-y-auto overflow-x-hidden" }, h("nav", { key: '82b80abfa0280ab8b4ebf3151fb8f892b0b17d7a', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("div", { key: 'f09d76a37c22dc05bb9128e33c6621bd30cea0cc', class: `flex p-8 ${this.side === 'left' ? 'justify-end' : 'justify-start'}` }, h("slot", { key: '10433e45ce66b93442f2f6ed2fe613585bb2f335', name: "sidebar-header" })), h("div", { key: '995a71f5350991f33fb13bbed364fc0cedf9a303', class: "align-items flex flex-1 flex-col pb-8 pl-[10px] pr-8 pt-8" }, h("slot", { key: '1381eac3f66d63ea6ad4aecae6899249ec3e3f28', name: "sidebar-content" })), h("div", { key: 'eaf82d1fe10fa272c27b9f4edff37a92070fbda3', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '82d007a9fd41aa52bd503ef406f91bece852bcde', name: "sidebar-footer" }))), h("div", { key: 'c9c40a37d5cca895f852dbf666c530be6820b5d8', class: "flex w-full overflow-auto" }, h("slot", { key: '40e4d4a99f09500a0fb84fd03ca851fc97cad7c4', name: "page-content" }))));
    }
    static get is() { return "atui-sidebar"; }
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
                "method": "atuiChange",
                "name": "atuiChange",
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
