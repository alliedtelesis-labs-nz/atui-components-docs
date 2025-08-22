import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DzGFYGds.js';
import { d as defineCustomElement$1 } from './p-B5K9l6Gv.js';

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
        return (h(Host, { key: '1a9654b4035a12401817c366e5b9cb877f36ec3a', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '79bf4d6c09339cd0ad36dee32d7db178a5238886', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '92c4eddb6b24dbb25c88e51d19dab80c0f7de7ff', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item flex rounded-sm outline-0 focus-within:ring-2 focus-within:ring-active-foreground/30", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("atui-accordion-trigger", { key: '3d28787034f26807d6a69827cb9f8dd8b932533b', label: this.label })), h("slot", { key: '271fe989e0e11624e7822e178baa0d23a11d5faf', name: "accordion-trigger" })), h("div", { key: '14bd170c05c41515a717bd6845e3267bbe9825e8', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '7e29db60e804c48bef30108180faea3f0bbc88d1', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'da72b10da95eb048af46888558743d88646ab644', name: "accordion-content" })))));
    }
    get el() { return this; }
}, [260, "atui-accordion-item", {
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
//# sourceMappingURL=p-CJyIegWw.js.map

//# sourceMappingURL=p-CJyIegWw.js.map