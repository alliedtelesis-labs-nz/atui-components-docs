import { h, Host } from "@stencil/core";
/**
 * @category Layout
 * @description A collapsible content container component that allows users to show/hide sections of content. Supports multiple panels, animations, and programmatic control of expanded states.
 *
 * @slot trigger - Used for placing the atui-accordion-trigger for this accordion item. Only use if not using the 'label' prop on this element.
 * @slot content - Used for placing the content for this accordion item.
 */
export class AtuiAccordionItemComponent {
    constructor() {
        /**
         * Puts a light gray separator below the accordion item
         */
        this.border = true;
        /**
         * Used for setting if the accordion is open.
         */
        this.open = false;
    }
    componentDidLoad() {
        this.accordionElement = this.el.querySelector('details');
    }
    async handleSummaryInteraction(event) {
        if (event.type === 'click' || event.type === 'touchend') {
            event.preventDefault();
            if (this.open) {
                await this.closeAccordion();
            }
            else {
                await this.openAccordion();
            }
        }
    }
    /**
     * Opens this accordion item
     */
    async openAccordion() {
        if (this.open)
            return;
        this.accordionElement.open = true;
        this.open = true;
    }
    /**
     * Closes this accordion item
     */
    async closeAccordion() {
        if (!this.open)
            return;
        this.accordionElement.open = false;
        this.open = false;
    }
    render() {
        return (h(Host, { key: 'e2e8c6495841f2a7ebc94d84045a6de3a2b4678f', "data-name": this.item_id }, h("details", { key: '05d26b9ac59c2bd1ff4cf604d1eafc4369e5c957', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group" }, h("summary", { key: '963d29e1fea790465bb8ace503c516efb268aa7e', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item flex rounded-sm outline-0 focus-within:ring-2 focus-within:ring-active-foreground/30", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("atui-accordion-trigger", { key: '56953db306282344b3153194003d26f57945f536', label: this.label })), h("slot", { key: 'f901e5f1d03a87d5a4ea427c4538a80fb869329a', name: 'trigger' })), h("div", { key: '65f5076c810df6dd2865bfeeb655fded3256ac20', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '09614636c70060cb650281db7b32b4e09e5c7349', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '523dbf70b4ed486b8e2def07525068e28b41bbd4', name: 'content' })))));
    }
    static get is() { return "atui-accordion-item"; }
    static get properties() {
        return {
            "item_id": {
                "type": "string",
                "attribute": "item_id",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used to identify the accordion item among the other accordion items"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Provides an atui-accordion-trigger with this label if set"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "border": {
                "type": "boolean",
                "attribute": "border",
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
                    "text": "Puts a light gray separator below the accordion item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "content": {
                "type": "string",
                "attribute": "content",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "String content to display when the accordion is open"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Used for setting if the accordion is open."
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
            "openAccordion": {
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
                    "text": "Opens this accordion item",
                    "tags": []
                }
            },
            "closeAccordion": {
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
                    "text": "Closes this accordion item",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-accordion-item.js.map
