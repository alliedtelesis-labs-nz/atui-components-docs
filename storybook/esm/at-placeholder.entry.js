import { r as registerInstance, a as getElement, h, H as Host } from './index-BatHonhZ.js';

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
        return (h(Host, { key: '8d7feba73a4ab660866c507fb19aa0eee1cd8e61', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: 'c5f10d89d7f46be69033d58b4b9b5318c6631de5', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '88dc99cd13c63e73b7b1cf960d40ef2f4d46140a', name: "icon" })), h("div", { key: 'a135c8c3bc6af83c94e4c2192540af00616d0c04', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '77e5d3b546ccc3e144d4f01afe75041ff8f23579', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '64bbc6b2013ba46536ff54549e32708f05275929', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'c30c001275f8f214f7ebc41dcaf481e2ee76e549', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'af43fa0936ffa78e1fc551f4087d4e7b8c80414b', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '157b38f2293e532f4f15127653d5306f86b6a080' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
