'use strict';

var index = require('./index-DSZ-ppzm.js');

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
const AtuiPlaceholderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Size of the placeholder
         */
        this.size = 'md';
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (index.h("div", { key: '2bfb0fb5b09355a20ec7eed7d86846cbd0ea645c', class: `${this.placeholderSizeClass} flex w-full items-center gap-16 rounded-sm bg-surface-0 text-center text-med`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (index.h("span", { key: 'e98a8a3440e224ee8c9179ce2dc56d62005d7013', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), index.h("div", { key: 'f9f10e4bc3b17f972c5dc83ed066dd352b2e5f73', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '8417a947534a3e16f5aac822502805bb7379326e', class: "flex items-center" }, this.show_loading_spinner && (index.h("atui-loading", { key: '41bc4ae74ee860e81e1a412096753170d5794624', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: 'ebb9412088b202f3d8f705c8742d6288f533b668', class: "text-sm font-medium text-med", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '1bb3ca63533be2f3c2f3e71b3a7889b3ccfb66d6', class: "text-sm text-med", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '2d017d71e20484261455c8f2a2a1fd641cda154e' }))));
    }
};

exports.atui_placeholder = AtuiPlaceholderComponent;
//# sourceMappingURL=atui-placeholder.entry.cjs.js.map

//# sourceMappingURL=atui-placeholder.cjs.entry.js.map