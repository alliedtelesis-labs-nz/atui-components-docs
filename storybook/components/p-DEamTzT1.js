import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-CRYD-ANM.js';

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
        return (h(Host, { key: 'a80ad48f711d150246419584a2a60bd30d70054f', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '3257fb86563823efb0bc0890f8b602e5398eb643', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: 'f30c7de30d4b28205cabeec79ef0977b78512d9d', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/40 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: '6b48ce2637f4c637f468691be2ae59fcb352e2f6', label: this.label })), h("slot", { key: '4f02cbf85eedffa2ada85529933f279c1defada5', name: "accordion-trigger" })), h("div", { key: '26f4cf7ca50a8996ffe77adbe866559f0605fd01', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: '75f6aa08fc93ef2ea1bdcf972eb58bef1fbff282', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '526f20fa12e1ede7d9103b13b1de59ce7c7e2570' })))));
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
//# sourceMappingURL=p-DEamTzT1.js.map

//# sourceMappingURL=p-DEamTzT1.js.map