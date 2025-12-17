import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block ',
            vertical: 'flex',
        },
        active: {
            true: 'z-index-20 text-active-foreground',
            false: 'text-light hover:bg-surface-1',
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
        const getClassname = classlist('group/tab text-button relative box-border flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-md border border-solid border-transparent font-medium capitalize duration-150 ease-in-out outline-none focus:outline-none p-8 ', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '2504abc0d76b0b7b112039275dc424e8e65bd3e2', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}`, class: this.fill ? 'flex-1' : undefined }, h("a", { key: '3e096c20b1aef3884f941f0be99ff44d960ee9fd', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: 'fbaf82507d01c1de2a177b35e55d823bff3ca6d4' }))));
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
//# sourceMappingURL=p-CfCnCt6Q.js.map

//# sourceMappingURL=p-CfCnCt6Q.js.map