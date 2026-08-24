'use strict';

var index = require('./index-B6UemjpQ.js');

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
        return (index.h(index.Host, { key: 'f643385cd5541b6651dfeef5a73be6a4ce626478', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, index.h("span", { key: '3577af69929deb96cc1c9f751a4f2b823ff238a8', class: "fill-light mr-8 ml-16" }, index.h("slot", { key: 'a4ebe5e4a89ecfecb35e1893490e55fc66bae0c2', name: "icon" })), index.h("div", { key: '01af5a781ca87dac83473f1e3d6374f07768620b', class: "flex flex-grow flex-col py-8" }, index.h("div", { key: 'ccc76e5c2d91c3ff3ed92bb30266cc119c21ce2b', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (index.h("span", { key: '62b5c62e1ee29f9fddf2e2de191f7cf9de7d0a56', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), index.h("span", { key: 'ee60523b8312acfd40ea371b3270c7540fe5dbce', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '593175f3fedea5e251d0684482df0b97161d41dc', class: "flex flex-row" }, this.item_title && (index.h("span", { key: 'ca1d5c3a3b43a6ddb4fe1db85eb1869c8b9b8984', "data-name": "item-title" }, `${this.item_title} `)), index.h("slot", { key: '2394e6d6f8b968a2bd7216bfbaa8ad6ba23ed623', name: "badge" })), this.item_prefix && this.subtitle && (index.h("span", { key: '7c87ba8cc2ec7817d7d4496d554a4183c254ec3c', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), index.h("slot", { key: '074d545150ae5efd34da8e8ffbac7c6bd9f646d8', name: "info" })), this.subtitle && !this.item_prefix && (index.h("span", { key: '9da36abd621d83b323af2606f8559f50fa2989ff', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), index.h("slot", { key: '34e9a43ecc76b58d6256f6b390e46c3d957f2932' })));
    }
};

exports.at_list_selector_item = AtListSelectorItem;
