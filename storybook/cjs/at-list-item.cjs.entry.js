'use strict';

var index = require('./index-EXiXggWw.js');

const listItemVariants = {
    xs: 'min-h-16 text-sm p-4',
    sm: 'min-h-[32px] text-sm p-4',
    md: 'min-h-[40px] text-body p-4',
    lg: 'min-h-[48px] text-body p-4',
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
        return (index.h(index.Host, { key: '70b9b993a3409ce45aa36f7840ff10455eff2494', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: '9b64ae4d3b20bf70816af80ea1c12dbea3b71e7b', class: "flex flex-grow flex-col" }, index.h("div", { key: '454436331dd5d0752b6305b0b5eb37f54f0c3483', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: 'f992d91f3ef1fa64c95d3e2f1611798d88df04b0', class: "fill-light" }, index.h("slot", { key: '9790d9a281a8babd35f78dcd612395374b55a31f', name: "icon" })), this.item_prefix && (index.h("span", { key: '6373b95b34b3d477fe350cc0972c99d2f0aed709', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: 'a5b2e6b4d871095568864e7a6d297f2932af24e3', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'ee504b9460d284c843a30a3c076270ba7a6f3bd9', class: "flex flex-row font-normal" }, index.h("span", { key: 'cb559a94db571248ee2c720479171e451ddf528a', class: "mr-4" }, this.item_title), index.h("slot", { key: 'cd1560699e29cf671b6f51d1a5ec278ed5648a9e', name: "title" })), this.subtitle && (index.h("span", { key: '56d0db7638b34559ffd6eb3156d3f6e0722acad8', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '26a7f56964a9b0dbfd12c645c5ba46405f6aaab8', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '34b401f275cb68c6d4df98008b82d5d870341b37' }), this.content && (index.h("span", { key: '616d67e87e93b6a1ed31040f96e803899b624b26', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
