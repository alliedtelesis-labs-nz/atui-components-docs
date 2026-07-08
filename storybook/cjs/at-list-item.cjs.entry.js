'use strict';

var index = require('./index-BkghNVG3.js');

const listItemVariants = {
    xs: 'min-h-16 text-sm p-4',
    sm: 'min-h-[32px] text-sm p-4',
    md: 'min-h-[40px] text-body p-4',
    lg: 'min-h-[48px] text-body p-4',
};
const AtListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
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
     * Applied styling for hover background color and cursor.
     */
    selectable = false;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '0a07fdb53aebdf0484a0c0a2992f047177e990d2', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: '6637b6b5fe29118727aa67d63d9a6eec3b2ac622', class: "flex flex-grow flex-col" }, index.h("div", { key: 'e7c217f9c7500b2f51ed87df45388838a1e1ac82', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '2d94af05e0cdee31fab430cda1d61dc756a6d562', class: "fill-light" }, index.h("slot", { key: '2bebd51a8ddb00335f60e8c6464e62195bc7a8df', name: "icon" })), this.item_prefix && (index.h("span", { key: '6af928ec7ef8761d92916cab622f6b68c515a886', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '58144d17274af896398d45dc29e6c5e60737153b', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '5ce8fcb382dccca35b7409d6d974d227fef7bc28', class: "flex flex-row font-normal" }, index.h("span", { key: '9f737e3b72599724062701bbd8910a1b5dff2516', class: "mr-4" }, this.item_title), index.h("slot", { key: '9e9e86f5d32982feb40818b9b4bc2afab256efa7', name: "title" })), this.subtitle && (index.h("span", { key: 'a7513118231fe4334a325269de8040a5c8051c19', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'bcdc9738f15d79eb0872324b3adaed01b1cb873f', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '49b405c367618c96112fcef46f4b68b2d6c4e1e5' }), this.content && (index.h("span", { key: '86b27c105a503fd2a0bacf7f22cc87318242f7bd', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
