'use strict';

var index = require('./index-Ku8sY16C.js');

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
        return (index.h(index.Host, { key: '0922d6d74c6b9d0fb25c23c93999813d5b953d1f', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: 'f377dabd2b7ac1bfb1d0b1460e770d6a95c82fc1', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '6a247dee546b376c7e1768ec57c4b6d617972160', name: "icon" })), index.h("div", { key: '4c63141beecd8ae6a583b98e0d721468fd5656cb', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '2779b9fe73af6ac81ab44724634a2a29a6c6b774', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '458825e177733ede1e9705e999f873ca17d58d66', class: "relative mr-8", size: "sm", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '7fa9e56169231cc30ac1c6385a065f3a2970e75b', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: 'fedce1a2b850fecafd0d0d86c532b17dccf6004a', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: 'bf0fbdef1e178e55535b2ccf01611a26d0a82b92' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
