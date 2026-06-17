'use strict';

var index = require('./index-D93m6lxs.js');
var classlist = require('./classlist-BPb95vgj.js');

const atAccordionItemCss = () => `details>summary{list-style:none}details>summary::-webkit-details-marker{display:none}[data-name=accordion-item-content]{display:grid;grid-template-rows:1fr;transition:grid-template-rows 200ms ease-in-out, opacity 200ms ease;opacity:1}[data-name=accordion-item-content][data-state=collapsed]{grid-template-rows:0fr;overflow:hidden;opacity:0}[data-name=accordion-item-content]>*{overflow:hidden}`;

const variantsConfig = {
    variants: {
        disabled: {
            true: 'text-disabled-foreground pointer-events-none',
            false: null,
        },
    },
};
const getAccordionClasses = classlist.classlist('group/accordion-item focus-within:ring-active-glow flex rounded-sm outline-0 focus-within:ring', variantsConfig);
const AtAccordionItemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiAccordionChange = index.createEvent(this, "atuiAccordionChange", 7);
    }
    get el() { return index.getElement(this); }
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
     * Will disable interaction if set
     */
    disabled;
    /**
     * Emitted when the accordion item's open state changes
     */
    atuiAccordionChange;
    detailsEl;
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
    handleOpenChange(newValue) {
        if (newValue) {
            this.detailsEl.open = true;
        }
        else {
            this.detailsEl.addEventListener('transitionend', () => {
                if (!this.open) {
                    this.detailsEl.open = false;
                }
            }, { once: true });
        }
    }
    /**
     * Opens this accordion item
     */
    async openAccordion() {
        if (this.open)
            return;
        this.detailsEl.open = true;
        requestAnimationFrame(() => {
            this.open = true;
            this.atuiAccordionChange.emit(true);
        });
    }
    /**
     * Closes this accordion item
     */
    async closeAccordion() {
        if (!this.open)
            return;
        this.open = false;
        this.atuiAccordionChange.emit(false);
    }
    /**
     * Return the accordion items open state
     */
    async getIsOpen() {
        return this.open;
    }
    render() {
        const classname = getAccordionClasses({
            disabled: this.disabled,
        });
        return (index.h(index.Host, { key: '48bf02798da3c60e6990f47dafce903166f28885', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: 'f179ea4b943375b99da01dc8135d4edda539a88d', class: "group/accordion-item", role: "group", ref: (el) => (this.detailsEl = el) }, index.h("summary", { key: '2b9d973bc7410609fd6b61df9a4865bad81b67f0', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: classname, onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (index.h("at-accordion-trigger", { key: '4549a5b8a2b1ac110e16abe12f57c7456cc9e492', label: this.label })), index.h("slot", { key: '1bbb927d0655c3cc18b0198bd2077036a41459f4', name: "accordion-trigger" })), index.h("div", { key: '9a73394330ee40144ae4c12e2e6a2f6f7baa8360', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, "data-state": this.open ? 'expanded' : 'collapsed', "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: 'cf9311703ac9f1eef11c63c80dc071984d4d1945', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: 'b7c26f69c4d71be4d579f9360f1ae4eb458fb811' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
AtAccordionItemComponent.style = atAccordionItemCss();

const AtAccordionTriggerComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Text to display on the trigger for the accordion item.
     */
    label;
    render() {
        return (index.h(index.Host, { key: '60d7dcd7207e5ab59e54304e9f73e1209511ac58', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: '38cd926593e7c20eecb5ef656b9fc612860daff7', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: '2083d257c85a3a5874c73b35bce11cc80a58e508' }), index.h("at-icon", { key: '5887ce6714601c25d77756166b4a1f9c24aad700', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

exports.at_accordion_item = AtAccordionItemComponent;
exports.at_accordion_trigger = AtAccordionTriggerComponent;
