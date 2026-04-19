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
        return (index.h(index.Host, { key: '39cd23caf8dbd2c44944071aef83fba55d0976a7', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, index.h("i", { key: 'b559f70278c1d73f5296557d713ebaa32e623b66', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), index.h("div", { key: 'e83f1f87d038c4bae9bfe4e783950bd19eebaa46', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: '63a53105dbfa889fb0c0aab37d91cf9b4460803e', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'bed54bcc16e03166f14df1dbff7122337360e24c', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '8c7ad010ce1b2bd1f05b4de82f1b1dd5fc58b68b', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '32694c5ae8249e0275a808afd05c4bfc2ed8e962', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'aea9bf7230bbbad1778ee5ba01894f80a0ae129e', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'c8fdcb1f71a70e3ce548d22112b46830ab8e6fb0', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: 'dc45f1432d1d422b08188a9ead1d5be8009c2179', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'b5cdf046fe08e6d7e247a61708e0decc74f25c5e', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: 'c59e061853607abfcb0a08050e69ddf1843ff9f8', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '58d1591408de4e23be69f430e08f6eb8e82d8937' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
