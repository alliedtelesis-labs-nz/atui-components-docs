'use strict';

var index = require('./index-BRms7T38.js');

const atAccordionItemCss = () => `details>summary{list-style:none}details>summary::-webkit-details-marker{display:none}`;

const AtAccordionItemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiAccordionChange = index.createEvent(this, "atuiAccordionChange", 7);
    }
    get el() { return index.getElement(this); }
    /**
     * Used to identify the accordion item among the other accordion items
     */
    item_id;
    /**
     * Provides an atui-accordion-trigger with this label if set
     */
    label;
    /**
     * Puts a light gray separator below the accordion item
     */
    border = true;
    /**
     * String content to display when the accordion is open
     */
    content;
    /**
     * Used for setting if the accordion is open.
     */
    open = false;
    /**
     * Emitted when the accordion item's open state changes
     */
    atuiAccordionChange;
    accordionElement;
    componentDidLoad() {
        this.accordionElement = this.el.querySelector('details');
    }
    async handleSummaryInteraction(event) {
        if (event.type === 'click' || event.type === 'touchend') {
            event.preventDefault();
            if (this.open) {
                await this.closeAccordion();
            }
            else {
                await this.openAccordion();
            }
        }
    }
    /**
     * Opens this accordion item
     */
    async openAccordion() {
        if (this.open)
            return;
        this.accordionElement.open = true;
        this.open = true;
        this.atuiAccordionChange.emit(this.open);
    }
    /**
     * Closes this accordion item
     */
    async closeAccordion() {
        if (!this.open)
            return;
        this.accordionElement.open = false;
        this.open = false;
        this.atuiAccordionChange.emit(this.open);
    }
    /**
     * Return the accordion items open state
     */
    async getIsOpen() {
        return this.open;
    }
    render() {
        return (index.h(index.Host, { key: '9baac999cea4fb4d442a08e3c93f6e9d383a984d', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: '694e19f1fa012de01b1d67651c4e6660825ddad9', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, index.h("summary", { key: '0c077a39c7fde55c24f79600bb757a63304d06a6', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/40 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (index.h("at-accordion-trigger", { key: 'a26a662fa2ac6cccdb96c6af2f9cce5f60ecb5c9', label: this.label })), index.h("slot", { key: 'd97eeeb0ab7aefb01a2c039b8c16eef07c08e825', name: "accordion-trigger" })), index.h("div", { key: '5220a12c52a6fab112a09de7de9b349766808c9a', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: 'e920dda5379da0642787c93b3ff07c85baa8279d', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: '959789caae4feab7324f61e69f9efd24ce41827d' })))));
    }
};
AtAccordionItemComponent.style = atAccordionItemCss();

const AtAccordionTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Text to display on the trigger for the accordion item.
     */
    label;
    render() {
        return (index.h(index.Host, { key: '48b6108ef460d50375e9e64d270cd1a660b16a45', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: '1217f0a9dcee1dd11d4e2488bca81e69d570ace0', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: '8c5333035a4d87b952d06523ce4c93923534422f' }), index.h("at-icon", { key: '90c5e57796b795ab8bf3cbf877596a5723832a7c', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

exports.at_accordion_item = AtAccordionItemComponent;
exports.at_accordion_trigger = AtAccordionTriggerComponent;
