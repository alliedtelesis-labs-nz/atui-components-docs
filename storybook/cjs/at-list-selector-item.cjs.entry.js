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
        return (index.h(index.Host, { key: '1376857aff889131d9bdf5de918daa4405bef455', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: 'bf08b9e4ae288f744e99987e2689bb96817b5d92', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: '565f46485b7202ed652035856473bd274936c7fc', name: "icon" })), index.h("div", { key: '2af1ebe78335f7760902442c474990f41e9f1576', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'da73d4c5cdfc875022a20cb1b43bb9c96c893533', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '78349988bdb8810525df620d665141d59bb48d33', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: 'c0c387f4276e4a75e9e329ff83de3301f9a25f13', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '88507628be61db4402d1fc30cd1d5cc764799bb4', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '27749eec520819d6d48f97df42fc64d63360f119', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '725bfad27bc2a64bdaea4f30df251836ef9643d6', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '7ff8674846b525d3a601daa7c7a3268b5a95ffec', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '473b346c93ea10eb30e1f7646201824922b8d077', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '3cd20c354d23227fba54dbb72a4bc45d9de3a226', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '17c532b1c1a7afcc65da02ecc3ec5728dd60f76f' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
