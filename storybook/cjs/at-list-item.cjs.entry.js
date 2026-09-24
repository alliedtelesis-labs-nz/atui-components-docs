'use strict';

var index = require('./index-JVxrGXVZ.js');

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
        return (index.h(index.Host, { key: '0bab05a1109172508a20b44a62da93d0c5f76de1', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, index.h("div", { key: '7c5c801402478622862ff4a0119eed2efad68924', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, index.h("div", { key: 'a9d2bb024daa24d920695e9e6d3db2799bf8fe62', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: 'c0c6993db37fc9271f84214327fa7b20536ca269' }, index.h("slot", { key: '63c3c02f73af8bbf7e405ba192eddd7167df0091', name: "icon" })), this.item_prefix && (index.h("span", { key: '8839d8aea04b4d4ff5a71c2eb70f08fb75c5330a', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), index.h("span", { key: 'ade191c2eeb5c1bb4ac82cd577ea7e887629bd24', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '61882d054cac19801c2d898b8e1e34f5efd79e8c', class: "flex flex-row font-normal" }, index.h("span", { key: 'ee591113b1c87421b5d61718f428798d984416f9', class: "mr-4", "data-name": "title" }, this.item_title), index.h("slot", { key: '356f64279b522b07cd7a70433241a49066d90fd5', name: "title" })), this.subtitle && (index.h("span", { key: 'b934ee7ba4d7f0fc84f6eb9e907477b3998fd95d', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'e1634cba94d4b58f09d18702c0a5654fdcecc188', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, index.h("slot", { key: '77b32de0f7ad22aa5bf357f1bbd3cfef223b32f7' }), this.content && (index.h("span", { key: '426329b5067e092d955858b575b5b9dca5b5dcbe', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
