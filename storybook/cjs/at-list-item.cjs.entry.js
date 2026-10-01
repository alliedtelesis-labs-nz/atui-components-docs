'use strict';

var index = require('./index-B73N6Yu9.js');

// Vertical padding only — the container (e.g. `at-card`, which already applies
// 16px of content padding) owns the horizontal inset, so rows sit flush with the
// container's title and other content instead of being double-indented.
const listItemVariants = {
    xs: 'min-h-16 text-sm py-4',
    sm: 'min-h-[32px] text-sm py-4',
    md: 'min-h-[40px] text-body py-4',
    lg: 'min-h-[48px] text-body py-4',
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
        return (index.h(index.Host, { key: 'be21cc8742e771282120826ba6c2fc6bd0dad3fc', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, index.h("div", { key: '8aa1c8d04d796a8dc0b7c0ad442c2bf8e5975546', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, index.h("div", { key: 'bb9c88b0a12dd29bf672f382e0ae7c9dce8015bd', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '9781dc60b856e8d946f83b524d211838a14515de' }, index.h("slot", { key: 'c7f7c66652addb05d16d994c8196ca6798a42d1f', name: "icon" })), this.item_prefix && (index.h("span", { key: '66b4d2112379a21432bc097a5929b7cc7db2c6d3', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), index.h("span", { key: 'd29ef3afe51d18f6492251987f8c3f57f9fe064f', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'eaa5eef6d518020f92c5b723bccd3ae0c0876dc6', class: "flex flex-row font-normal" }, index.h("span", { key: '9c16797e19cef226181501f3fd7656dee81f91ab', class: "mr-4", "data-name": "title" }, this.item_title), index.h("slot", { key: '5fb8270720f0078442a45b3d7f558a7479589cf2', name: "title" })), this.subtitle && (index.h("span", { key: '43136e38bcf75efbbffddc4c7da73f609e62185c', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'd3885f3d9b30b1ce8094207d2873e38cb9aff086', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, index.h("slot", { key: '76daa075ea498c756c57eaebcfc1bd2ebec535c7' }), this.content && (index.h("span", { key: 'f960c2a00db9bb63c7136720df2626f4904bc98b', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
