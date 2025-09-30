import { p as proxyCustomElement, H, h, c as Host } from './p-BRRmBK9P.js';
import { c as classlist } from './p-DowIpD9s.js';

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
        /**
         * Styling based on the layout of the tabs
         */
        this.layout = 'horizontal';
    }
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
        return (h(Host, { key: '6debf8848bcbe442e5546f4ebf232a74a196095b', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: '042607cf72dd2b348430ea695a62c3ebe6a20250', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: '196b9f6bd9603b18421c5716dd03d56204bebfb4' }))));
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
//# sourceMappingURL=p-DGt5_n5u.js.map

//# sourceMappingURL=p-DGt5_n5u.js.map