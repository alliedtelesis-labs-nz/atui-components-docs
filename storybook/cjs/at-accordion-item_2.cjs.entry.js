'use strict';

var index = require('./index--r5sCsiV.js');

const atAccordionItemCss = () => `details>summary{list-style:none}details>summary::-webkit-details-marker{display:none}details .accordion-item-content{overflow:hidden}details::details-content{display:block;block-size:0;overflow:hidden;transition-property:block-size, content-visibility;transition-duration:0.3s;transition-timing-function:ease-in-out;transition-behavior:allow-discrete}details[open]::details-content{block-size:auto;block-size:calc-size(auto, size)}`;

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
        return (index.h(index.Host, { key: '6aac5b455c470e85055b9207f4bb7caf84fbde73', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: '73a0b2d34581bb934c03afdc77946955f50d5fc5', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, index.h("summary", { key: '3867897327d7c953a5b27d253e3606368ecee0d0', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-glow flex rounded-sm outline-0 focus-within:ring", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (index.h("at-accordion-trigger", { key: '429f724b585768a9e2730c6e6fe4d26405d4fc5d', label: this.label })), index.h("slot", { key: '0b70b6a67020b4d5b86af97cb77b36aca9725ac3', name: "accordion-trigger" })), index.h("div", { key: '2c59cf806753b875b30a701039d72723645e1a03', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, class: "accordion-item-content", "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: '6004eb248e5c2c91bf677330fc8a05885ca3a10d', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: 'f27cde9043c9fa94174d022ce07dc0496a9a2856' })))));
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
        return (index.h(index.Host, { key: 'd8ac1d4904b40beca194a8b46f37328920f052cb', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: '35970b87d7b3a62048149ca723a6a987e4bf0d86', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: '76ca6e5909522207154f3c56b92f8d0bd64f72f9' }), index.h("at-icon", { key: '406e7301de3fd3eca588741844075c7988b48f8b', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

exports.at_accordion_item = AtAccordionItemComponent;
exports.at_accordion_trigger = AtAccordionTriggerComponent;
