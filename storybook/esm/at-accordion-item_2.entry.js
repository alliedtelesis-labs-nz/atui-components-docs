import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-H8lgnoYZ.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const atAccordionItemCss = () => `details>summary{list-style:none}details>summary::-webkit-details-marker{display:none}[data-name=accordion-item-content]{display:grid;grid-template-rows:1fr;transition:grid-template-rows 200ms ease-in-out, opacity 200ms ease;opacity:1}[data-name=accordion-item-content][data-state=collapsed]{grid-template-rows:0fr;overflow:hidden;opacity:0}[data-name=accordion-item-content]>*{overflow:hidden}`;

const variantsConfig = {
    variants: {
        disabled: {
            true: 'text-disabled-foreground pointer-events-none',
            false: null,
        },
    },
};
const getAccordionClasses = classlist('group/accordion-item focus-within:ring-active-glow flex rounded-sm outline-0 focus-within:ring', variantsConfig);
const AtAccordionItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiAccordionChange = createEvent(this, "atuiAccordionChange", 7);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'fdbc9f503ee9ab02d53e154a026ad5f42e323f8a', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: 'f9a9ce8623ef0e236d3ae26fdbe03e8fbfb2d30f', class: "group/accordion-item", role: "group", ref: (el) => (this.detailsEl = el) }, h("summary", { key: 'ae1af57c63f67a416f54287f7d1db5e97d68cc7a', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: classname, onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: 'cba8164c080b8a3cb1d4eb3784f7c6bbd1971a3b', label: this.label })), h("slot", { key: '8860a58ace907096b3b4c111be623b6e9c49ceb6', name: "accordion-trigger" })), h("div", { key: '29caeff1ff43927a21db9d72dc8af417007c896f', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, "data-state": this.open ? 'expanded' : 'collapsed', "data-name": "accordion-item-content" }, this.content && (h("div", { key: 'ffcbdca0acae3a539ea0e60c62448b6da70f21aa', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '1c1a8ec6a2bbcb472ad72315eca1a1fa8f9c6624' })))));
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
        registerInstance(this, hostRef);
    }
    /**
     * Text to display on the trigger for the accordion item.
     */
    label;
    render() {
        return (h(Host, { key: '748e3cc01639dcb385a991a154ca0f66868cada5', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: 'cb6d5a41aa345dbeee12a4f35383a0a5c7fc20e0', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '29f6e6e25ddfac6dadcdd69af1b3cac49a7b2930' }), h("at-icon", { key: '927c41c1c5b4d2721661b2bb28c85f7e0f9e4ee3', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

export { AtAccordionItemComponent as at_accordion_item, AtAccordionTriggerComponent as at_accordion_trigger };
