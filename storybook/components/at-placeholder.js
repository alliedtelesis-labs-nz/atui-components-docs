import { p as proxyCustomElement, H, h } from './p-89eupKrN.js';
import { d as defineCustomElement$2 } from './p-bn76tgB4.js';

const placeholderVariants = {
    iconSizes: {
        xs: '!text-[24px] w-24 h-24',
        sm: '!text-[48px] w-48 h-48',
        md: '!text-[64px] w-64 h-64',
        lg: '!text-[72px] w-72 h-72',
    },
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtPlaceholderComponent = /*@__PURE__*/ proxyCustomElement(class AtPlaceholderComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    /**
     * Size of the placeholder
     */
    size = 'md';
    /**
     * Material icon to be displayed in the center of the placeholder
     */
    icon;
    /**
     * Title to be displayed below the icon
     */
    placeholder_title;
    /**
     * Content to be displayed below the title
     */
    content;
    /**
     * Will show a loading spinner when set
     */
    show_loading_spinner;
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (h("div", { key: 'dda712223f09d4ce1451428d74788b67c07f70f3', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: '6544ed3fd83a67468c24bb2c7bdeeb0706b4aee7', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: 'f3a5fe9d2ed8cfc049a16ddbe0cb725cf3a96e9d', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '9b8df30bbdf456d5a4b51918139d5bfde51398ea', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'dc3c3e4e5a92858a82ac6cf730d634a3688b413c', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'a400dffcdde207cd0de1208eb9e43e5ea6ec287a', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '28977e483d8d8519af8b5a9f43227ddb02bc6b88', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'b04c602ec4cc3f46ba69b30f285051fa8b1daf2a' }))));
    }
}, [260, "at-placeholder", {
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
    const components = ["at-placeholder", "at-loading"];
    components.forEach(tagName => { switch (tagName) {
        case "at-placeholder":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtPlaceholderComponent);
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtPlaceholder = AtPlaceholderComponent;
const defineCustomElement = defineCustomElement$1;

export { AtPlaceholder, defineCustomElement };
//# sourceMappingURL=at-placeholder.js.map

//# sourceMappingURL=at-placeholder.js.map