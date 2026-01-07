'use strict';

var index = require('./index-CNxmwTiq.js');

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
        return (index.h(index.Host, { key: 'cef9be484140bc1b693bbe164f4bc5cb35acb23a', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, index.h("i", { key: 'c1cd2000209d9bad3d66ddb583ab1b6667b185ea', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), index.h("div", { key: '45f0ac7e9e805ed0b8014e1dec6cf230fded3da3', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'e87f22723d30e2950435e1855033a7a99c676972', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '1ef81afc2b766140059869cab4f55b16238fe5fd', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: 'af7a768054fe537ef2d5fe99514f1fa353ce59b7', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '84ea3a8bae242027a6970b24eac2c374373880a7', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '00d18b509f20f646dcb165b1099f46e6e397cfa2', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'bf28df987ae7c8f36fe9e9a054803c5ff2d5e805', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '89cd92d27be2594da61503beebbb2b04a53a5068', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '3b40a75724209f5f400c98dfca247a06d1dd6e9c', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '9d0af8e6975da0c11791e56fa4ed20a7b32176fe', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: 'b4afeccf2eda8a1e122ebbc05911ea3aa418d461' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
