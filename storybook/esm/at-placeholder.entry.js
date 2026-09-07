import { r as registerInstance, a as getElement, h, H as Host } from './index-CGGSFxDu.js';

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
        return (h(Host, { key: 'e48312996c03155053a8cd2db1a18f169ca8b6c2', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: 'd90acf1e3659140c34cfa01be937b3613b85bcfa', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: 'b191158d1b236f1cb1004288e4cf085c42dab1d4', name: "icon" })), h("div", { key: '36bed5b8ba4de9e48309ff675d12286f86012325', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '74a2979cbf6360dbf206744872b86ae59d7c1488', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'd3cb9bf9f3f6bcf9a81861723ece5f053c5b2aa9', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'f0a9175d4ec908efccfa35d3da2936c973eada53', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'd803d9040948c24896ae4ae2141ac78ba17876ef', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'b0150784d5425d966ad37567d73758a6ed887eba' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
