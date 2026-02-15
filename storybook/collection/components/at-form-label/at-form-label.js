import { h } from "@stencil/core";
/**
 * @category Form Controls
 * @description A form label component that provides accessible labeling with optional required indicators and info tooltips. Designed for use with form inputs.
 */
export class AtFormLabelComponent {
    /**
     * Label that appears before the info icon.
     */
    label;
    /**
     * When true, there will be a red star on the label.
     */
    required;
    /**
     * The text to be contained in the tooltip.
     */
    info_text;
    /**
     * Placed in the 'for' attribute on the label element
     */
    for;
    render() {
        return (h("div", { key: 'ad5fff1c28649bd7ceccd377b0c814db89b9ea04', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '8f55a5607c8c475949815961e970d2e998917b69', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: 'f9c2861ff685f8391c9157f484ab150d74c4946a', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '9cbecbc6465f2aaf5edbe48ededfa73201561560', position: "right" }, h("span", { key: 'c0fc602f16c77b6cab43a046b207bddef1fc7d03', slot: "tooltip-trigger", class: "material-icons !text-icon-sm text-light cursor-pointer" }, "info_outline"), h("span", { key: '199f9e2a3ffd3cbb060d8c104ac1224a629de613' }, this.info_text))),
        ]));
    }
    static get is() { return "at-form-label"; }
    static get properties() {
        return {
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
                    "text": "Label that appears before the info icon."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            },
            "required": {
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
                    "text": "When true, there will be a red star on the label."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "required"
            },
            "info_text": {
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
                    "text": "The text to be contained in the tooltip."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "info_text"
            },
            "for": {
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
                    "text": "Placed in the 'for' attribute on the label element"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "for"
            }
        };
    }
}
