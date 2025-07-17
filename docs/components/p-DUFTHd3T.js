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
        return (h(Host, { key: 'be044fa772ed18e8da7063b5d1b33a27bd74226c', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '6086645dc065dc6024094642e2ba10792f3c509c', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group", open: this.open }, h("summary", { key: '82f5598514f5f9e2e685f111462eada6239ffdfd', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item flex rounded-sm outline-0 focus-within:ring-2 focus-within:ring-active-foreground/30", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("atui-accordion-trigger", { key: '132ab793ff773db67145de6cb5866be2aea4162b', label: this.label })), h("slot", { key: 'd63c8705b662b06ae2bedd2743901cf1aa5ede3b', name: "accordion-trigger" })), h("div", { key: 'cac9bde6488148a6cbe8c01c3c6eab29d6a6af6f', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (h("div", { key: 'd8ed89720c5dcc5f1e0b9424daecfa1290c172fc', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: 'f89ddb8a5187adc758ebbaa6dd33c3130514b2e3', name: "accordion-content" })))));
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
//# sourceMappingURL=p-DUFTHd3T.js.map

//# sourceMappingURL=p-DUFTHd3T.js.map