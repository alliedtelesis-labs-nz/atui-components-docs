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
        return (h("div", { key: '2bfb0fb5b09355a20ec7eed7d86846cbd0ea645c', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: 'e98a8a3440e224ee8c9179ce2dc56d62005d7013', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: 'f9f10e4bc3b17f972c5dc83ed066dd352b2e5f73', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '8417a947534a3e16f5aac822502805bb7379326e', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '52bcec3fcbe86928ae0300f39b0dd2e0ffc54135', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'd3a663d156a19ecd5afad54d9b88df0b1ff38059', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '30da17e9dc32e36d487d262fd533f1e82f15e29a', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'd7dead72f71f32bfc5d43e8372bbd8c6bbf3d8c0' }))));
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