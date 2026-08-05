import { r as registerInstance, a as getElement, h, H as Host } from './index-DNWYfDmW.js';

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
        return (h(Host, { key: '8c68e2beea5b7e54d4a5c686f8e2fd592700904d', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: 'f8fe8a7da7d9217b8d211b1a07e9a9ca6e3a94dd', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: 'c7dd64f0cc3ca66154bd10576738904c35dd8770', name: "icon" })), h("div", { key: 'c0fb81f87fc8d68575751c7cfd5a5e0b339002f7', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '87116e5b7888d9ab9852d197e3b2637a0a47fcae', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'c43a8d863a9d7b2203faca5b348a331204d13e16', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '324fa0afc9b31e147d802edf16f5a825c7685875', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '84e56e279115809df342acfbd2012e41c84abdac', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'd06794511673ee405a756c20b3cf3ece4d9e9a6c' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
