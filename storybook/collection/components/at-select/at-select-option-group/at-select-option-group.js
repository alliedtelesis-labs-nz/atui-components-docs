import { h, Host } from "@stencil/core";
/**
 * @category Form Controls
 * @description A wrapper component for grouping select options with proper ARIA semantics.
 * @slot - Use this slot to manually add <at-select-option> elements for the group.
 */
export class AtSelectGroupComponent {
    /**
     * Label for the group displayed as the group title
     */
    label;
    render() {
        return (h(Host, { key: 'f5582b9539904668dc63e2aa457ffcb203123287', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'ba60f7245bd937f96d98c685d14ddecc996a2d38', role: "group", "aria-labelledby": this.label }, h("li", { key: '1c2b4c48eabbf716db2fbf07d3abe20fe0071ca9', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: 'a6e751f7307eebc5540683f1feec42083b0b355c' }))));
    }
    static get is() { return "at-select-group"; }
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
                    "text": "Label for the group displayed as the group title"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            }
        };
    }
}
