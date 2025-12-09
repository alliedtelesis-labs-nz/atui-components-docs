'use strict';

var index = require('./index-COiLLAKF.js');

const placeholderVariants = {
    iconSizes: {
        xs: '!text-[24px] w-24 h-24',
        sm: '!text-[48px] w-48 h-48',
        md: '!text-[64px] w-64 h-64',
        lg: '!text-[72px] w-72 h-72',
    },
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
     * Material icon to be displayed in the center of the placeholder
     */
    icon;
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
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (index.h("div", { key: '1814e838258f57fc93742db77cb59737961cdf03', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (index.h("span", { key: '18f2c1fc3b8057120fde6c2b6adff4cf508255a3', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), index.h("div", { key: 'a4f096839c19b36eb416316e6073650846e05314', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: 'a7fe8277a37426d3183c6a44c6a790ffb11954aa', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '3ae51b11b5d34ed75ed148fba538ae6539b497b9', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '7df9692242180164cb7a608faa35117c7128852c', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: 'de0a4533e7755c4dfee61c8ba2ba41c531d71cb7', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '78684e4cc2f82f8369fedb3aa0459fd3f1c867cc' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
//# sourceMappingURL=at-placeholder.entry.cjs.js.map
