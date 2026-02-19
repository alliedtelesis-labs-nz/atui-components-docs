'use strict';

var index = require('./index-CzDB71Wy.js');

const AtAccordionComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '36762338bccf1916d1e8f994666226b00a438dfd', class: "flex flex-col gap-2" }, index.h("slot", { key: '28c7db21634265eaf1cdc6e85062fb2675760b81' }), this.items &&
            this.items.map((item) => {
                return (index.h("at-accordion-item", { item_id: `${this.accordionId}-${item.item_id}`, label: item.label, content: item.content }));
            })));
    }
};

exports.at_accordion = AtAccordionComponent;
