'use strict';

var index = require('./index-V7Urjg2R.js');

// Vertical padding only — the container (e.g. `at-card`, which already applies
// 16px of content padding) owns the horizontal inset, so rows sit flush with the
// container's title and other content instead of being double-indented.
const listItemVariants = {
    xs: 'min-h-16 text-sm py-4',
    sm: 'min-h-[32px] text-sm py-4',
    md: 'min-h-[40px] text-body py-4',
    lg: 'min-h-[48px] text-body py-4',
};
const AtListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Content of the list item placed at the right of the item.
     */
    content;
    /**
     * Size of the list item.
     */
    size = 'sm';
    /**
     * Applied styling for hover background color and cursor.
     */
    selectable = false;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '302d98caedb6c0cc45087c9c09e7f8429af7a6c9', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, index.h("div", { key: '1eb4fec30ffca52b6751400112d4450ce3356462', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, index.h("div", { key: 'f2aef4d8cd750c0697505aacdefac9b5720335bb', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: 'ca2bb5121694ae696245d0f6fde6f4bf9088c769' }, index.h("slot", { key: 'bb12978f0e4b3454dde5a92a7d258c1f8046ce76', name: "icon" })), this.item_prefix && (index.h("span", { key: '99c4ff372de4eee7e4bfaa626d5055928ad0132e', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), index.h("span", { key: 'd89145a583af9f42e8af853e6234c76cf5d0cd55', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '69860db3454e666320f80ccb74d6fece7414b58e', class: "flex flex-row font-normal" }, index.h("span", { key: 'adcfd8ffd9b56b60eab2ac442bfd25a4afb564a0', class: "mr-4", "data-name": "title" }, this.item_title), index.h("slot", { key: 'ee278dd3179b22e00ae7aeb0588c2c77fc21556c', name: "title" })), this.subtitle && (index.h("span", { key: '649160eb4c80b5ae546031ed2b0a62613b071797', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '38dd561fc6c93294fc69da37777973f8fad1bcb0', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, index.h("slot", { key: '9f975c28de1c4f40047049cf7d7d9f8c9447f6b3' }), this.content && (index.h("span", { key: 'ecb2a4bf59a91eef060859311e886b82583f4537', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
