'use strict';

var index = require('./index--r5sCsiV.js');

const AtListSelectorItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Id of the list item
     */
    item_id;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Border below the list item.
     */
    has_border = false;
    /**
     * Visual indication of the selected item.
     */
    is_selected;
    render() {
        return (index.h(index.Host, { key: '89bdcae124762b6e44bdff74d5752643cde726ce', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: 'e23482f27fe36524f6a39419975dd43472001e32', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: '5113fdf7521d9948fff721f6151f7c0125d1c790', name: "icon" })), index.h("div", { key: 'ace7ab7744efa0e3b161c95d789cbd6f3e0958d4', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'a3cba46a887ad9919397514e3c2f976d9a579f55', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'ce2015224cfeb9d739cc5e6ffd01e191ff62afc2', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '9d41145649b7504376e3238c6f56301691a367d4', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '18b82f5e8a5e0991027af23030842365df33cbeb', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '5b894ddbb7f1a511a527c907581a9c5046286755', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'a8e36bca03b34daad48ce425f8c0c6b80d8115d3', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '75234cca53d6b4899065d7f4f4c5d6129021d670', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'db40d94d326896ee5369ea0479a2007480c281f9', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '1a49d68f591451e34705a3d260035e0d21f29029', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: 'f164c144f0ee92d77e6c808831d3a7a6d7c4b3fd' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
