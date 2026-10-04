'use strict';

var index = require('./index-Dzqi4iVM.js');

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
        return (index.h(index.Host, { key: 'ab4462eac34b30e6aec071d0abfbb990d6efcb7c', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, index.h("div", { key: '5beb5ab36fd1321c01ac630cd6f69bf1776711a7', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, index.h("div", { key: '405f6c0e099f8f19ce6b198220dcd3d2865af928', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '310f80cc3a7343c81e0008b36ca84bbd9a82cf5d' }, index.h("slot", { key: 'f263fad709efb445b0ea06011c5ae103eeeb51d4', name: "icon" })), this.item_prefix && (index.h("span", { key: '00965c99048c8ea7f98cc351d64d6a67795e8a34', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), index.h("span", { key: 'e4c40b6526fcd0fd8d0008495aa3fcf992487f30', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'b5c3f6420c2aa2625037e362c7efb2b2cdcc03b6', class: "flex flex-row font-normal" }, index.h("span", { key: '762155586ba006299274371748b78fffbed581be', class: "mr-4", "data-name": "title" }, this.item_title), index.h("slot", { key: '09ae7b10abfcd576db75209012763ffcdb027c7a', name: "title" })), this.subtitle && (index.h("span", { key: '31013c4118391287c2cc381b10d2e9a10dbe5c52', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '3a5c68cf79f3e1e9eefe80a2c574f139df05c076', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, index.h("slot", { key: '7391a662e5b4d7220194cf0590b6f1379bc4d948' }), this.content && (index.h("span", { key: '9e5535f68b909f48db6493411d4479ecb6c4bb6a', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
