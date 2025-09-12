import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';

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
const AtuiTab = /*@__PURE__*/ proxyCustomElement(class AtuiTab extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '1147d9b8d4d39f45ca13287e9b50a42f83eb3710', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: 'ba5ecc1583c2d7678f202c8fc784dfc0bbf7bb0d', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: '42a79e350ebfb77946bc3484c22e0bee1cfb66b9' }))));
    }
}, [260, "atui-tab", {
        "tab_id": [1],
        "tab_title": [1],
        "layout": [1],
        "is_active": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-tab"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-tab":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTab);
            }
            break;
    } });
}

export { AtuiTab as A, defineCustomElement as d };
//# sourceMappingURL=p-pEaZ4RSC.js.map

//# sourceMappingURL=p-pEaZ4RSC.js.map