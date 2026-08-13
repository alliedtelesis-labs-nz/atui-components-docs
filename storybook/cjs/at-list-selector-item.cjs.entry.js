'use strict';

var index = require('./index-BzuO8j9_.js');

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
        return (index.h(index.Host, { key: 'e16af75277638cd53152423033f9dd344524120d', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: '4dff2aabcd2190a9e87bfa4d0d7ce9724d47278f', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: '4c13a73a5505825c916bae861ad58a6aa99f84ef', name: "icon" })), index.h("div", { key: '9667b7281f8e16f4075448c795452e8062a9a523', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'bd0d4b0c56e978270bc531083e944fdf4bfb7ef5', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'be2c694d5de5ceb006f128155477f737a14c96eb', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: 'f541ea599afd121c77d95e69adaeff56c0e51325', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '94eed5a174710523d57335107e1d80a8bed64676', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '3a544ac87ffba27d1f7dbed9796d9f90b9cd5e0b', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'ce10a7ae172651960e469a4bab81d09610e2d61e', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '3f9c5bccc3607716fed09c0df6f11d944758b215', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'cafcc5b9266bceca75714e2af2b7d2468c1109ee', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: 'f294371ac11f1f81b55028b0111b5d21f8ebd06d', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '7d46ee9f7df14ec0fcc3e92891fad5decc13578f' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
