'use strict';

var index = require('./index-COiLLAKF.js');

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
const AtListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Content of the list item placed at the right of the item.
     */
    content;
    /**
     * Size of the list item.
     */
    size = 'sm';
    /**
     * Border below the list item.
     */
    border = true;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '355fa9215b24cf8f6d46752610fa1baada8a88f9', role: "listitem", tabIndex: 0, class: "hover:bg-surface-1 flex items-center gap-3 px-4 py-3" }, index.h("div", { key: '0bbd05af70818fb062b50d3809c989a9f2165289', class: "flex flex-grow flex-col" }, index.h("div", { key: '639f92e6695db66955ec4b6266e276910bb1dc57', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: '794d83e42762f3b5ff537fb493f85bf756d1310e', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: '91764096007709b80b08bac921585b1fc2853961', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '05fe7f85e83c5d08ffc06d9148f167efe8feb941', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'd7c8d7bdb1c6a693b5b009329f3ed0fd3bdc873d', class: "flex flex-row font-normal" }, index.h("span", { key: '4b169e90204236a84399fc37d8cc7400e0068b81', class: "mr-4" }, this.item_title), index.h("slot", { key: '1d3a201c4088f5577c3970b3b554b21b2872a6d1', name: "title" })), this.subtitle && (index.h("span", { key: 'e0a82cde6459ed9af396c8ed807af8a1968d51e2', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '683e23d22876d1baf70a334d6f5719c54891ac3f', class: "flex flex-wrap items-end justify-end gap-8" }, index.h("slot", { key: 'ab45f5daadfb749dd80e42af649ecb1580813365' }), this.content && (index.h("span", { key: '16beb711134cc312dedab80e990f4fd7af48c068', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
//# sourceMappingURL=at-list-item.entry.cjs.js.map
