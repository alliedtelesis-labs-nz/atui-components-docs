import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: 'ee6aa5cafef5f3375ec70e02187bd2f61e9d61d5', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '4b4d77a41cc1e5b13c67cbb9be986781029de642', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '95a65499549857fe5f8ef96afad58badac453bf2', name: "icon" })), h("div", { key: '4da9a7e8a326dfd81d6133f38ff13477387a0708', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'd4786f394ba46fb37b5b4a9f5ff83736659dbf9a', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '409c2f1c9bbcaf68eae8c2b884d63e1d9249c68e', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '822bf212c1d5f55b31ad84355873509c9147a0bd', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '483f6bb2e870aafaef00816b144f32110e2c825c', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '7bc5f91ce98e86c70bd4881aeddab85f9d6d0dde' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
