import { h, Host } from "@stencil/core";
/**
 * @slot - Content placed inside of the trigger, after the 'label' prop if one is provided
 */
export class AtuiAccordionTriggerComponent {
    render() {
        return (h(Host, { key: '42fc1dcf6e54af14e0ae9b10581616bb1c99617f', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '3f58850b18a0f015bc71e915a6392531ec691e64', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '7c1367efa150fc31f95305f0d5ac8d71e39edaf8' }), h("i", { key: 'dd9c63db99b00c092c31f65c839a9b75b929fccd', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
    static get is() { return "atui-accordion-trigger"; }
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
                    "text": "Text to display on the trigger for the accordion item."
                },
                "getter": false,
                "setter": false,
                "reflect": false
            }
        };
    }
}
//# sourceMappingURL=atui-accordion-trigger.js.map
