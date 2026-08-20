'use strict';

var index = require('./index-B7bW4GPk.js');

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
        return (index.h(index.Host, { key: '17fb9e33d05fbe25309266dd69f9d5f548b5e99b', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: 'e8ed4d84b42beacfe8c684f4e212dcfcd418ce90', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '91e523ac0551e4183158184014089e7b9e9dc5a8', name: "icon" })), index.h("div", { key: '827803e5c8372d8d6222357897ff3adc051a6fc9', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '86750e862f628d3f5d0144ce4c50688ff9ac337f', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: 'c7e4daac9cbc4552b355f363fb3d1d24209f1231', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: 'd26b4d912565e0d32c1420471f6bcfb2a18c1698', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '0f856f69deb52f609b025129bf5f9bc679972024', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '67281667c2fc8b4402bdb2ba32ef98024d46d9cf' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
