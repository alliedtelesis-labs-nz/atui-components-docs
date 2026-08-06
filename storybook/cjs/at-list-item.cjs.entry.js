'use strict';

var index = require('./index-C0zY2e5N.js');

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
        return (index.h(index.Host, { key: 'ce3404f53278acbc294a5e3137a96417e4d3aeae', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: '79b31caec98c0a1740dca69ada679b1bc94f4010', class: "flex flex-grow flex-col" }, index.h("div", { key: '4017f5b7f9536ce5e48ddd73918b55e86fd3f148', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '84446f72e689ccda7f9fb4a9e236cbb6e8699eb5', class: "fill-light" }, index.h("slot", { key: '238f262ec607e2ddb6604bd52eaf301033db5a78', name: "icon" })), this.item_prefix && (index.h("span", { key: '5c6b96832958651925058d9a9325ef2b7be3dd83', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: 'da5fa5142d89f2f1a41fc6a854dd35072538f9d8', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '67ce2261b4b0986e38d27c44315400e83f80443c', class: "flex flex-row font-normal" }, index.h("span", { key: 'eb081f4e6a5d8e0582827801df0dc0963eb7944a', class: "mr-4" }, this.item_title), index.h("slot", { key: '495f0dc672b51812f2a504a9f9725af5763cbc21', name: "title" })), this.subtitle && (index.h("span", { key: '910d8e0a90ee518fcb34d7bfbeae77b8aa241074', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '5853addd8f2eacd90e29007461fdf65a1586e94d', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '352a67fbecf412f3e29ff52c55e9d6780a445afb' }), this.content && (index.h("span", { key: '9b164de4438ab7c6d373e36aa80ae21344e09d10', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
