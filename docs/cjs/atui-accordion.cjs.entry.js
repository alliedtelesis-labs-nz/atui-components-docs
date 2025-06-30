'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiAccordionComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Used to create accordion items.
         */
        this.items = [];
        /**
         * If set, all child accordions will be open by default.
         */
        this.default_open = false;
        this.accordionItems = [];
        this.accordionId = `accordion-${Math.random().toString(36).substring(2, 11)}`;
    }
    async componentDidLoad() {
        this.accordionItems = Array.from(this.el.querySelectorAll('atui-accordion-item'));
        if (this.default_open) {
            await this.openAll();
        }
    }
    /**
     * Toggles the open state of a specific accordion item
     * @param value Id of element to be toggled
     */
    async toggleById(value) {
        this.accordionItems.forEach((item) => {
            if (item.item_id === value) {
                if (item.open) {
                    item.closeAccordion();
                }
                else {
                    item.openAccordion();
                }
            }
        });
    }
    /**
     * Opens all accordion items
     */
    async openAll() {
        this.accordionItems.forEach((item) => {
            item.openAccordion();
        });
    }
    /**
     * Closes all accordion items.
     */
    async closeAll() {
        this.accordionItems.forEach((item) => {
            item.closeAccordion();
        });
    }
    /**
     * Toggles all accordion item's open state.
     */
    async toggleAll() {
        this.accordionItems.forEach((item) => {
            if (item.open) {
                item.closeAccordion();
            }
            else {
                item.openAccordion();
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: '040fca730e8e8016f675d494ef0f3f1c07f047fd', class: "flex flex-col gap-2" }, index.h("slot", { key: '082e66a9b29b1c267c92856e8f068fb07bd8efe4' }), this.items &&
            this.items.map((item) => {
                return (index.h("atui-accordion-item", { item_id: `${this.accordionId}-${item.item_id}`, label: item.label, content: item.content }));
            })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_accordion = AtuiAccordionComponent;
//# sourceMappingURL=atui-accordion.entry.cjs.js.map

//# sourceMappingURL=atui-accordion.cjs.entry.js.map