import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$1 } from './p-DMcgrjfY.js';

const AtuiAccordionItemComponent = /*@__PURE__*/ proxyCustomElement(class AtuiAccordionItemComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '9887bd30bac52c59269e8ce3ecd36f1d04190167', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '29b406b015ff0675e05202a1577063afdbea4fc3', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '663864b568b56e15cef61fc61011a85cf001a21e', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item flex rounded-sm outline-0 focus-within:ring-2 focus-within:ring-active-foreground/30", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("atui-accordion-trigger", { key: '560282e155f34bff07d4a13a2c887f5aecd7fe79', label: this.label })), h("slot", { key: '7d5efc6be5daffdf3dfe0915781ff4f28dfb853b', name: "accordion-trigger" })), h("div", { key: '22fc02d916228f9157fa9489409f9ff25ee90749', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '40e7f3ce29ca66cf94d91fb7c744894aba01a1bb', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'ad7e7a76affd6171bc1745f46e42c8c49f0f4ae9', name: "accordion-content" })))));
    }
    get el() { return this; }
}, [4, "atui-accordion-item", {
        "item_id": [1],
        "label": [1],
        "border": [4],
        "content": [1],
        "open": [1028],
        "openAccordion": [64],
        "closeAccordion": [64],
        "getIsOpen": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-accordion-item", "atui-accordion-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-accordion-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiAccordionItemComponent);
            }
            break;
        case "atui-accordion-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiAccordionItemComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-O88V4QY0.js.map

//# sourceMappingURL=p-O88V4QY0.js.map