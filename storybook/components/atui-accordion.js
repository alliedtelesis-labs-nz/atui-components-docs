import { p as proxyCustomElement, H, h, c as Host } from './p-CHjIMSAP.js';
import { d as defineCustomElement$3 } from './p-BXToQCgd.js';
import { d as defineCustomElement$2 } from './p-BGbOX7qR.js';

const AtuiAccordionComponent = /*@__PURE__*/ proxyCustomElement(class AtuiAccordionComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Used to create accordion items.
         */
        this.items = [];
        /**
         * If set, all child accordions will be open by default.
         */
        this.default_open = false;
        this.accordionItems = [];
        this.accordionId = `accordion-${Math.random().toString(36).substring(2, 11)}`;
    }
    async componentDidLoad() {
        this.accordionItems = Array.from(this.el.querySelectorAll('atui-accordion-item'));
        if (this.default_open) {
            await this.openAll();
        }
    }
    /**
     * Toggles the open state of a specific accordion item
     * @param value Id of element to be toggled
     */
    async toggleById(value) {
        this.accordionItems.forEach((item) => {
            if (item.item_id === value) {
                if (item.open) {
                    item.closeAccordion();
                }
                else {
                    item.openAccordion();
                }
            }
        });
    }
    /**
     * Opens all accordion items
     */
    async openAll() {
        this.accordionItems.forEach((item) => {
            item.openAccordion();
        });
    }
    /**
     * Closes all accordion items.
     */
    async closeAll() {
        this.accordionItems.forEach((item) => {
            item.closeAccordion();
        });
    }
    /**
     * Toggles all accordion item's open state.
     */
    async toggleAll() {
        this.accordionItems.forEach((item) => {
            if (item.open) {
                item.closeAccordion();
            }
            else {
                item.openAccordion();
            }
        });
    }
    render() {
        return (h(Host, { key: 'bddaf7cc56ad839608ddf653ebd4f5a569edc5f0', class: "flex flex-col gap-2" }, h("slot", { key: '7f141d39bde2de7078f522d20c1a325afd169e3d' }), this.items &&
            this.items.map((item) => {
                return (h("atui-accordion-item", { item_id: `${this.accordionId}-${item.item_id}`, label: item.label, content: item.content }));
            })));
    }
    get el() { return this; }
}, [260, "atui-accordion", {
        "items": [16],
        "default_open": [4],
        "toggleById": [64],
        "openAll": [64],
        "closeAll": [64],
        "toggleAll": [64]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-accordion", "atui-accordion-item", "atui-accordion-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiAccordionComponent);
            }
            break;
        case "atui-accordion-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-accordion-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiAccordion = AtuiAccordionComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiAccordion, defineCustomElement };
//# sourceMappingURL=atui-accordion.js.map

//# sourceMappingURL=atui-accordion.js.map