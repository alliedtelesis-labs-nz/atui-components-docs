'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h(index.Host, { key: 'a3ee301e0247ea7b69175d6797d5a60cd76ec430', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, index.h("div", { key: '76952ef556dd9598d370db969e2fca0a5b38753f', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, index.h("div", { key: '7cc62bd893b560f67270f8dafeba3588f6022c05', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '04fc5102cbebd6040665206df22fe9b4c4a51716', class: "fill-light" }, index.h("slot", { key: 'da11cfce0864ab8399f03ab908d0862ec8241faa', name: "icon" })), this.item_prefix && (index.h("span", { key: '140f8b45a1c6382ded9010cded9fbc63636dbb76', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), index.h("span", { key: '9aacd895e970005609efa06ef1721cad3d72ada6', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '623592917b8bef4e091caffc6425f2cf8c32246f', class: "flex flex-row font-normal" }, index.h("span", { key: 'da3c7d8f9aa421fd940b4becf726cd25ebc9e98d', class: "mr-4", "data-name": "title" }, this.item_title), index.h("slot", { key: 'a65f1efa60a98a059128857a889df193ede280fd', name: "title" })), this.subtitle && (index.h("span", { key: '076fc867ebf4073ab07a6e599e03960bb27e72d7', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '12612cee91dbcd61e1a83559060f51ab3da86410', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, index.h("slot", { key: '89f8df33cbfe9b2a7138cdba708fab42497c9209' }), this.content && (index.h("span", { key: '6710fb10678267598b2a322606994cfa93ac1b18', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
