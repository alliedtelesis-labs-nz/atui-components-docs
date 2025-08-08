import { h, Host } from "@stencil/core";
/**
 * @category Layout
 * @description A collapsible content container component that allows users to show/hide sections of content. Supports multiple panels, animations, and programmatic control of expanded states.
 *
 * @slot - Content is placed within the accordion wrapper. Used for placing atui-accordion-items if not using items prop.
 */
/**
 * ### ```interface AccordionItem```
 * ```
 * item_id: string;
 * label: string;
 * content: string;
 * ```
 * @category Layout
 * @description A collapsible content container component that allows users to show/hide sections of content. Supports multiple panels, animations, and programmatic control of expanded states.
 *
 * @slot - Content is placed within the accordion wrapper. Used for placing atui-accordion-items if not using items prop.
 */
export class AtuiAccordionComponent {
    constructor() {
        /**
         * Used to create accordion items.
         */
        this.items = [];
        /**
         * If set, all child accordions will be open by default.
         */
        this.default_open = false;
        this.accordionItems = [];
        this.accordionId = `accordion-${Math.random().toString(36).substring(2, 11)}`;
    }
    async componentDidLoad() {
        // Wait for child components to be ready
        await new Promise((resolve) => setTimeout(resolve, 0));
        this.accordionItems = Array.from(this.el.querySelectorAll('atui-accordion-item'));
        if (this.default_open) {
            await this.openAll();
        }
    }
    /**
     * Toggles the open state of a specific accordion item
     * @param value Id of element to be toggled
     */
    async toggleById(value) {
        this.refreshAccordionItems();
        this.accordionItems.forEach((item) => {
            if (item.item_id === value) {
                if (item.open) {
                    item.closeAccordion();
                }
                else {
                    item.openAccordion();
                }
            }
        });
    }
    /**
     * Opens all accordion items
     */
    async openAll() {
        this.refreshAccordionItems();
        this.accordionItems.forEach((item) => {
            item.openAccordion();
        });
    }
    /**
     * Closes all accordion items.
     */
    async closeAll() {
        this.refreshAccordionItems();
        this.accordionItems.forEach((item) => {
            item.closeAccordion();
        });
    }
    /**
     * Toggles all accordion item's open state.
     */
    async toggleAll() {
        this.refreshAccordionItems();
        this.accordionItems.forEach((item) => {
            if (item.open) {
                item.closeAccordion();
            }
            else {
                item.openAccordion();
            }
        });
    }
    refreshAccordionItems() {
        this.accordionItems = Array.from(this.el.querySelectorAll('atui-accordion-item'));
    }
    render() {
        return (h(Host, { key: 'c3713a4994a8842a864bb89ac3105d06f251274e', class: "flex flex-col gap-2" }, h("slot", { key: '633adb5bfcef4a02e24af8dc1716b10a0acf683e' }), this.items &&
            this.items.map((item) => {
                return (h("atui-accordion-item", { item_id: `${this.accordionId}-${item.item_id}`, label: item.label, content: item.content }));
            })));
    }
    static get is() { return "atui-accordion"; }
    static get properties() {
        return {
            "items": {
                "type": "unknown",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "AccordionItem[]",
                    "resolved": "AccordionItem[]",
                    "references": {
                        "AccordionItem": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/atui-accordion/atui-accordion.tsx",
                            "id": "src/components/atui-accordion/atui-accordion.tsx::AccordionItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to create accordion items."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "If set, all child accordions will be open by default."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get methods() {
        return {
            "toggleById": {
                "complexType": {
                    "signature": "(value: string) => Promise<void>",
                    "parameters": [{
                            "name": "value",
                            "type": "string",
                            "docs": "Id of element to be toggled"
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Toggles the open state of a specific accordion item",
                    "tags": [{
                            "name": "param",
                            "text": "value Id of element to be toggled"
                        }]
                }
            },
            "openAll": {
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
                    "text": "Opens all accordion items",
                    "tags": []
                }
            },
            "closeAll": {
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
                    "text": "Closes all accordion items.",
                    "tags": []
                }
            },
            "toggleAll": {
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
                    "text": "Toggles all accordion item's open state.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-accordion.js.map
