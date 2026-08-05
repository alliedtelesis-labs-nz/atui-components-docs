import { r as registerInstance, a as getElement, h, H as Host } from './index-DVWT6VvQ.js';

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
        return (h(Host, { key: '041376ff6f0169f896176f9d31f4ac33bec74a33', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '8407dbb40094105748301137e815576bd42d5418', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: 'ddb620f9c121932c1853effab3cfc3cbdcab8864', name: "icon" })), h("div", { key: '59ae8149c37b3fcc0859f6e22846480313b57efd', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '8c4df200fe0e79719ca403a787b34072898857f3', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'dcb3bc17484b60ff11b35636a3a0b3df10bd5b3d', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '4a8ec119871b1879e481f7ccf935265bf69bffcb', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '1f9253252b6f699d6447f97a55bf4024c9361317', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '8c0101c8355862abd88613e1a1c3789e212639d3' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
