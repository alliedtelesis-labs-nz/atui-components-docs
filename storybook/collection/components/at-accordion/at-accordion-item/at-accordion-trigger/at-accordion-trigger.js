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
        return (h(Host, { key: '651a1249491e2f0e97aaac2f842747f01481a395', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '6dbc4e7e18cdda21927bfb2175eab351949ee20a', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '0cc56ed73fd09620ba4b1752f148058e825bc3ae' }), h("i", { key: 'aeece5804a6a6a988c41069a24201c9c2ee34058', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
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
