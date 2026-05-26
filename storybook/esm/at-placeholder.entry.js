import { r as registerInstance, g as getElement, h } from './index-BAAX2Der.js';

const placeholderVariants = {
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtPlaceholderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Size of the placeholder
     */
    size = 'md';
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
    get el() { return getElement(this); }
    componentDidLoad() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        if (iconEl) {
            iconEl.size = this.size;
        }
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    render() {
        return (h("div", { key: 'd9bc537ff2286309157b7a3266d0c2736bf9da41', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: 'a930f5094059fe5b199e748ac81d176558ee71c4', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '72f5bebd332ff407582de240dd3915c384baa470', name: "icon" })), h("div", { key: '1feaab76bf01494329fb1d44cb93b647842c4f33', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '8c5a0d887a7b2940b662f032e1c2156ce3552e3e', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '54b9e221ca3f7107eee84ed8551610f8042e26a5', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'c3c3944a9b071a25cf5ea487620f636baa419d2a', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '723b0f2566dd271e2367f34a2d41231c8d81b878', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '52deab5309c358cee60ca911c01a33ba416bf78b' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
