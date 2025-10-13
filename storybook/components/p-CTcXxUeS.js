import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

const variantsConfig = {
    variants: {
        layout: {
            horizontal: 'inline-block',
            vertical: 'flex',
        },
        active: {
            true: 'z-index-20 text-active-foreground',
            false: 'text-light',
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
const AtTab = /*@__PURE__*/ proxyCustomElement(class AtTab extends H {
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
    tabEl;
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            this.tabEl.click();
        }
    }
    render() {
        const getClassname = classlist('group/tab text-button relative box-border flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-md border border-solid border-transparent font-medium capitalize duration-150 ease-in-out outline-none focus:outline-none', variantsConfig);
        const classname = getClassname({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: 'c291afe3f9562d713c57d5840ed193cea77f50c2', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: '1f4d5cd4fc84609f0e3ea28135caaf2cdfd27551', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: 'e09f2465789f32779ca8b223294e2cc3cc042821' }))));
    }
}, [260, "at-tab", {
        "tab_id": [1],
        "tab_title": [1],
        "layout": [1],
        "is_active": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-tab"];
    components.forEach(tagName => { switch (tagName) {
        case "at-tab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTab);
            }
            break;
    } });
}

export { AtTab as A, defineCustomElement as d };
//# sourceMappingURL=p-CTcXxUeS.js.map

//# sourceMappingURL=p-CTcXxUeS.js.map