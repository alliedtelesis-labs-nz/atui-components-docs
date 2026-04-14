import { h, Host } from "@stencil/core";
/**
 * @slot - Content placed inside of the trigger, after the 'label' prop if one is provided
 */
export class AtAccordionTriggerComponent {
    /**
     * Text to display on the trigger for the accordion item.
     */
    label;
    render() {
        return (h(Host, { key: '05f108c1583b75f0b3f5316db73df5e9d73d537f', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: 'b36ed8387a9420fdfe252d16fa34d04cf089350d', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '9ed4317ed0d50980450c4e520340cf11b6ff9f7f' }), h("i", { key: '250dffeb45ddceb7fe3ea9a59168f9f995172be1', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
    static get is() { return "at-accordion-trigger"; }
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
                    "text": "Text to display on the trigger for the accordion item."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
            }
        };
    }
}
