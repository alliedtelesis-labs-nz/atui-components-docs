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
        return (index.h(index.Host, { key: 'b32a5d3404177474246ac67aa9b9b288656f423b', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: 'bb95ae5aeac76f530d69b5c084748c50f727b548', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: 'e32b5fc77f16c9ada3e6b1fea692219602277df3', name: "icon" })), index.h("div", { key: '5756ac8a57a979ea86e8b2aa19fec189a9e3d97d', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: '5362547191b585a8c841f06cfac16e1787c24de6', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'f02b0ef7099b5679e7915a7d5120c8fce7459483', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '53456fede64300af393c7ffb4dac4bbff1640ade', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '7611dba9ffbf4eeb4a3dca6e79a46a9ce1c3a25e', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '65a92b9071b953cb70e2e8e9a480f9ed01a10a22', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '9fabce4421e02f73d7cad9418ab2c7bc2e5daaed', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: 'ca0a56d10dcdf585b7182bda3b0344751dc669ba', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '17f6f49c8155c726fa661b560f526ab080a2f97d', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: 'ff41368678b5ec8485ad325711f08936eacbf021', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '2e51621a8e4e10bf65c4fd5a752aea90b9840a8e' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
