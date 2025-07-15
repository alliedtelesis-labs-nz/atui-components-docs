'use strict';

var index = require('./index-BJDFmEHZ.js');

const AtuiAccordionItemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiAccordionChange = index.createEvent(this, "atuiAccordionChange", 7);
        /**
         * Puts a light gray separator below the accordion item
         */
        this.border = true;
        /**
         * Used for setting if the accordion is open.
         */
        this.open = false;
    }
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
        return (index.h(index.Host, { key: '9887bd30bac52c59269e8ce3ecd36f1d04190167', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: '29b406b015ff0675e05202a1577063afdbea4fc3', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, index.h("summary", { key: '663864b568b56e15cef61fc61011a85cf001a21e', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item flex rounded-sm outline-0 focus-within:ring-2 focus-within:ring-active-foreground/30", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (index.h("atui-accordion-trigger", { key: '560282e155f34bff07d4a13a2c887f5aecd7fe79', label: this.label })), index.h("slot", { key: '7d5efc6be5daffdf3dfe0915781ff4f28dfb853b', name: "accordion-trigger" })), index.h("div", { key: '22fc02d916228f9157fa9489409f9ff25ee90749', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: '40e7f3ce29ca66cf94d91fb7c744894aba01a1bb', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: 'ad7e7a76affd6171bc1745f46e42c8c49f0f4ae9', name: "accordion-content" })))));
    }
    get el() { return index.getElement(this); }
};

const AtuiAccordionTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '1cde0d8240d62080a4e16aac903acf0477926dbb', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: 'dfcc6b3ee376c3f26b2ad063fc901cd74b141363', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: '255f0a51daa96eac27f9e68292795614f9f1fc17' }), index.h("i", { key: '398249ce66aefaf7152002c139dec6e8e0800308', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
};

exports.atui_accordion_item = AtuiAccordionItemComponent;
exports.atui_accordion_trigger = AtuiAccordionTriggerComponent;
//# sourceMappingURL=atui-accordion-item.atui-accordion-trigger.entry.cjs.js.map

//# sourceMappingURL=atui-accordion-item_2.cjs.entry.js.map