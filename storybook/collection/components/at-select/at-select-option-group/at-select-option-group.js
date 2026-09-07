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
        return (h(Host, { key: 'a7bd647fab84f61ae0c80ea252e9dbc9c14aac0a', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: 'df5e052f4ffd45dbe2c48a559c709daefd4501b3', role: "group", "aria-labelledby": this.label }, h("li", { key: 'c23de1a7d29c35c56cf43bfafab85d11e4e68beb', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '4faffe33224a5c02cd3cee47360e6272e01dc6f3' }))));
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
