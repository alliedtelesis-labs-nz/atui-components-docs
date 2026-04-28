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
        return (index.h(index.Host, { key: '5727b763ace551d58b4171a35e5328d9638e1667', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: 'dc016406de8ee5f209e5b670efc7a9b3f6dbd035', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, index.h("summary", { key: '526727699a2d86e638bbda6fec1839e6aeb7ebaf', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-glow flex rounded-sm outline-0 focus-within:ring", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (index.h("at-accordion-trigger", { key: '06a1d41ccc0416fef546a172e860f2e4d0b97119', label: this.label })), index.h("slot", { key: 'c6daf83eeb8962e51c6a7e1fcb6650a0386e281c', name: "accordion-trigger" })), index.h("div", { key: '591636f99b1967742dd41c84663e862704bcd696', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, class: "accordion-item-content", "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: '4805fed545394bb51dbf416853bba212f7113833', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: 'cbcc8bbf24611a2fde725bac8d038c131c377953' })))));
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
        return (index.h(index.Host, { key: '05f108c1583b75f0b3f5316db73df5e9d73d537f', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: 'b36ed8387a9420fdfe252d16fa34d04cf089350d', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: '9ed4317ed0d50980450c4e520340cf11b6ff9f7f' }), index.h("at-icon", { key: 'a9426f36e4d80fa6afa4035d985a0c0de3ed78d0', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

exports.at_accordion_item = AtAccordionItemComponent;
exports.at_accordion_trigger = AtAccordionTriggerComponent;
