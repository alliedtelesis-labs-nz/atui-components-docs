'use strict';

var index = require('./index-zRWHCAJe.js');

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
        return (index.h(index.Host, { key: 'e43f08b3a6444caa0657e70e1743fd36ac4663d1', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: '69439ff06b15a6d875cdf0e287eef8ac40a029bd', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: '5892da47a967d208aac87943850734ff1e319d8f', name: "icon" })), index.h("div", { key: '5a88109773e13160667de5be36d18c38a323090a', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'dd1b900dc4f24893695f3045e497bddabf713427', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '158b3b114f1b8d7a81fa5e43d90a2ed8e23aa258', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '1d8f19b508a17ef1d65744c70ae51ef736e47755', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'a1169018e3292e1bdac3e5113f6297d70bfbdc14', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '16212015286d4af51ecdd58eabeda130c974ae0d', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '47337129b10ee9c863d66a070a389a64fcfb4201', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '00806c19b012cf7a98cb5e7cbcce474590b7e4aa', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'bad30617f5fc2323473a1304a0fbc9224f317087', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '78c5e678624470db6f09a811bf21778290e0a24f', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: 'ccf5e36430f944990ee9e935978823f8008ce544' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
