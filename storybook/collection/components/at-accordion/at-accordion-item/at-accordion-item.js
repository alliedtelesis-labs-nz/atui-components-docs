import { h, Host, } from "@stencil/core";
/**
 * @category Layout
 * @description A collapsible content container component that allows users to show/hide sections of content. Supports multiple panels, animations, and programmatic control of expanded states.
 *
 * @slot accordion-trigger - Used for placing the atui-accordion-trigger for this accordion item. Only use if not using the 'label' prop on this element.
 * @slot default - Used for placing the content for this accordion item.
 */
export class AtAccordionItemComponent {
    el;
    /**
     * Used to identify the accordion item among the other accordion items
     */
    item_id;
    /**
     * Provides an atui-accordion-trigger with this label if set
     */
    label;
    /**
     * Puts a light gray separator below the accordion item
     */
    border = true;
    /**
     * String content to display when the accordion is open
     */
    content;
    /**
     * Used for setting if the accordion is open.
     */
    open = false;
    /**
     * Emitted when the accordion item's open state changes
     */
    atuiAccordionChange;
    accordionElement;
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
        this.atuiAccordionChange.emit(this.open);
    }
    /**
     * Closes this accordion item
     */
    async closeAccordion() {
        if (!this.open)
            return;
        this.accordionElement.open = false;
        this.open = false;
        this.atuiAccordionChange.emit(this.open);
    }
    /**
     * Return the accordion items open state
     */
    async getIsOpen() {
        return this.open;
    }
    render() {
        return (h(Host, { key: '6c61c600f243cd20a4c78ad8337fcfc6e0f67e6e', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '35bf8cfb92fee324758fee565e85a044aa4ec9a5', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '4be1480121fb9e3ee028b85ecf8de161cf1cc1ae', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/40 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: '81f93652d7da046c4500b0808d74726a7a5da3ac', label: this.label })), h("slot", { key: '5b20b3e6bbc1232f9fc477ff75e4306ecf2e45a7', name: "accordion-trigger" })), h("div", { key: '72f9e27d61c0b725f8571eb5398bcfdef6578d29', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '104be6a68b36bd6e589b9ba0f0eaaad4c6e4d913', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '855ac7387d7b5e63d93f5377ddb5472a8aa520ec' })))));
    }
    static get is() { return "at-accordion-item"; }
    static get originalStyleUrls() {
        return {
            "$": ["at-accordion-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["at-accordion-item.css"]
        };
    }
    static get properties() {
        return {
            "item_id": {
                "type": "string",
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
                "reflect": false,
                "attribute": "item_id"
            },
            "label": {
                "type": "string",
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
                "reflect": false,
                "attribute": "label"
            },
            "border": {
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
                    "text": "Puts a light gray separator below the accordion item"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "border",
                "defaultValue": "true"
            },
            "content": {
                "type": "string",
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
                "reflect": false,
                "attribute": "content"
            },
            "open": {
                "type": "boolean",
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
                "attribute": "open",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiAccordionChange",
                "name": "atuiAccordionChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the accordion item's open state changes"
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
                    "text": "Return the accordion items open state",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
}
