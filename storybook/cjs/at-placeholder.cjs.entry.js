'use strict';

var index = require('./index-COiLLAKF.js');

const placeholderVariants = {
    iconSizes: {
        xs: 'text-[24px] w-24 h-24',
        sm: 'text-[48px] w-48 h-48',
        md: 'text-[64px] w-64 h-64',
        lg: 'text-[72px] w-72 h-72',
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
        return (index.h("div", { key: '5253361dc572bb2cc9f3c4c4f6d4680b1450439c', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (index.h("span", { key: '1081e6b3c2c0a1c30f20a843713576716d14e654', class: `material-icons text-slate-300 !${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), index.h("div", { key: '592395f255e4d2b34c5bf39f6b85cc9ca358766d', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: 'b528571a9c1ed2b22e6f820b7bb8a395a5e7176b', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: 'd023d2d801933e9726d52b137afdcd88e7b7adc6', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '1669b110907c996fbd432c56d82dccf8f4ff8366', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '563c755113b4739591a42a84f1254b94e30763fc', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '25dfc291f72b297d56bebeb3752ab11cc41b77f2' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
//# sourceMappingURL=at-placeholder.entry.cjs.js.map
