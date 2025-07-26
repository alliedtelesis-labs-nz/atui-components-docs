import { h } from "@stencil/core";
/**
 * @category Form Controls
 * @description A form label component that provides accessible labeling with optional required indicators and info tooltips. Designed for use with form inputs.
 */
export class AtuiFormLabelComponent {
    render() {
        var _a;
        return (h("div", { key: '46bf72f4ce88c307619f11760a864709ca8613ab', class: "flex items-center gap-8" }, [
            (this.label || this.required) && (h("label", { key: '5832b00f23be6a6d8ac1b6acadaac55dc2d9f9f3', htmlFor: (_a = this.for) !== null && _a !== void 0 ? _a : undefined, class: "flex gap-4" }, this.label, this.required && h("span", { key: '4280f137a90d8b2684915c46a23eb9abfd3bcec3', class: "text-error" }, "*"))),
            this.info_text && (h("atui-tooltip", { key: '5f8912183a74a0facc7a5760589997db69ea8e77', position: "right" }, h("span", { key: 'c57cf79420b5fa8a8d354712d69bc632b4295b11', slot: "tooltip-trigger", class: "material-icons cursor-pointer !text-icon-sm text-light" }, "info_outline"), h("span", { key: '00d49070cd19d705b9a840ac7282b5800aaf3d8e', slot: "tooltip-content" }, this.info_text))),
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
