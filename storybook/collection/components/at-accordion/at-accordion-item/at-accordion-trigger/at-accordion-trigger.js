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
        return (h(Host, { key: 'a6e079f437718831464efabfbef4c142d1d6818b', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: 'e13a681f0db99d85bd460a1c91c730ac069120b7', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '3103dea241eac9f1a7ba6875f1b90c57daa5c554' }), h("at-icon", { key: '90affea2a79d6a31e6729d6a8fceb1c0603ccb7a', role: "presentation", "aria-hidden": "true", class: "fill-foreground group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
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
