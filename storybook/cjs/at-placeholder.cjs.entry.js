'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '8fa083bc4e5adb0c850abd2589a692b56bd69146', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: '62e6456b30ede8b4202ac9599300313847be453b', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '0ab9094a56e2c8ea2480a29d1647bc1532a28d38', name: "icon" })), index.h("div", { key: '361c202469bed8eb04d4bd7adddc752cf0416d9e', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '42436e96a42287d61c04ce799e1a899febd6c05d', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: 'bfa2c8b4adbfb1408060014dd68358c9e3ffe312', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '3095f82831b1d36f4220554337b6bd874123e23b', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: 'bac367eb25a37ff8add96797d9506871315c6613', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '376af8e0c29b6a9e7e6a9c2e3bb77523ccc45f42' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
