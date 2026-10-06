'use strict';

var index = require('./index-Dzqi4iVM.js');
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
const getAccordionClasses = classlist.classlist('group/accordion-item focus-visible:ring-active-glow flex rounded-sm outline-0 focus-visible:ring', variantsConfig);
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
    /**
     * The `<details>` element's own open state, which trails `open` on the way
     * closed so the collapse can animate before the content is taken out of the
     * page. Rendered rather than assigned after mount: content that measures
     * itself on load - a chart sizing its canvas - reads zero inside a details
     * that is still closed for its first frame, and never re-measures without an
     * interaction.
     */
    detailsOpen = false;
    detailsEl;
    componentWillLoad() {
        this.detailsOpen = this.open;
    }
    async handleSummaryInteraction(event) {
        if (this.disabled) {
            event.preventDefault();
            return;
        }
        if (event.type === 'click' ||
            event.type === 'touchend' ||
            event.type === 'keydown') {
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
            this.detailsOpen = true;
            this.detailsEl.open = true;
        }
        else {
            this.detailsEl.addEventListener('transitionend', () => {
                if (!this.open) {
                    this.detailsOpen = false;
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
        this.detailsOpen = true;
        // Also set directly: the expansion animates from this frame, and a
        // Stencil re-render may not have committed by the time it starts.
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
        return (index.h(index.Host, { key: '777b7bd43472562791e0ca090ca216692f745177', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: 'cf60895b596ac2ad60d05b3e4c6083376de9b373', class: "group/accordion-item", role: "group", open: this.detailsOpen, ref: (el) => (this.detailsEl = el) }, index.h("summary", { key: '5ce7186e1974e3bcd5fb0bd72950ffc6e87a69e4', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "aria-disabled": this.disabled ? 'true' : undefined, "data-state": this.open ? 'expanded' : 'collapsed', class: classname, onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleSummaryInteraction(event);
                }
            }, "aria-controls": `content-${this.item_id}` }, this.label && (index.h("at-accordion-trigger", { key: 'a7205907becd37cd49aa02bfd6ebf2ac3053cf16', label: this.label })), index.h("slot", { key: '92801b675d56a82cf74a1b4cdc17e01528b1bcad', name: "accordion-trigger" })), index.h("div", { key: '7182c5f2986250195c514c98fa159a697d32df2d', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, "data-state": this.open ? 'expanded' : 'collapsed', "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: 'ca455619280eb539c694520119765be6429021ec', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: '11567449b780d5060c4ac65d1afc1ff732c5ea5d' })))));
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
        return (index.h(index.Host, { key: 'fbe0d51e3357faeb3ecfde4e7e71b5a5cab91bda', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: 'e01ee3f6dd8c4325f5c7f6c423c5d8a51c6980e1', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: 'fb935f1e7223dac68e8ad3519b92e7f37d1168a5' }), index.h("at-icon", { key: '21b1a9ce9cca136969100bd187074384c258809f', role: "presentation", "aria-hidden": "true", class: "fill-foreground group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

exports.at_accordion_item = AtAccordionItemComponent;
exports.at_accordion_trigger = AtAccordionTriggerComponent;
