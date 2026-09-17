'use strict';

var index = require('./index-CEz1eizW.js');

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
        return (index.h(index.Host, { key: '0bab05a1109172508a20b44a62da93d0c5f76de1', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, index.h("div", { key: '7c5c801402478622862ff4a0119eed2efad68924', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, index.h("div", { key: 'a9d2bb024daa24d920695e9e6d3db2799bf8fe62', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '54336597187818de1f2459f718fc46cbe676766c', class: "fill-foreground" }, index.h("slot", { key: 'd87301f98ef3a500188b7cbc5937d2d7a8f7f0eb', name: "icon" })), this.item_prefix && (index.h("span", { key: 'cc084523eaed3b6007bf1a9e4bcd8c476bb469e3', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), index.h("span", { key: '1eb4af24c58ff1701703b6398f9d2f6e1f2aaa2c', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '9c37c5c0b386af1d8cd4ab89a33bcaad50600834', class: "flex flex-row font-normal" }, index.h("span", { key: 'bf235ec06bcec4b9a1d6016eb9383c0416db7926', class: "mr-4", "data-name": "title" }, this.item_title), index.h("slot", { key: 'c7340839491b58a070f35148d338eb25dc4b75fe', name: "title" })), this.subtitle && (index.h("span", { key: 'eea3f8cb3687afb86378bd7d6400659381b25dcd', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '9f3d4671766e87d5aa85f5cb529547a8757e834c', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, index.h("slot", { key: 'c824637d9a83e17f46f7d25174c0be35048ea47b' }), this.content && (index.h("span", { key: '6084be29b508ea07d6bab1c76e9d00b41bdb325b', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
