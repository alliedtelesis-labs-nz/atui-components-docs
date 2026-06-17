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
        return (h(Host, { key: '78d7381ee515c1768650fd2c87c48d24c2367a8d', role: "group", "aria-labelledby": this.label, "data-name": "select-option-group" }, h("div", { key: '4c55484a208bc67616fbe823d4be22f1ff1c973c', role: "group", "aria-labelledby": this.label }, h("li", { key: 'a229ba56c8855db6b99279bb0683b10f90ff98cf', id: this.label, class: "text-muted border-muted border-b px-0 pt-8 pb-4 text-sm", "data-name": "select-option-group-title" }, this.label), h("slot", { key: '94352923434e335a0d011a94ac0d410159dd2d8d' }))));
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
