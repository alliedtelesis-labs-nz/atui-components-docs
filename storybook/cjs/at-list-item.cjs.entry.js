'use strict';

var index = require('./index-IIXwPU2S.js');

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
        return (index.h(index.Host, { key: '563c2734b3d6765b227c3fe4cc5e1d13d9297ba1', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, index.h("div", { key: '62f4a60ac6c3fff86275d55ccd245dbd5f420da5', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, index.h("div", { key: 'a48b8a694b2e1e126d71d32fe64177f68ea22be7', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '60406a7928c04cd56693ac65079debbd667e45e3' }, index.h("slot", { key: '4a6f8c7e6d13e587b46b890616d2edf3caf67578', name: "icon" })), this.item_prefix && (index.h("span", { key: '52df7bb2492803b09cf16c94605b5f5955897842', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), index.h("span", { key: '950cfb1aca2142bcc433f34c0f60388aa90f11a0', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'd1b5cacfdac7a10fef6753e99ef40a699b2cb53d', class: "flex flex-row font-normal" }, index.h("span", { key: '5fcf3ec1b0a5d76b4b9ccc0c706dd2de9ce93c71', class: "mr-4", "data-name": "title" }, this.item_title), index.h("slot", { key: '4f87c2c4c0da2d76ba51bfd78e4d5f1600948fe5', name: "title" })), this.subtitle && (index.h("span", { key: '7e7b333a4038142b22d7456775b9bcc676e35cfa', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '90ea120d50a313aa35727c72c954e600d8070bfa', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, index.h("slot", { key: 'f39d850bbf7c3e692706c05719d0c3eddfdbc756' }), this.content && (index.h("span", { key: '20bb088047727170cbca4bd51c6827da6cdfcd62', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
