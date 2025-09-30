import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';
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
        return (h(Host, { key: 'fb79d712db848a9c94e1bf640c7146cdcc8896fe', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: 'f5c0b354ed230579ebe4283c3e4106fcaca05bd5', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: '5c32bfeb728736295f4fb144426f0f494c90f773' }))));
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
//# sourceMappingURL=p-DkmnXZ6N.js.map

//# sourceMappingURL=p-DkmnXZ6N.js.map