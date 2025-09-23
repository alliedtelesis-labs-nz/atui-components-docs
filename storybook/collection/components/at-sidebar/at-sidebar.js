import { h, Host, } from "@stencil/core";
import { classlist } from "../../utils/classlist";
const variantsConfig = {
    variants: {
        collapsible: {
            none: null,
            icon: 'group-data-[state=collapsed]/sidebar-wrapper:w-sidebar-collapsed',
            offcanvas: 'group-data-[state=collapsed]/sidebar-wrapper:w-0',
        },
        side: {
            left: null,
            right: 'order-1',
        },
    },
};
/**
 * @category Navigation
 * @description A collapsible sidebar navigation component with menu support and responsive behavior. Features animation, auto-collapse, and keyboard navigation.
 * @slot sidebar-header - Header of the sidebar (likely to be atui-sidebar-trigger)
 * @slot sidebar-content - Content displayed in the sidebar (likely to be atui-sidebar-menu elements)
 * @slot sidebar-footer - Footer displayed in the sidebar
 * @slot page-content - Content of the page
 */
export class AtSidebarComponent {
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
        const getClassname = classlist(`atui-sidebar group/sidebar bg-sidebar-background 
                  text-sidebar-foreground relative z-20 flex h-screen w-full
                  flex-col overflow-y-auto border-r border-solid border-r-med 
                  transition-[width] duration-300 ease-in-out`, variantsConfig);
        const classname = getClassname({
            collapsible: this.collapsible,
            side: this.side,
        });
        return (h(Host, { key: '39690ccaeb7bfe7183973bc3306e915ba7229e8d', "data-state": this.isOpen ? 'expanded' : 'collapsed', "data-collasable": this.collapsible, "data-side": this.side, class: "group/sidebar-wrapper flex h-screen w-full items-stretch overflow-hidden" }, h("nav", { key: 'f791757c9fe9b72e4ba7f5a04753eff5cea3881f', "data-name": "sidebar-nav", class: `w-${this.width} ` + classname }, h("slot", { key: '6f0d93fee49d09cf5885460be7b107ff57b57845', name: "sidebar-header" }), h("div", { key: '9330554a48b8b4757aac5e5d9fb432aaf99e06a4', class: "align-items oveflow-y-auto flex flex-1 flex-col p-8" }, h("slot", { key: 'cbed6ae1019e7f569b6f26be6337c43708630e77', name: "sidebar-content" })), h("div", { key: 'f413f33f30428b094e96e02d386fced8f95ae531', class: `${this.isOpen ? '' : 'hidden'}` }, h("slot", { key: '0138347136ed649c7073f64996147296d1334d3b', name: "sidebar-footer" }))), h("div", { key: 'bd1c1f329d5615776c66c19f2b2a0bd6b84e70dc', class: "flex w-full overflow-auto" }, h("slot", { key: 'd336b0b5cf4156152b3b9f57eeddd42c0d16f109', name: "page-content" }))));
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
                "attribute": "side",
                "mutable": false,
                "complexType": {
                    "original": "Side",
                    "resolved": "\"left\" | \"right\"",
                    "references": {
                        "Side": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-sidebar/at-sidebar.tsx",
                            "id": "src/components/at-sidebar/at-sidebar.tsx::Side"
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
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-sidebar/at-sidebar.tsx",
                            "id": "src/components/at-sidebar/at-sidebar.tsx::Width"
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
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-sidebar/at-sidebar.tsx",
                            "id": "src/components/at-sidebar/at-sidebar.tsx::Collapsible"
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
//# sourceMappingURL=at-sidebar.js.map
