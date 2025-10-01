import { p as proxyCustomElement, H, h } from './p-_-xuBOrs.js';
import { d as defineCustomElement$2 } from './p-DnZAJRYA.js';

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
        return (h("div", { key: '6fb237aafa810e2c3d201518d447fa26066168c1', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: '109fd8f54678c8e85639c14b9adc0c7b30996abc', class: `material-icons text-slate-300 !${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: 'dfb28409614ded88849a3f7cd4fbe7fae397bd40', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '7b60f79d58b597ab65eac152852f6b5f54c14c18', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'e6719104cfcbefe4ed7a9ce069067bc16644483e', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '08d2b21891866b8d9bdbc8fee9caf6567185f1f6', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'ae430e9d0287e5e0cf312f892263eb88bb373738', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '5ec1bc2a3ac0a50d12d73bf65f8d348614a01986' }))));
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