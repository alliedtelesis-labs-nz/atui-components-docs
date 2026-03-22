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
        return (h(Host, { key: '28ae611ee45c0f3f2ec259f656dc1f1312edf09f', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '5e5269255f9722162629c5f5b69f51ef6a98ed6c', role: "group", "aria-labelledby": this.label }, h("li", { key: 'b27a4004116a4e4b0ffd0913794cd7439298de3f', id: this.label, class: "text-light border-light border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '4bf2209d73f5e4cb9826c0a653ccb83091ac604c' }))));
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
