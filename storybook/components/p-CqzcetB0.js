import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block justify-center',
            vertical: 'flex justify-start',
        },
        active: {
            true: 'z-index-20 text-active-foreground focus:outline-2 focusfocus-visible:ring-active-foreground/30',
            false: 'text-light hover:bg-surface-1 focus-visible:ring-active-foreground/30',
        },
    },
    compoundVariants: [
        {
            layout: 'vertical',
            active: true,
            class: 'bg-active-foreground/10',
        },
    ],
};
const AtTabTrigger = /*@__PURE__*/ proxyCustomElement(class AtTabTrigger extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * ID of the tab
     */
    tab_id;
    /**
     * Title to be displayed in the tab
     */
    tab_title;
    /**
     * Styling based on the layout of the tabs
     */
    layout = 'horizontal';
    /**
     * Applies styling when active
     */
    is_active;
    /**
     * If true, the tab will fill the parent container's width.
     * Set by parent <at-tabs> to control layout.
     */
    fill = false;
    tabEl;
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.tabEl.click();
        }
    }
    render() {
        const getClassname = classlist('group/tab text-button relative box-border flex cursor-pointer items-center gap-4 overflow-hidden rounded-md border border-solid border-transparent font-medium capitalize duration-150 ease-in-out p-8 outline-none focus-visible:ring-active-foreground/40 focus-visible:ring-2 focus-visible:z-20', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: 'b2a6de4c686a0477ac614c041a644d7eb3a6312a', role: "tab", tabfocs: 0, "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}`, class: this.fill ? 'flex-1' : undefined }, h("a", { key: 'cc9ac187f0593af03ca8f85960100a41183818e7', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: '2b2815f9f2be5b90fcab5c5042f823147a20337f' }))));
    }
}, [260, "at-tab-trigger", {
        "tab_id": [1],
        "tab_title": [1],
        "layout": [1],
        "is_active": [4],
        "fill": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-tab-trigger"];
    components.forEach(tagName => { switch (tagName) {
        case "at-tab-trigger":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTabTrigger);
            }
            break;
    } });
}

export { AtTabTrigger as A, defineCustomElement as d };
//# sourceMappingURL=p-CqzcetB0.js.map

//# sourceMappingURL=p-CqzcetB0.js.map