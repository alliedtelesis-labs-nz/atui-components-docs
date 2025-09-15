import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$1 } from './p-Jpa-oIRC.js';

const AtAccordionItemComponent = /*@__PURE__*/ proxyCustomElement(class AtAccordionItemComponent extends H {
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
        return (h(Host, { key: 'bde076d782e255d9f1a13794fd9accc127896dc7', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '234b795dc231def8483965fc82da626f3eea68b0', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '0c0cf5672b1e5d463f4abe5b6ea227d6ac105143', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item focus-within:ring-active-foreground/30 flex rounded-sm outline-0 focus-within:ring-2", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: '4b8a67474e09cffcc578caa485ffb58ed2d4fe69', label: this.label })), h("slot", { key: '468795705e76f745771aafdf587d8ddfc72dc7b3', name: "accordion-trigger" })), h("div", { key: 'e27e0ad77f6a719fc45c68e1bd8faff7021445be', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: 'ecdedd88efa20a9d962e5c972881a7f6b9d98551', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '82cf0c1d55270d54dbae0eb1e1c93e3a8dd4dfe5' })))));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-2_xEzlfW.js.map

//# sourceMappingURL=p-2_xEzlfW.js.map