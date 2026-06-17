'use strict';

var index = require('./index-D1oh76XY.js');

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
        index.registerInstance(this, hostRef);
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
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '8811271eab709f258ba4be9a7a033990596f8b62', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: '3904152cabaf732ed7588e20f4774a7ccd2b659a', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '89600be47ac3678989d1561e4ace0b7089a3f250', name: "icon" })), index.h("div", { key: 'c033b5e23e4c36d5cabeb89f37b2b00a321041b9', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: 'e6ad4b3bbd064ccda0e5e4b86bb6c7eb3833698e', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '4f8d7317bc315de26b66a16ef569cd2a6e24ec8d', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: 'bc356fae2f9fe2695996a921e66b16672d795da8', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: 'e48eb8cc7d3371a5dc32dcb94d1f2628378f8606', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '4eb2a25c9568a7b0c464d52acc032478d6d4f8ff' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
