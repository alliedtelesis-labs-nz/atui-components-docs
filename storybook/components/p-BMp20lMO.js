import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('transition[background-color,color,box-shadow] text-body hover:bg-surface-1 focus-visible:ring-active-foreground/40 relative flex h-[40px] w-full cursor-pointer items-center gap-8 truncate overflow-visible rounded-md p-8 px-16 py-8 text-left leading-[24px] font-normal duration-300 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset', {
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
});
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
        const classname = variants({
            layout: this.layout,
            active: this.is_active,
        });
        return (h(Host, { key: '4935a769aaba8d0bbd2cd3374d931d7338546e14', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: '1fe0e278045bbb6f96661d83417e20ff2302fb61', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: '2c30b2689b206cd2b1c8cfaf83c00aea4a15960b' }))));
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
//# sourceMappingURL=p-BMp20lMO.js.map

//# sourceMappingURL=p-BMp20lMO.js.map