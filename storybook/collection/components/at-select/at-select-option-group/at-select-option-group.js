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
        return (h(Host, { key: 'cd190c42f000b591310ee0ef6b28e178f17f5cd7', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '13b7e642a31597967a1ff5ea013eae269f3262cf', role: "group", "aria-labelledby": this.label }, h("li", { key: '5dd9c127069901c19d0e054ab822e1ee12ef2ec1', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: 'e8fdf5ef75ae4a15cbbca59e3e72af4ffc13abb8' }))));
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
