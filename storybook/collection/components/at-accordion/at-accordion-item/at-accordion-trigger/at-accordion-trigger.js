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
        return (h(Host, { key: 'af8ce9be766f77abf2adc11c4fd6411947ca339d', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: 'e13a65681fcc1ef5a91f1096d2222e49d8c62236', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: 'f4e52a542fea6a723f2aaf11df0d671358a83c73' }), h("at-icon", { key: 'b8229bf66c00ad6d8aab7ebc34e3dcc47574399e', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
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
