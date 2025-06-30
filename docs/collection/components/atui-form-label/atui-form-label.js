import { h } from "@stencil/core";
/**
 * @category Form Controls
 * @description A form label component that provides accessible labeling with optional required indicators and info tooltips. Designed for use with form inputs.
 */
export class AtuiFormLabelComponent {
    render() {
        var _a;
        return (h("div", { key: 'bdf4ff18a98c5008722bfea3962cad3fd7eda26c', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '9e41dfcb632810723ca9e9ec6bedf17ec2710d42', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '9ec2daeb611fee10bd28f9c8cbff69adf63309de', class: "text-error" }, "*"))),
            this.info_text && (h("atui-tooltip", { key: 'd133a6a0ce90b18430c7dbe146de4260fe7a8b8d', position: "right" }, h("span", { key: '01cc5cb5d254444536b4663bedf07bac50ca970c', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), h("span", { key: '3109c5d73e5de37d8abc503d51bf4093576325e3', slot: "tooltip-content" }, this.info_text))),
        ]));
    }
    static get is() { return "atui-form-label"; }
    static get properties() {
        return {
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
                    "text": "Label that appears before the info icon."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "required": {
                "type": "boolean",
                "attribute": "required",
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
                "reflect": false
            },
            "info_text": {
                "type": "string",
                "attribute": "info_text",
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
                "reflect": false
            },
            "for": {
                "type": "string",
                "attribute": "for",
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
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=atui-form-label.js.map
