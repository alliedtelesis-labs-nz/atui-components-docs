import { p as proxyCustomElement, H, h } from './p-kcU6cSzl.js';
import { d as defineCustomElement$2 } from './p-CHkT-iof.js';

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
        return (h("div", { key: 'fde927f3957f477f29ea541e7dfbdcd7674b5a8e', class: `${this.placeholderSizeClass} flex w-full items-center gap-16 rounded-sm bg-surface-0 text-center text-med`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: '2f33c961ec9a55b3492efaa4165ac9ead96fdf04', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: '7c44722df263837bbf49c42a91a0c9fbbe58249c', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '656062164fc3c6b011c6e54cd7b58f5a33aa6b51', class: "flex items-center" }, this.show_loading_spinner && (h("atui-loading", { key: '84cd99304f6f13b3cd5040de46fc1142fd40ff46', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '75e328878fed4c67f8dff852feb9bec5d9e914ce', class: "text-sm font-medium text-med", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '214cd2ca29c999f108330b6e7d4e149105865f00', class: "text-sm text-med", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'c30e11b9f5f12f110b2386bf003f8a7a530e4ba2' }))));
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