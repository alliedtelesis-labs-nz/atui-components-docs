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
        return (index.h(index.Host, { key: '67c745e9559b3079d8a74bdc81b05ed649089d80', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: 'ca25edb8d7dbff8ea99c4f410af7cae2c9e42041', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: '75b37069ac1065c608520dfea5a4f7a4753685ab', name: "icon" })), index.h("div", { key: 'd97d728e35302c5c8b223b756ca8041f1c68a9b8', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'de120d49e8a7bf47e4aa34605c72fa59f6388c11', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '4bcc2a6ebdafa5667bb3fab8d0186a32224d8b87', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '60659caf4b133a0f85e553121490333b572f71c3', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'de9ba693055a3082ffd1ee9b054802e1d88dab0c', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '20fbefbe93e42e530f488c79f66c5f6b0ba68efa', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'dfbdf55c5c58d76dec865242542e5e09ee68d1d6', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '64f1c6490f6fcc0b1c4ce818a953c6114be60886', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '8667942cb2eeeb5a5645dc282877a72e3d355b0d', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '1fff56afa3dea7aca75051aba005bd2e3934e98a', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '48237830db2a4b2f5f8803d0c5188eb2220c6e09' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
