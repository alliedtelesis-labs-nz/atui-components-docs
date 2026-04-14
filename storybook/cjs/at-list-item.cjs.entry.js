'use strict';

var index = require('./index-BRms7T38.js');

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
     * Applied styling for hover background color and cursor.
     */
    selectable = false;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '5a42b03da1f6696e05b4f652f613b1900b7cba5f', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-light flex items-center gap-3 border-b` }, index.h("div", { key: '9101e59099478618a7fa51006e79ec614315ad09', class: "flex flex-grow flex-col" }, index.h("div", { key: 'e8d0a79a07f179698ff2dd96ab21f10a59741a75', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: 'dc767b8e824f9831e8c8a6ab9e8be780f4a4fb11', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: '07b02dc28a0ff630b3f5400c148749f8e06ece5a', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '47fc85f1a665dba5a3cd81c209e05003eec666de', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '471d97f7ca24d803d917b2e93a4caeb4bd23b8e1', class: "flex flex-row font-normal" }, index.h("span", { key: '0c88ba6c2be43d6d2d0bebadbbd3cc43d385f11a', class: "mr-4" }, this.item_title), index.h("slot", { key: '760e98ddd38df922dcc0848deddb6c0ccbe09624', name: "title" })), this.subtitle && (index.h("span", { key: 'b129d1abb92b90a277b944210f7679ef8139d33f', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'dc5c66379b06965ed771b11713084cec3e371214', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '53ced64ad76a6a52808e58293e56e9203e8d6eac' }), this.content && (index.h("span", { key: 'd506e00a7b1720c6a3ae35b1889f1f2145b3421b', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
