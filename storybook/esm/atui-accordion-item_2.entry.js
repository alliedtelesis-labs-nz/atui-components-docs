import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-C8uvvL0O.js';

const AtuiAccordionItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiAccordionChange = createEvent(this, "atuiAccordionChange", 7);
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
        return (h(Host, { key: 'df0b30a98b7d675e0026913f2b3cd57272457800', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '0b75f2bdf3de83a5c105542d9c437855e1e96b89', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: 'c4b999f81876ba1e07e400a7fe7ce332d172cd9e', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/30 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("atui-accordion-trigger", { key: 'e5049b8c8e163c55d45be30cf8c196533dfc0886', label: this.label })), h("slot", { key: 'a84adee22e7a2beef61dfdd93d981847e581902f', name: "accordion-trigger" })), h("div", { key: '04d8ff768d0e626f8497b7a00e0f4fc0bb5f07e7', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: 'd889e4a9325db52818e5fbb8a2169263910ec55e', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'd1ec326240f0dbdbef1519470c275a713693e863' })))));
    }
    get el() { return getElement(this); }
};

const AtuiAccordionTriggerComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '42fc1dcf6e54af14e0ae9b10581616bb1c99617f', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '3f58850b18a0f015bc71e915a6392531ec691e64', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '7c1367efa150fc31f95305f0d5ac8d71e39edaf8' }), h("i", { key: 'dd9c63db99b00c092c31f65c839a9b75b929fccd', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
};

export { AtuiAccordionItemComponent as atui_accordion_item, AtuiAccordionTriggerComponent as atui_accordion_trigger };
//# sourceMappingURL=atui-accordion-item.atui-accordion-trigger.entry.js.map

//# sourceMappingURL=atui-accordion-item_2.entry.js.map