'use strict';

var index = require('./index-B7bW4GPk.js');

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
        return (index.h(index.Host, { key: '160650d039528df01c74f82b0f73c5b61a8e750b', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: '4d2b1bd6b27c046497ac6f36deaac976e70a9f50', class: "flex flex-grow flex-col" }, index.h("div", { key: '224e170e1d9485508fbb5b1639037b96dec29f8b', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '1d73be3384dea5f9241b8f4846bd7878c7fc54a4', class: "fill-light" }, index.h("slot", { key: '705e61e06c599a0bee73400dea218c5b3cf41993', name: "icon" })), this.item_prefix && (index.h("span", { key: 'f31f18ad535a647c8e8d0db01c8afb1b5bb2ac50', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: 'f9125243d67dd174ba03cf2ad7a7021c2faf2666', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'f50c1e2fc895a965e2ab19f7860112af9d3a5e25', class: "flex flex-row font-normal" }, index.h("span", { key: 'e212dc65d09396410f5104d0cc31ed8ae76c25bc', class: "mr-4" }, this.item_title), index.h("slot", { key: 'dfe6982b4eabbcf0e8cf35f1de5c84452249b69f', name: "title" })), this.subtitle && (index.h("span", { key: '588577afe29bcd0b799d2f24904831f8a70567b7', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '9a219f08dfe57a3eae31ad5dc4a31d3f82774991', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '2050a7f032a226be5ad08aeae1d59d8d6cb3ea94' }), this.content && (index.h("span", { key: '1d677bfd0a4c18ba3d95f95afe76f257047bedaf', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
