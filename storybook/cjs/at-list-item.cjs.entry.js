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
        return (index.h(index.Host, { key: '235a644afdca3a385cbfaa580f9c2f348c577b59', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: 'c9c7a0d7474689021d10e8a7a0072c40e1e560ca', class: "flex flex-grow flex-col" }, index.h("div", { key: 'e63c77053881df6eebf2b3e80ca72da17790e63c', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '71719eda0cc68b19a099a315a80db92f265f3bbb', class: "fill-light" }, index.h("slot", { key: 'f401d1dbb2ea674edf4054bf40d1854358cb72bf', name: "icon" })), this.item_prefix && (index.h("span", { key: '3df12789d33e4ce00cc144e5354a08c970216c58', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '13e6689404421d9d3b822779f33b355268ef344e', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '678bf97dcab36aaf202653a9dc33e0b6d3e677bf', class: "flex flex-row font-normal" }, index.h("span", { key: '249e9af6fd60d588bab86eb1e27adb4e9540910c', class: "mr-4" }, this.item_title), index.h("slot", { key: '7d6ebb77bb856b1ad5a52a9b3095dbd58f42e156', name: "title" })), this.subtitle && (index.h("span", { key: 'b0e3d4baf71ccce4e374338e821a6da249d8b350', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '910697dea3fde30502c8eefef33ff4be9d3e7841', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: 'b952b213efe51d1371dd9d6daacf3d6986b4df7d' }), this.content && (index.h("span", { key: '562caff05670c57dd8d6367f6addcff76760bf07', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
