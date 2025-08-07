import { r as registerInstance, h, H as Host, g as getElement } from './index-BvDeEv6o.js';

const AtuiAccordionComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};

export { AtuiAccordionComponent as atui_accordion };
//# sourceMappingURL=atui-accordion.entry.js.map

//# sourceMappingURL=atui-accordion.entry.js.map