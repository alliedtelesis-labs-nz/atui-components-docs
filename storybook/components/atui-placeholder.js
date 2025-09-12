import { p as proxyCustomElement, H, h } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$2 } from './p-DBWEgk0R.js';

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
        return (h("div", { key: '1814e838258f57fc93742db77cb59737961cdf03', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: 'dcd1e7bf3196c845d57e7df1e6fa6509f6181613', class: `material-icons text-slate-300 !${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: '5db06e6f9efb43175a4e21ce1adafb37e22b1a0f', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'd11313dacfd5f15d7284a11fa054694b3e479e6a', class: "flex items-center" }, this.show_loading_spinner && (h("atui-loading", { key: 'd3657411b94676ee998a9a474f8a1fd900c8e8b5', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '7a705b3cc74375117ee6c30e90e86eb9488045b4', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'ad918f7dba56e98ff1237cac88c196369749b87b', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '1589a0c84270d346134456446e25a063f7326579' }))));
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