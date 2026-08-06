import { r as registerInstance, a as getElement, h, H as Host } from './index-ChWFprTL.js';

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
        return (h(Host, { key: '84e682d9f508ca0498961515abf44e890edaa55b', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '84aefab3b469b6b82620fd0cc0ea76c8fd886a39', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '2c95270c18432c1737f72e1599ea9040860fc5b1', name: "icon" })), h("div", { key: '64de132b3c1edd7eb039950f80501cbe5f294549', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'cfb0cb07834a46445f8d659ce0f21c13bf2742fa', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '5cf20217db6ab68ea6898346eec600c1bde3c4b3', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'd993472a2bc55c4f7650b08c4eeeed2234039f7b', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '2cc3b71bbdce0f807c3e302f59f9df9bfb32fa63', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'f7cc38adb8c4eab030ada699c8a14f17d2659d31' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
