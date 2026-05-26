import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: '66fff977696f8a2c144a960a96850f004ac791d6', class: "flex flex-col gap-2" }, h("slot", { key: '2df583baf8ada52bf533b50db1d9c149107b126a' }), this.items &&
            this.items.map((item) => {
                return (h("at-accordion-item", { item_id: `${this.accordionId}-${item.item_id}`, label: item.label, content: item.content }));
            })));
    }
};

export { AtAccordionComponent as at_accordion };
