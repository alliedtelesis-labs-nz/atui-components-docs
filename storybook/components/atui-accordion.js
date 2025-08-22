import { p as proxyCustomElement, H, h, c as Host } from './p-DzGFYGds.js';
import { d as defineCustomElement$3 } from './p-CJyIegWw.js';
import { d as defineCustomElement$2 } from './p-B5K9l6Gv.js';

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
        // Wait for child components to be ready
        await new Promise((resolve) => setTimeout(resolve, 0));
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
        this.refreshAccordionItems();
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
        this.refreshAccordionItems();
        this.accordionItems.forEach((item) => {
            item.openAccordion();
        });
    }
    /**
     * Closes all accordion items.
     */
    async closeAll() {
        this.refreshAccordionItems();
        this.accordionItems.forEach((item) => {
            item.closeAccordion();
        });
    }
    /**
     * Toggles all accordion item's open state.
     */
    async toggleAll() {
        this.refreshAccordionItems();
        this.accordionItems.forEach((item) => {
            if (item.open) {
                item.closeAccordion();
            }
            else {
                item.openAccordion();
            }
        });
    }
    refreshAccordionItems() {
        this.accordionItems = Array.from(this.el.querySelectorAll('atui-accordion-item'));
    }
    render() {
        return (h(Host, { key: 'c3713a4994a8842a864bb89ac3105d06f251274e', class: "flex flex-col gap-2" }, h("slot", { key: '633adb5bfcef4a02e24af8dc1716b10a0acf683e' }), this.items &&
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