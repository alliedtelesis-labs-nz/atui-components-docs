import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: '5727b763ace551d58b4171a35e5328d9638e1667', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: 'dc016406de8ee5f209e5b670efc7a9b3f6dbd035', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '38361710c0576b6f5adac1a53fde85c13fad6d3f', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/40 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: 'c04ea80775f2afc875191f20233568766d55dac5', label: this.label })), h("slot", { key: '8b91a1b23669201b019f6c5d07c1c013ae7211ba', name: "accordion-trigger" })), h("div", { key: '3fd5d21c2816394269650ac2f9eef0943a246c5f', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '4805fed545394bb51dbf416853bba212f7113833', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'cbcc8bbf24611a2fde725bac8d038c131c377953' })))));
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
        return (h(Host, { key: '05f108c1583b75f0b3f5316db73df5e9d73d537f', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: 'b36ed8387a9420fdfe252d16fa34d04cf089350d', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '9ed4317ed0d50980450c4e520340cf11b6ff9f7f' }), h("i", { key: '250dffeb45ddceb7fe3ea9a59168f9f995172be1', role: "presentation", "aria-hidden": "true", class: "material-icons text-md text-light group-data-[state=expanded]/accordion-item:rotate-180" }, "keyboard_arrow_down")));
    }
};

export { AtAccordionItemComponent as at_accordion_item, AtAccordionTriggerComponent as at_accordion_trigger };
