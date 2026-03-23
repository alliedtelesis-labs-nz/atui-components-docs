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
        return (h("div", { key: 'd5c4a128845f61d1da58c184f7efc983296c13c3', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '861a55cfafd271cdaeb844edcb322ef176d61dd1', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '2af1c73ab1b958ea63e4e4f7406a58db7a2b1299', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: 'f92e3c141df790f6048777d3f67c11e5c876621b', position: "right" }, h("span", { key: '4a5b367e3fd6104b6de447a75958e9cca9c4a3ee', slot: "tooltip-trigger", class: "material-icons !text-icon-sm text-light cursor-pointer" }, "info_outline"), h("span", { key: 'de649adf8cb7f976c69ec6a7145ee3ba6b7c5fa1' }, this.info_text))),
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
