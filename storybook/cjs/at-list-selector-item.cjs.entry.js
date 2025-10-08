'use strict';

var index = require('./index-DVvGgFNV.js');

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
        return (index.h(index.Host, { key: '48012ff37a001f02cbc843b9e8d68503d6eccd65', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, index.h("i", { key: '1384ad2a893129eaeb971f56ae6b9e2e5475c884', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), index.h("div", { key: 'a923521685bab648f9ca8b07df850faa09a87245', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: '141f9ee2407b6cb93d5f1dbe5c6d476e654f7891', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: 'cec14dc67113277d7dd0d6d17d17946dabf5c81b', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: '2054039c1142db99cc7e5581758edb8f61a1a4f7', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '366f1d098656faf7d3b746f4b9eebba2e75862b1', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'e52c7844ba78d27a0f86571071e67d6362cd21fc', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: 'a44521ba91ce4ae52d76cf7627114e112f45fb0b', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '1a833646fe72a1d060fd6c2a97711b415420ec07', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: 'b468573589a1245dead3ee6794ad58024f765593', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '8a81fbf899dd022a1293b2ef886dbd57e9bf4cf7', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '83a16d0f7027038ec34e7c08e71d1f8808d8fff8' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
//# sourceMappingURL=at-list-selector-item.entry.cjs.js.map
