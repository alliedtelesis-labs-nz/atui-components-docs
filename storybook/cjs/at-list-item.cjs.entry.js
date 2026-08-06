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
        return (index.h(index.Host, { key: '4204e25e1c26b701c8a299e8a5ce28ec3357e209', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: 'b2f89699247a6cc5f1d888b518e82950bff88932', class: "flex flex-grow flex-col" }, index.h("div", { key: 'e39df64f794d06bb2037e496ea96096adc50578b', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '2e4c414211e288b3eb05620dd82f4175f8a6ea7d', class: "fill-light" }, index.h("slot", { key: 'e91ab3572e470d63a41e03ace9d760b7ef8c2513', name: "icon" })), this.item_prefix && (index.h("span", { key: 'd33b19a310320d6afc8f9102ea97529b4a32f5cf', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '95bec9ec690b19cbf0687057a267a5d34d1490e4', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'a448a7b27bce3ed533ba9877e9b50a15108cd68f', class: "flex flex-row font-normal" }, index.h("span", { key: 'aab4a37cddc48605f93b5f2baab0a300cbaf8461', class: "mr-4" }, this.item_title), index.h("slot", { key: '0e321154ed4c0c1ed6041fd1fced99441d0d8955', name: "title" })), this.subtitle && (index.h("span", { key: 'eee107528ff95dd277c412a851179a910af5286f', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'dc0d95f2e01ce225404fe91396c0b4f19b450460', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '38f5ebdd0ac0cb5455cc7994f4ccd8e4a2b21aea' }), this.content && (index.h("span", { key: '02efebc76109953bde84cd8ef10d6183c3da1921', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
