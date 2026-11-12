'use strict';

var index = require('./index-IIXwPU2S.js');
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
        if (!this.detailsEl)
            return;
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
        return (index.h(index.Host, { key: 'e8600fc294258f1bfd05465a02d1b1c5625551c3', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: '34b384ee30128b3683e2c0dc22a34eaae4326212', class: "group/accordion-item", role: "group", open: this.detailsOpen, ref: (el) => (this.detailsEl = el) }, index.h("summary", { key: 'aa627f9e1da7c33f8bd46ecfa6d954240c32d038', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "aria-disabled": this.disabled ? 'true' : undefined, "data-state": this.open ? 'expanded' : 'collapsed', class: classname, onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleSummaryInteraction(event);
                }
            }, "aria-controls": `content-${this.item_id}` }, this.label && (index.h("at-accordion-trigger", { key: '07ffdbaecdcfdbcb83d282b2ada73cea889d94f3', label: this.label })), index.h("slot", { key: 'a41ebbc49e6d408b54a178c04318fbda884fb751', name: "accordion-trigger" })), index.h("div", { key: 'e103ec51ebf999b1886765b277699182a3f9672b', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, "data-state": this.open ? 'expanded' : 'collapsed', "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: '1cb331141ecdc2303ec9fb5868297934725fe344', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: '6af06d8bad5c8a193685f58ad126dcc73094c92f' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 1
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
        return (index.h(index.Host, { key: 'a6e079f437718831464efabfbef4c142d1d6818b', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: 'e13a681f0db99d85bd460a1c91c730ac069120b7', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: '3103dea241eac9f1a7ba6875f1b90c57daa5c554' }), index.h("at-icon", { key: '90affea2a79d6a31e6729d6a8fceb1c0603ccb7a', role: "presentation", "aria-hidden": "true", class: "fill-foreground group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

exports.at_accordion_item = AtAccordionItemComponent;
exports.at_accordion_trigger = AtAccordionTriggerComponent;
