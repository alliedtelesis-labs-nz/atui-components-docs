import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: '9baac999cea4fb4d442a08e3c93f6e9d383a984d', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '694e19f1fa012de01b1d67651c4e6660825ddad9', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '499e578c5765af1c2ccb244fdc767a81d872c3e8', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-glow flex rounded-sm outline-0 focus-within:ring", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: 'ff15a05eac7efed3aa71de743ab7926d495525f6', label: this.label })), h("slot", { key: 'eaa2b303a539eed2915fbac34f2fc165255fe00a', name: "accordion-trigger" })), h("div", { key: '81540afaef9fd17ad6f11484afbdf5a63797c76f', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '6841cdab605d4c65c6c5a3d1e4e2573d527e4ccf', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '43ff8b8063d0689b5ef8ff2cbf8405cc8b4ba718' })))));
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
        return (h(Host, { key: '48b6108ef460d50375e9e64d270cd1a660b16a45', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '1217f0a9dcee1dd11d4e2488bca81e69d570ace0', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '8c5333035a4d87b952d06523ce4c93923534422f' }), h("at-icon", { key: '90c5e57796b795ab8bf3cbf877596a5723832a7c', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

export { AtAccordionItemComponent as at_accordion_item, AtAccordionTriggerComponent as at_accordion_trigger };
