'use strict';

var index = require('./index-l94cJki_.js');

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
        return (index.h(index.Host, { key: 'e2cb22bd63e3aa642a2a403be54c4d726211f93d', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: 'a70772e787c8c639913a4a5f4efada93e269327c', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '57e7498360f7a245aae7e999aa4d9d8eabe512c5', name: "icon" })), index.h("div", { key: 'b73f873df9baedd8cb1286ec51126a625694a152', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '5c21bbef8bceb41a7ce4bdf2e6ac3db74d272d6d', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: 'e4ff8f1289fbd9f41af946229602bab1b342a27b', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '449db0b26226e3cb8d2cb60f6a16f7ccd9e9d854', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '748355445694b2cfc3f6903bd02d9d9ed985165b', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '0102ba45b7b62f0c9836646969c14bbbb7b3e69a' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
