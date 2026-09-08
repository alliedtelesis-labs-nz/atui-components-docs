'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h(index.Host, { key: '1cb70da3959b011dcf220def4be38210d5b87416', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: 'd4966f7704d3e23141936299e95306460948e23f', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: '48bf807f5d46cbfdb5d447e4b168171a697fa915', name: "icon" })), index.h("div", { key: 'dd0cd099eb3f14a5f797e881625e564106843093', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: '55d089b5fe06fdccf7195bc28621ce6343649d42', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'e03156cb74c01451cbfa0f5ccccb056de7105c2a', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: 'e5d4520797c0046bac3c4a5bd191ee48382d4e3b', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'b9e54881f4877e7e135de08f85e11e7206c80c5b', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'c3257a4ea8a64e46c3748bf4f1c546113f3d377d', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'b6c707d1a4858ea83a4fb67c466a2e0cfd8db1cf', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: 'ad0584c2c1031af40e77df89bde664e06085de15', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'd09f70ca4f76b2e3606b9c56f287c43006656f21', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '834f6ba840f616e40373dd24a87d0a10c7478683', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '7ca97059ee8aad83d37918a1aa07a21da2aac832' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
