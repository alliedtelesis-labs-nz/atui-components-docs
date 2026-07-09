import { r as registerInstance, a as getElement, h, H as Host } from './index-8e2OpwTu.js';

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
        return (h(Host, { key: '54871d42dcd8a8d684b155c69249f12676ad5d88', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: 'abef0ee51fc22c76de403ca70019d1b1df867176', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: 'dee62021a18748f1a6ad7b4fb78cafd35ab68ebd', name: "icon" })), h("div", { key: '804c26015f1880e6d0467ae851586582b69f54c8', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '7d2c377479f1910cdbb5ab094ad5ba9b3f44e3ff', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '1796487c69748881153ab38dbe5e1f2342d4c881', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '868dd178f9e578564f7a5396e3404758d018e361', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'bb3244dbc7846214f2498e797dd30f8aedc571b0', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '66201d2618e5901e7a4997d70b61ad61be903bd9' }))));
    }
};

export { AtPlaceholderComponent as at_placeholder };
