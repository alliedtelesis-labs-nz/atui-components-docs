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
        return (h(Host, { key: '48b6108ef460d50375e9e64d270cd1a660b16a45', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '1217f0a9dcee1dd11d4e2488bca81e69d570ace0', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '8c5333035a4d87b952d06523ce4c93923534422f' }), h("at-icon", { key: '90c5e57796b795ab8bf3cbf877596a5723832a7c', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
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
