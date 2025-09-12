import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$1 } from './p-BR0ololI.js';

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
        return (h(Host, { key: 'df0b30a98b7d675e0026913f2b3cd57272457800', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '0b75f2bdf3de83a5c105542d9c437855e1e96b89', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: 'c4b999f81876ba1e07e400a7fe7ce332d172cd9e', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/30 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("atui-accordion-trigger", { key: 'e5049b8c8e163c55d45be30cf8c196533dfc0886', label: this.label })), h("slot", { key: 'a84adee22e7a2beef61dfdd93d981847e581902f', name: "accordion-trigger" })), h("div", { key: '04d8ff768d0e626f8497b7a00e0f4fc0bb5f07e7', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: 'd889e4a9325db52818e5fbb8a2169263910ec55e', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'd1ec326240f0dbdbef1519470c275a713693e863' })))));
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
//# sourceMappingURL=p-BgRKj52W.js.map

//# sourceMappingURL=p-BgRKj52W.js.map