import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-Bos8rqAS.js';

const atAccordionItemCss = "details>summary{list-style:none}details>summary::-webkit-details-marker{display:none}";

const AtAccordionItemComponent = /*@__PURE__*/ proxyCustomElement(class AtAccordionItemComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiAccordionChange = createEvent(this, "atuiAccordionChange", 7);
    }
    get el() { return this; }
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
        return (h(Host, { key: '37825133e50202f8cf8caab7f371e21bc3de09ce', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: 'f00b05822b1a639adb54e5b2f3a63954331afa70', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: 'ce398e020328e5bdcda0c77a09d34198c0765d2f', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/30 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: '7cd5c54296169e46127f65f94c14eda34c799b2f', label: this.label })), h("slot", { key: 'de7d30f0476654eb660031e069ce7c921a82466f', name: "accordion-trigger" })), h("div", { key: '2df8b0fcd61ee435e2bf66b341d866845eef86c2', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '741192a15fe85a1a88e6e63f25162ec1d79ed55c', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'd791700db53a8b78bc615859d2d33c22963f8496' })))));
    }
    static get style() { return atAccordionItemCss; }
}, [260, "at-accordion-item", {
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
    const components = ["at-accordion-item", "at-accordion-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "at-accordion-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtAccordionItemComponent);
            }
            break;
        case "at-accordion-trigger":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtAccordionItemComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-DQ7qmjxz.js.map

//# sourceMappingURL=p-DQ7qmjxz.js.map