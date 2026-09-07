'use strict';

var index = require('./index-ByfMXhOa.js');

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
        return (index.h(index.Host, { key: '91d8b52f4fa136202b1c2eb3905f1392b961b05e', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: '624137a7d61ffd7574e58cfe19c3b68a615a05ad', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: '33a39579113c119c214381f10ce26018d4a64db7', name: "icon" })), index.h("div", { key: '9cb1ced62ea3337c368491d09f2d05bdcb6d5f13', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'c5eed9c4111186c3f9e192fc264ef119ebadb52c', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '0f0afc45fb9c0565ba523a8fdadcb5165f9d9024', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '5368e01b33605bf7046da9d5fb347de0dc832d93', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'c56ecc6f266c4139587ab45fbed3e25bca8638e2', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'db525cd485f4f9a4196da05a43e8b8a39ef4c454', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'e7461819afce5bb1cb9d683517db4105fdcc1fbe', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '8385f3f18b929bbed1946e82a6af345acf3b4535', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'f5650cd952bc57db08b26ed09ee00af6d2c4bf76', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '097bb1907c49949f142c6b64543b8391584428e4', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '02fbb3b0b480941e4403b92503ef77f3ad0541d6' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
