'use strict';

var index = require('./index-JVxrGXVZ.js');

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
        return (index.h(index.Host, { key: 'ae9201a28312b46558076190f0197adeceeace7c', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: 'fb8c29307ec57bdb6404a7143fb2b76fc2913066', class: "mr-8 ml-16" }, index.h("slot", { key: '9df734b41b5c1aaf4326997d84a174b796c75c74', name: "icon" })), index.h("div", { key: '048bb066329b53a8d5ad2ca5679a331171e8bb03', class: "flex min-w-0 flex-grow flex-col py-8" }, index.h("div", { key: '786b8f6f05df5e844cff5f8e878ddc65f9ece416', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '1da6793160883121fe25c07ccc174fa6e2e4124b', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '87e9865647fb38d87f50f4857c3610f74eb22471', class: `text-body flex min-w-0 flex-grow overflow-hidden pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '01cded501355faaac6ce4e27797166c2e0fb89bc', class: "flex min-w-0 flex-row" }, this.item_title && (index.h("span", { key: 'b86eaf21e6d50dc03c5f2173fa57c40e180964e8', "data-name": "item-title", class: "line-clamp-2 min-w-0 flex-1 break-words whitespace-normal" }, `${this.item_title} `)), index.h("slot", { key: '1b8ac18a79d9e349da1cd589037b0413ef9baa36', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '5e270e867c768717cad239f27bbcf01e637f7a18', class: "text-body text-secondary overflow-hidden font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '9ede9391b594c88a8c65690baba6eb05ed295864', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '089ae2c1876c59d8599bdd8677377753b5540b99', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '625a8272fcbff8e33407b802fc91e7b5e00ac8c7' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
