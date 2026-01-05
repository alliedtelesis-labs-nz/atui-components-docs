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
        return (index.h("div", { key: '4190dd1d4d933109f11111d8acca77fd6a9a69a7', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (index.h("span", { key: '713f1d92f0158dfc37c5a822004f26d74ea2d10c', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), index.h("div", { key: 'd500e1179103e8afd621e16d0241136706548e2c', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: 'd1d2e4163b26cddab1a86a6225b89ede8c636993', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '9e0d5657fe4043331d647e8c4740c106568fc19b', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '2bdad8dcd1f8bb2c0a38a6e6385e6d17248a2a22', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '495f4167aa3022cafaea8e90f4e1224aaf8e479f', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: 'dfc957c6b443c1f6362958a4781e7b48e7b80c5a' }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
//# sourceMappingURL=at-placeholder.entry.cjs.js.map
