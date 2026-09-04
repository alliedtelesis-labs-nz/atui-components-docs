import { r as registerInstance, a as getElement, h, H as Host } from './index-CT99rxub.js';

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
        return (h(Host, { key: '6b85539fa21677aeca0f35780fb33e858533e8b3', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '3d12ed18a40d58282703d235f19c56015cbbd8d9', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: 'be47756abe97820d4a751a92e762ebd941c439fa', name: "icon" })), h("div", { key: '6df5aec41bbc3c5131e7343ade7bff53f448b2e5', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '905a48acda2b39a7039c384e3ebbb4c133385652', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'e558d1810432658c3bde3dc696d59c17d332ae85', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '654a20f3c6763e7ffb938248917c5b9af9c4c071', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '204aa6a09a49e7a1662359adbb543cf71ba532fa', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '3ecd6d2fc1680489fbf35d13c5c4cb2a9a5451c6' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
