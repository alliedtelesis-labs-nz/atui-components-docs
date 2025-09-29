import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-BlNBm0E8.js';

const AtAccordionItemComponent = class {
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
        return (h(Host, { key: 'bde076d782e255d9f1a13794fd9accc127896dc7', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '234b795dc231def8483965fc82da626f3eea68b0', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '0c0cf5672b1e5d463f4abe5b6ea227d6ac105143', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/30 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: '4b8a67474e09cffcc578caa485ffb58ed2d4fe69', label: this.label })), h("slot", { key: '468795705e76f745771aafdf587d8ddfc72dc7b3', name: "accordion-trigger" })), h("div", { key: 'e27e0ad77f6a719fc45c68e1bd8faff7021445be', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: 'ecdedd88efa20a9d962e5c972881a7f6b9d98551', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '82cf0c1d55270d54dbae0eb1e1c93e3a8dd4dfe5' })))));
    }
    get el() { return getElement(this); }
};

const AtAccordionTriggerComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: '380b131a909d1dd565cbd2e7fd7558c970d39fa6', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '8178600d1af1963b3ccd3b65b80bd56a772142c5', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: 'de54125bd791a1a74caa35ad71d67296dc1c443c' }), h("i", { key: '644ba355705f5c18435fc04f55f8173747e87c7e', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
};

export { AtAccordionItemComponent as at_accordion_item, AtAccordionTriggerComponent as at_accordion_trigger };
//# sourceMappingURL=at-accordion-item.at-accordion-trigger.entry.js.map
