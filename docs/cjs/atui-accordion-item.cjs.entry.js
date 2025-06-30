'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiAccordionItemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
    }
    /**
     * Closes this accordion item
     */
    async closeAccordion() {
        if (!this.open)
            return;
        this.accordionElement.open = false;
        this.open = false;
    }
    render() {
        return (index.h(index.Host, { key: 'e2e8c6495841f2a7ebc94d84045a6de3a2b4678f', "data-name": this.item_id }, index.h("details", { key: '05d26b9ac59c2bd1ff4cf604d1eafc4369e5c957', class: `group/accordion-item'}`, ref: (el) => (this.accordionElement = el), role: "group" }, index.h("summary", { key: '963d29e1fea790465bb8ace503c516efb268aa7e', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: "group/accordion-item flex rounded-sm outline-0 focus-within:ring-2 focus-within:ring-active-foreground/30", onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (index.h("atui-accordion-trigger", { key: '56953db306282344b3153194003d26f57945f536', label: this.label })), index.h("slot", { key: 'f901e5f1d03a87d5a4ea427c4538a80fb869329a', name: 'trigger' })), index.h("div", { key: '65f5076c810df6dd2865bfeeb655fded3256ac20', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, hidden: !this.open, "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: '09614636c70060cb650281db7b32b4e09e5c7349', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: '523dbf70b4ed486b8e2def07525068e28b41bbd4', name: 'content' })))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_accordion_item = AtuiAccordionItemComponent;
//# sourceMappingURL=atui-accordion-item.entry.cjs.js.map

//# sourceMappingURL=atui-accordion-item.cjs.entry.js.map