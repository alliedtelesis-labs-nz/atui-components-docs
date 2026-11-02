import { h, Host, } from "@stencil/core";
import { classlist } from "../../../utils/classlist";
const variantsConfig = {
    variants: {
        disabled: {
            true: 'text-disabled-foreground pointer-events-none',
            false: null,
        },
    },
};
const getAccordionClasses = classlist('group/accordion-item focus-visible:ring-active-glow flex rounded-sm outline-0 focus-visible:ring', variantsConfig);
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
     * String content to display when the accordion is open
     */
    content;
    /**
     * Used for setting if the accordion is open.
     */
    open = false;
    /**
     * Will disable interaction if set
     */
    disabled;
    /**
     * Emitted when the accordion item's open state changes
     */
    atuiAccordionChange;
    /**
     * The `<details>` element's own open state, which trails `open` on the way
     * closed so the collapse can animate before the content is taken out of the
     * page. Rendered rather than assigned after mount: content that measures
     * itself on load - a chart sizing its canvas - reads zero inside a details
     * that is still closed for its first frame, and never re-measures without an
     * interaction.
     */
    detailsOpen = false;
    detailsEl;
    componentWillLoad() {
        this.detailsOpen = this.open;
    }
    async handleSummaryInteraction(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        if (event.type === 'click' ||
            event.type === 'touchend' ||
            event.type === 'keydown') {
            event.preventDefault();
            if (this.open) {
                await this.closeAccordion();
            }
            else {
                await this.openAccordion();
            }
        }
    }
    handleOpenChange(newValue) {
        if (!this.detailsEl)
            return;
        if (newValue) {
            this.detailsOpen = true;
            this.detailsEl.open = true;
        }
        else {
            this.detailsEl.addEventListener('transitionend', () => {
                if (!this.open) {
                    this.detailsOpen = false;
                }
            }, { once: true });
        }
    }
    /**
     * Opens this accordion item
     */
    async openAccordion() {
        if (this.open)
            return;
        this.detailsOpen = true;
        // Also set directly: the expansion animates from this frame, and a
        // Stencil re-render may not have committed by the time it starts.
        this.detailsEl.open = true;
        requestAnimationFrame(() => {
            this.open = true;
            this.atuiAccordionChange.emit(true);
        });
    }
    /**
     * Closes this accordion item
     */
    async closeAccordion() {
        if (!this.open)
            return;
        this.open = false;
        this.atuiAccordionChange.emit(false);
    }
    /**
     * Return the accordion items open state
     */
    async getIsOpen() {
        return this.open;
    }
    render() {
        const classname = getAccordionClasses({
            disabled: this.disabled,
        });
        return (h(Host, { key: '0aa0a5f43517bd5afe6ea7a7b90e139d372d5454', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: 'c6c4f1922755d859166a04265e86f00ad2b7862d', class: "group/accordion-item", role: "group", open: this.detailsOpen, ref: (el) => (this.detailsEl = el) }, h("summary", { key: '765a86f62730ca6042693a14861f6b5f64aab008', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "aria-disabled": this.disabled ? 'true' : undefined, "data-state": this.open ? 'expanded' : 'collapsed', class: classname, onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleSummaryInteraction(event);
                }
            }, "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: '04f0bea1e518e2730b6667269b8b7b45a3f95060', label: this.label })), h("slot", { key: 'd737decac74a64a85d3115b4a5658356f0e5f214', name: "accordion-trigger" })), h("div", { key: '9efe90838fbfa76fefbd351f0cbc4f88e009783f', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, "data-state": this.open ? 'expanded' : 'collapsed', "data-name": "accordion-item-content" }, this.content && (h("div", { key: 'ba794049555a8e8905ec2d6dafed7d59fc9b6d8e', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'b484f5d3218be7cd2a0d02673499b1034c3d1dca' })))));
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
            },
            "disabled": {
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
                    "text": "Will disable interaction if set"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled"
            }
        };
    }
    static get states() {
        return {
            "detailsOpen": {}
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
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "handleOpenChange",
                "handlerOptions": {
                    "immediate": true
                }
            }];
    }
}
