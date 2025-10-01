import { p as proxyCustomElement, H, h, c as Host } from './p-_-xuBOrs.js';
import { d as defineCustomElement$3 } from './p-kQK15-PH.js';
import { d as defineCustomElement$2 } from './p-Cdyb40Lt.js';

const AtAccordionComponent = /*@__PURE__*/ proxyCustomElement(class AtAccordionComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    /**
     * Used to create accordion items.
     */
    items = [];
    /**
     * If set, all child accordions will be open by default.
     */
    default_open = false;
    accordionItems = [];
    async componentDidLoad() {
        // Wait for child components to be ready
        await new Promise((resolve) => setTimeout(resolve, 0));
        this.accordionItems = Array.from(this.el.querySelectorAll('at-accordion-item'));
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
        this.accordionItems = Array.from(this.el.querySelectorAll('at-accordion-item'));
    }
    accordionId = `accordion-${Math.random().toString(36).substring(2, 11)}`;
    render() {
        return (h(Host, { key: '6b2195a25f6dd26a68baafd11b6748e79fbcf6ff', class: "flex flex-col gap-2" }, h("slot", { key: '93ff2fb04b308503cd077f2f35834a46ed0d9038' }), this.items &&
            this.items.map((item) => {
                return (h("at-accordion-item", { item_id: `${this.accordionId}-${item.item_id}`, label: item.label, content: item.content }));
            })));
    }
}, [260, "at-accordion", {
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
    const components = ["at-accordion", "at-accordion-item", "at-accordion-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "at-accordion":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtAccordionComponent);
            }
            break;
        case "at-accordion-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-accordion-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtAccordion = AtAccordionComponent;
const defineCustomElement = defineCustomElement$1;

export { AtAccordion, defineCustomElement };
//# sourceMappingURL=at-accordion.js.map

//# sourceMappingURL=at-accordion.js.map