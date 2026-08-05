import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-BQWIFs0G.js';
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
const getAccordionClasses = classlist('group/accordion-item focus-visible:ring-active-glow flex rounded-sm outline-0 focus-visible:ring', variantsConfig);
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
        return (h(Host, { key: '6a18840247cc76f4d06359f3ed9e74b20c2f9776', "data-name": this.item_id, "data-state": this.open ? 'expanded' : 'collapsed' }, h("details", { key: '97f346fd27048f3224c651b6864d394759bc59af', class: "group/accordion-item", role: "group", ref: (el) => (this.detailsEl = el) }, h("summary", { key: '5fc859fa0175eadda3b539ce68604abf38343457', id: `trigger-${this.item_id}`, role: "button", "aria-expanded": this.open, "aria-disabled": this.disabled ? 'true' : undefined, "data-state": this.open ? 'expanded' : 'collapsed', class: classname, onClick: (event) => this.handleSummaryInteraction(event), onTouchEnd: (event) => this.handleSummaryInteraction(event), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleSummaryInteraction(event);
                }
            }, "aria-controls": `content-${this.item_id}` }, this.label && (h("at-accordion-trigger", { key: 'eb2b494067600103f45fd9d2f4225f398cacab26', label: this.label })), h("slot", { key: 'da536a64590c5117d69c5bbcc5a37831b120e0e7', name: "accordion-trigger" })), h("div", { key: '5f18481e9e9a6695138ecbd6e538cb565024040f', id: `content-${this.item_id}`, "aria-labelledby": `trigger-${this.item_id}`, "data-state": this.open ? 'expanded' : 'collapsed', "data-name": "accordion-item-content" }, this.content && (h("div", { key: '477a163a21db2995d5f6733459288d51609ce514', class: "flex flex-col p-16 leading-normal" }, this.content)), h("slot", { key: '3777bf70d607d08d6c70d4ffa93bba61be32cea6' })))));
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
        return (h(Host, { key: 'de9cc717e6230fda99353d731d3ed04303010c08', class: "group flex flex-1 items-center justify-between p-8", "data-name": "accordion-trigger" }, this.label && (h("span", { key: '93f67b599f3194b5d96780575b4fbb3d298a6e0a', class: "flex flex-grow truncate text-sm font-medium group-hover:underline" }, this.label)), h("slot", { key: 'c2f65feeacea62f918aa468e9beb9e7a9d17d719' }), h("at-icon", { key: '8bfa57a9e6ed3a6191af34e4dba1bc4aeb55813d', role: "presentation", "aria-hidden": "true", class: "fill-light group-data-[state=expanded]/accordion-item:rotate-180", name: "chevron_down" })));
    }
};

export { AtAccordionItemComponent as at_accordion_item, AtAccordionTriggerComponent as at_accordion_trigger };
