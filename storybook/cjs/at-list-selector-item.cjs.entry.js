'use strict';

var index = require('./index-BRms7T38.js');

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
        return (index.h(index.Host, { key: 'd65cda99d3000bb451239487b5ca33dc21625d47', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, index.h("i", { key: '443a201a109d36dd669d73ab4aed108ba7518d17', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), index.h("div", { key: '48860028842f4bb20a14d85fd9ae87a19f3c0f2d', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: '52341e13f49d38353d55d782cb6746b2d0922011', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'e982d92b454d68e23a823a215fcc22a5f65903dc', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '3c615cb9963d31536dcb0ce710c45f426f245713', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '0a56e1152146d2665f2df0f4619bca02557cbd4f', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'bedd4976ced3e597d7ce7ebea1a6030ae54de276', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '05dc40c885506b5ffa08a4da1baa9f30ec177035', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '7d6ce679198ff35fee6a541b8cfa9d374bc5774a', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'e8cecdf9c35b6072a6ec5d216c6aa6232ed97c10', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '25f83fdf3e7002fb9f5b299833b1aa4a999c2777', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: 'fcec3587821bc8aa267f776fc6e7dfa0566303f3' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
