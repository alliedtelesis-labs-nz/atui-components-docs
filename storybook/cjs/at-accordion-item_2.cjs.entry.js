'use strict';

var index = require('./index-BDNRUnGS.js');
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
    detailsEl;
    componentDidLoad() {
        if (this.open && this.detailsEl && !this.detailsEl.open) {
            this.detailsEl.open = true;
        }
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
        return (index.h(index.Host, { key: 'd30c6a74d6b5bf2686dd51cb9319c61012c8f014', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, index.h("details", { key: '3fc464063004f59e3a1d367201960acbb9287a08', class: "group/accordion-item", role: "group", ref: (el) => (this.detailsEl = el) }, index.h("summary", { key: '6ce1065d5a574819c2ad2886b7a3cdf99f2c6f6b', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "aria-disabled": this.disabled ? 'true' : undefined, "data-state": this.open ? 'expanded' : 'collapsed', class: classname, onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleSummaryInteraction(event);
                }
            }, "aria-controls": `content-${this.item_id}` }, this.label && (index.h("at-accordion-trigger", { key: 'bfd81dacd695a5bf9232a01df11ae7fe2443bb09', label: this.label })), index.h("slot", { key: 'e0c9172188caa6ca4fdf6925a9196ab2e645f8ca', name: "accordion-trigger" })), index.h("div", { key: '1bc2750d6bc26c8c0dbf5834f408d2a6ca0bcc14', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, "data-state": this.open ? 'expanded' : 'collapsed', "data-name": "accordion-item-content" }, this.content && (index.h("div", { key: '41a5971bcd663b5d8e2cb7c6797ad71679798be6', class: "flex flex-col p-16 leading-normal" }, this.content)), index.h("slot", { key: '467001283917e027733a563d025f22f5f7dd499b' })))));
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
        return (index.h(index.Host, { key: '60db92b60a15ec775fd224d6291bec1ae112ea1e', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (index.h("span", { key: '18c35ea18d15342b24e365ddcc429dddb38e1a5b', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), index.h("slot", { key: '9bcf2599e86c9f52aedd9dfd3fc631c42e7d84aa' }), index.h("at-icon", { key: 'caf65cacc146dd5d01ec68436f60cd99adb32f33', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

exports.at_accordion_item = AtAccordionItemComponent;
exports.at_accordion_trigger = AtAccordionTriggerComponent;
