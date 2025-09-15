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
const AtTab = /*@__PURE__*/ proxyCustomElement(class AtTab extends H {
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
        return (h(Host, { key: '8b23a39aadf7647b9c53ec5df3d1d15cd93affc3', role: "tab", "aria-selected": this.is_active, "data-active": this.is_active ? 'true' : 'false', onKeyDown: (event) => this.handleKeyDown(event), "data-name": `tab-${this.tab_id}` }, h("a", { key: '1cfe93744a35a96f97f0b7d1ea4bf6308d431d6c', id: `tab-${this.tab_id}`, tabindex: "0", class: classname, ref: (el) => (this.tabEl = el) }, this.tab_title, h("slot", { key: '2ba439225f03786d6fc91b46b2a450bc319afa34' }))));
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
//# sourceMappingURL=p-BWrOrXMj.js.map

//# sourceMappingURL=p-BWrOrXMj.js.map