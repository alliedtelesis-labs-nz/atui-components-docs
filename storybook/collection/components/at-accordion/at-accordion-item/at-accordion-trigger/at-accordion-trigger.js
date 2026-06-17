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
        return (h(Host, { key: '60d7dcd7207e5ab59e54304e9f73e1209511ac58', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '38cd926593e7c20eecb5ef656b9fc612860daff7', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '2083d257c85a3a5874c73b35bce11cc80a58e508' }), h("at-icon", { key: '5887ce6714601c25d77756166b4a1f9c24aad700', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
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
