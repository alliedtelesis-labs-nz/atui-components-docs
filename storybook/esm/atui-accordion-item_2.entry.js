import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-CIq6mZ3i.js';

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
        return (h(Host, { key: '1a9654b4035a12401817c366e5b9cb877f36ec3a', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '79bf4d6c09339cd0ad36dee32d7db178a5238886', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '92c4eddb6b24dbb25c88e51d19dab80c0f7de7ff', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item flex rounded-sm outline-0 focus-within:ring-2 focus-within:ring-active-foreground/30", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("atui-accordion-trigger", { key: '3d28787034f26807d6a69827cb9f8dd8b932533b', label: this.label })), h("slot", { key: '271fe989e0e11624e7822e178baa0d23a11d5faf', name: "accordion-trigger" })), h("div", { key: '14bd170c05c41515a717bd6845e3267bbe9825e8', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '7e29db60e804c48bef30108180faea3f0bbc88d1', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'da72b10da95eb048af46888558743d88646ab644', name: "accordion-content" })))));
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