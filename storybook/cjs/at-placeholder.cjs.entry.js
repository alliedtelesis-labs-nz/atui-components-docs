'use strict';

var index = require('./index-DK-3iCCu.js');

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
        return (index.h(index.Host, { key: '90ec24520f4708852813443987014260a65728a2', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: 'f1dfed91b1bb69e6f6970687482f38758a613636', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '399dd6d5270f1f014e59479d406ae0e4ddf8195d', name: "icon" })), index.h("div", { key: '994815af07af2c22e40f12c799f12e90186594d9', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '6f6d0193775b10bd08284cc087a907b33bdcebc8', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '226546d41258eeba2beda3b48a8d9eb1e921a4a0', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: 'da0a064d6178ee9dc8fd140cebc2c79668adf1d5', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: 'd4d381be2823fa9f84663f3d683f7504cae0aa8c', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '85b0ccc414e7c3855c91c7aa79d9f85432218af9' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
