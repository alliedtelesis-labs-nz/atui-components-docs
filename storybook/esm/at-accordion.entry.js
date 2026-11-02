import { r as registerInstance, a as getElement, h, H as Host } from './index-DR-CD1o0.js';

const AtAccordionComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
            if (item.item_id === value ||
                item.item_id === this.prefixedItemId(value)) {
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
    prefixedItemId(itemId) {
        return `${this.accordionId}-${itemId}`;
    }
    render() {
        return (h(Host, { key: 'a236f4edf136a1e1387f52dac6cf7b10aa446c5b', class: "flex flex-col gap-2" }, h("slot", { key: '7ea61cea8c446bb2a4aed50b1ba24f6cb5fa0f34' }), this.items &&
            this.items.map((item) => {
                return (h("at-accordion-item", { item_id: this.prefixedItemId(item.item_id), label: item.label, content: item.content }));
            })));
    }
};

export { AtAccordionComponent as at_accordion };
