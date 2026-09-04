'use strict';

var index = require('./index-ChtkW4Eq.js');

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
        return (index.h(index.Host, { key: '048560fea22c9a36a6e423651bc6856add3cc70e', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: '5757863862e883b5d32dfe1eb04ef9a59299df76', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: 'c314bb9bbce36446eafc4873a7f7747d059c4c8e', name: "icon" })), index.h("div", { key: '4c1065343a4eb6a0554fc268b1125165c36c1fd3', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'b13bbf9557a0317e5f7f759bb31a81012fe963df', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '0cbe76c0ecb2dc23ea1d947c7cc68b548eb83f13', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '58a029e00c026a0cf034433048f67140a24ef81d', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '5ce0b3ee5e3f8b8e6c403460905885a9a35b6ecf', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'e52a5559d99d31a71a4307bde15c041cf2867e63', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '25142f0f4dcdfa73fa5423c2993877f9d4fd4dbe', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: 'daf827dfb14fc078564e07464cc39443fe87a1fc', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '9ee397f4a627fa73bfabc7585b3b9471b8a355e0', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '152a9095b3830303b77de7b7c889cb1021da1745', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: 'cc01d8d33641057c33b3abdd3e2f978ad48a075f' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
