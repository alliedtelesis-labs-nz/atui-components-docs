'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '371e3ec23b702317845d87b5d3e7d7cc56d35e1c', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: 'e2c455880776f8944ff6bfc2f51117fedae393e4', class: "flex flex-grow flex-col" }, index.h("div", { key: 'dab65e221b9607e52fa705fad5e921cf86e97c2d', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '3836f73dd121e82f43bde4b80b02ac5688197d4f', class: "fill-light" }, index.h("slot", { key: '7ba28b3cebf6f217d88d6747f06eb1247dcd1570', name: "icon" })), this.item_prefix && (index.h("span", { key: '180284674f6a94fa322dd6688d784c33647adde4', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '5c8acf7f470c8cd57af2b217114e448ae2d710bc', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '0561cce2ca6daa9e18cee3cd931192e1aaee628f', class: "flex flex-row font-normal" }, index.h("span", { key: 'cd408fa358c485d5d23105b612da349da1734af9', class: "mr-4" }, this.item_title), index.h("slot", { key: '77ad767b15a146d4164f5c30adbed9cda1018577', name: "title" })), this.subtitle && (index.h("span", { key: '7fa5f4f00881f9cd3fb09196825304e33d110c2a', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'c0bfd81ee957639abcdffe34f6c4be489f03753a', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '9b7bc6a27e0fc1f29587859f5d1a190c7bf09518' }), this.content && (index.h("span", { key: '6fb104bc73d0afe2f21697aa90c5bfe307e445e5', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
