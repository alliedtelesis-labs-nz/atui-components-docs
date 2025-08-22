import { p as proxyCustomElement, H, h } from './p-DzGFYGds.js';
import { d as defineCustomElement$2 } from './p-C4GMI5Ys.js';

const placeholderVariants = {
    iconSizes: {
        xs: 'text-[24px] w-24 h-24',
        sm: 'text-[48px] w-48 h-48',
        md: 'text-[64px] w-64 h-64',
        lg: 'text-[72px] w-72 h-72',
    },
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtuiPlaceholderComponent = /*@__PURE__*/ proxyCustomElement(class AtuiPlaceholderComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        /**
         * Size of the placeholder
         */
        this.size = 'md';
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (h("div", { key: '1814e838258f57fc93742db77cb59737961cdf03', class: `${this.placeholderSizeClass} flex w-full items-center gap-16 rounded-sm bg-surface-0 text-center text-med`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: '18f2c1fc3b8057120fde6c2b6adff4cf508255a3', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: 'a4f096839c19b36eb416316e6073650846e05314', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'a7fe8277a37426d3183c6a44c6a790ffb11954aa', class: "flex items-center" }, this.show_loading_spinner && (h("atui-loading", { key: '6002be19957139ded3dfc9b0f3aa5f4c672e1f59', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '10fa032b6d860cce5fac5cc3418d6091a77e4bfa', class: "text-sm font-medium text-med", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '3444c90413f5f7eda93a93d955dde6a2040b4ee6', class: "text-sm text-med", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'cb154766a21594526ecd6c02725bce7f03ef6435' }))));
    }
}, [260, "atui-placeholder", {
        "size": [1],
        "icon": [1],
        "placeholder_title": [1],
        "content": [1],
        "show_loading_spinner": [4]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-placeholder", "atui-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-placeholder":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiPlaceholderComponent);
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiPlaceholder = AtuiPlaceholderComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiPlaceholder, defineCustomElement };
//# sourceMappingURL=atui-placeholder.js.map

//# sourceMappingURL=atui-placeholder.js.map