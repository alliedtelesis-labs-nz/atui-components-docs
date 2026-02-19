import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-jvbUuQtg.js';

const atAccordionItemCss = () => `details>summary{list-style:none}details>summary::-webkit-details-marker{display:none}`;

const AtAccordionItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiAccordionChange = createEvent(this, "atuiAccordionChange", 7);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '6c61c600f243cd20a4c78ad8337fcfc6e0f67e6e', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '35bf8cfb92fee324758fee565e85a044aa4ec9a5', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '4be1480121fb9e3ee028b85ecf8de161cf1cc1ae', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/40 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: '81f93652d7da046c4500b0808d74726a7a5da3ac', label: this.label })), h("slot", { key: '5b20b3e6bbc1232f9fc477ff75e4306ecf2e45a7', name: "accordion-trigger" })), h("div", { key: '72f9e27d61c0b725f8571eb5398bcfdef6578d29', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '104be6a68b36bd6e589b9ba0f0eaaad4c6e4d913', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '855ac7387d7b5e63d93f5377ddb5472a8aa520ec' })))));
    }
};
AtAccordionItemComponent.style = atAccordionItemCss();

const AtAccordionTriggerComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Text to display on the trigger for the accordion item.
     */
    label;
    render() {
        return (h(Host, { key: '651a1249491e2f0e97aaac2f842747f01481a395', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '6dbc4e7e18cdda21927bfb2175eab351949ee20a', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '0cc56ed73fd09620ba4b1752f148058e825bc3ae' }), h("i", { key: 'aeece5804a6a6a988c41069a24201c9c2ee34058', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
};

export { AtAccordionItemComponent as at_accordion_item, AtAccordionTriggerComponent as at_accordion_trigger };
