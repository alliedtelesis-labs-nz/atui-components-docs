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
        return (h("div", { key: '83a64d159f6ba77d78630f57602568560a8d88a9', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: 'ed1696815c6189ecc829ad8cec35f03a4d0e6649', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: '67acfc8cb3d1b5e4b2c7a577927b170822123971', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '5c182a092866e066847c60bf8cfc5ca309a25f37', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '4632603cb8777b105a2052138fc524c8d6aef495', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '722d15f2b8c4034389703646c006acd02c9b5fff', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '3589181fa5509db241f3f1489e31cb8d146e26c8', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'f0a43685d96d74380060a00c977c735eac085f4a' }))));
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