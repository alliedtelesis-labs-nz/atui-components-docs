'use strict';

var index = require('./index-COiLLAKF.js');

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
        return (index.h(index.Host, { key: '22d73f0d5d141f3cf5af3e335eeb2581f2964a61', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, index.h("i", { key: '98ecbb83c94dbd73fe46e8266cd86a69ec3b1e8a', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), index.h("div", { key: '12227cb78f008c0290741151125c6d32ae2bd293', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'bcfe1bb218242e144c989b5f0df9c16666ac9b36', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'e7deaf18bce2f07c604f049779d31a67ef55164e', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '27aa8dd381a1e746719592106463ecc8b4ce449f', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '5ccd0e2f85dce63aedbb1cbfa963efe40987caa0', class: "flex flex-row" }, this.item_title && (index.h("span", { key: '5a3d2b91cd64509ee789b0a3d567e0c9d5d00cdb', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'e2ed82394100cc49a71e1ea6607617a64e635dda', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: 'c47ee40b685703eb2efe946308044084e2cf0085', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '43062511ae66e282a89d308626ce3a95d6da18a3', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '0da9a9607e5baf841bbfd0042a6970e01fa64e70', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: 'a4ada939399eecf27f5cb4bbc928edbdd56a0e7d' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
//# sourceMappingURL=at-list-selector-item.entry.cjs.js.map
