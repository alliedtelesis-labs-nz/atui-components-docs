'use strict';

var index = require('./index-CzDB71Wy.js');

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
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
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
        return (index.h(index.Host, { key: '1f595ad6592d281b56a50ba14d33e09b7e7e6cc4', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, index.h("i", { key: 'dd6852dae264d93c59ed8cfcc7e961c117b8fb59', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), index.h("div", { key: 'a6c440de19b3f1eb5ddc461d8d1e5eff0c91709e', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: '722cec8e4efc29b699df883b44ef625e02abb9fa', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'd984a5b8e864fcd5bed54ad8634d20281f69e15e', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '40d0e35980644262ba1ed9ec4a2a283ab3295c71', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'cede32b0f8fbec0ccf0735feafa4272b55392436', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'b7b73cad234f7982d401b02b9e55c461b15419b7', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '0ef466da851edac36dad50d6c1e92395a8b9a856', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '7d914902a402327a4f1b32336c6733572bfd76fd', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'd0348ad572c17dec3e4d23d54f98b5da63bf3cd9', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: 'b197f4bba9ebc2e88a49b8ca8a4b58fd2f5a0c8b', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '06d340cd5fe8c131e9df8e3990c33085f267211d' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
