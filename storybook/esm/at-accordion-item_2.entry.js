import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';
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
        return (h(Host, { key: 'bde5e72538ee8c70bc4012e26c541800ad5177d9', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '6b1d1e119bb6a97089afa70b54679754934ad6f7', class: "group/accordion-item", role: "group", ref: (el) => (this.detailsEl = el) }, h("summary", { key: '23ac424a55a8fcdec4992347e9e73fa8a0d4d882', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "data-state": this.open ? 'expanded' : 'collapsed', class: classname, onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: '2444228eb24ead32f1839bee69f4ffc7f2781348', label: this.label })), h("slot", { key: 'a3181646858a778c9557ddaaa8575591c08f7f4c', name: "accordion-trigger" })), h("div", { key: '6c3b7d26aefbd48ac7cb26182216401392470ace', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, "data-state": this.open ? 'expanded' : 'collapsed', "data-name": "accordion-item-content" }, this.content && (h("div", { key: 'c7164a493e9c6941e6ec9adfe8ee2651a37a5478', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '73dac0a533b0572f20309b0db9cc895784e44658' })))));
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
        return (h(Host, { key: '05f108c1583b75f0b3f5316db73df5e9d73d537f', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: 'b36ed8387a9420fdfe252d16fa34d04cf089350d', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: '9ed4317ed0d50980450c4e520340cf11b6ff9f7f' }), h("at-icon", { key: 'a9426f36e4d80fa6afa4035d985a0c0de3ed78d0', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

export { AtAccordionItemComponent as at_accordion_item, AtAccordionTriggerComponent as at_accordion_trigger };
