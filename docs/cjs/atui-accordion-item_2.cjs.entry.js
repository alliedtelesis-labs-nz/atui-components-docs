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
        return (index.h(index.Host, { key: 'be044fa772ed18e8da7063b5d1b33a27bd74226c', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: '6086645dc065dc6024094642e2ba10792f3c509c', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, index.h("summary", { key: '82f5598514f5f9e2e685f111462eada6239ffdfd', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item flex rounded-sm outline-0 focus-within:ring-2 focus-within:ring-active-foreground/30", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (index.h("atui-accordion-trigger", { key: '132ab793ff773db67145de6cb5866be2aea4162b', label: this.label })), index.h("slot", { key: 'd63c8705b662b06ae2bedd2743901cf1aa5ede3b', name: "accordion-trigger" })), index.h("div", { key: 'cac9bde6488148a6cbe8c01c3c6eab29d6a6af6f', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: 'd8ed89720c5dcc5f1e0b9424daecfa1290c172fc', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: 'f89ddb8a5187adc758ebbaa6dd33c3130514b2e3', name: "accordion-content" })))));
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