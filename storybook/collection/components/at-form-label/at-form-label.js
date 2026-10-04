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
        return (h("div", { key: '93c01a640f9ab46b8587e7cef1339ba4265c3d53', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: 'e2240e593526655ed5b231ca56fa44acc1d7751d', htmlFor: this.for ?? undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: 'd216890922f85b255db348e2abd166d8d5b38e38', class: "text-error" }, "*"))),
            this.info_text && (h("at-tooltip", { key: '221c600fcfe87223e6830883f4a04b5ea84b412c', position: "right" }, h("at-icon", { key: '2f66f8753ea6898391155bd967961993e93f83bd', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '19ddab7ae1af802b5789bb154542a6bedd8037aa' }, this.info_text))),
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
