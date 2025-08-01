import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('transition[background-color,color,box-shadow] relative flex h-[40px] w-full cursor-pointer items-center gap-8 overflow-visible truncate rounded-md p-8 px-16 py-8 text-left text-body font-normal leading-[24px] duration-300 ease-in-out hover:bg-surface-1 focus:outline-0 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-active-foreground/40', {
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
        return (h(Host, { key: '730c054bb654024e3fcf3c3495ea0ddfb03f7a5d', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: '7ed1ee6ceaefc7c62dff6d1a42345475afac3c7c', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: 'e8d0cb997a7aa94bf03d02706ad5822489bf1066' }))));
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
//# sourceMappingURL=p-CHzqD5ed.js.map

//# sourceMappingURL=p-CHzqD5ed.js.map