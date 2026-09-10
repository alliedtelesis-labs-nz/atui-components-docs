import { r as registerInstance, a as getElement, h, H as Host } from './index-46ti_ijN.js';

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
    componentDidRender() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        if (iconEl) {
            iconEl.size = this.size;
        }
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    render() {
        return (h(Host, { key: 'e899ce721e00e5640892c372e5b1d9c13706c72e', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '1b607c01278cc059e2ecd3663c4df1baf7a6af2d', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '62d4a4033523d84e7adf7d0cc2a7fc50837b6a66', name: "icon" })), h("div", { key: 'f83b6fed72c8bd5de2c25b9d2ff1e7a0298f471b', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '2f3e46f51f3d42da5d3b6bbd0c03efeeb9ccf61a', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'be4882b2a929797504b897532748c6ec39bfde8a', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '187202ee9e232ede6a0c3570dd31c07c91970439', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'bf05e877741535b04ede57f81e3bf5eeb671afcf', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '90abc4813a06c51e9aa4ba83af518601746fe5b0' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
