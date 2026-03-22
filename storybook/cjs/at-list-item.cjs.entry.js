'use strict';

var index = require('./index-CzDB71Wy.js');

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
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
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
        return (index.h(index.Host, { key: '856eaf7a1a70cfe00b5437366c6e49f44730505a', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-light flex items-center gap-3 border-b` }, index.h("div", { key: '6765401a98e393a65e07932802bfc1d234fe74a8', class: "flex flex-grow flex-col" }, index.h("div", { key: '6e25d5676cd157f172a6325dbd5a0f94d71d2b05', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: 'fe651b7f78b669769fa9fb30fc8fed671eac2d68', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: 'ffc0332fe11e4809e1a9c63b9eddc52a0911f6f5', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '47e94861cd93d717ad71dab8158623e7974fefa4', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '68416040adb7ab27c16b0dd89125b5449984e726', class: "flex flex-row font-normal" }, index.h("span", { key: '66b44c32a9f5f61004d80630845195f1016279b5', class: "mr-4" }, this.item_title), index.h("slot", { key: 'f4ba18aa54a1fb6362a90a0b3e7eca3894f4da8a', name: "title" })), this.subtitle && (index.h("span", { key: 'b289e757c4a73249a1d62aad98556eec712e439e', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '05b02f28ac0940a65dcc1753c3c3f8d48b33aee2', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '7b6069b732a75bdce4d01a48dfc13dc0075613d2' }), this.content && (index.h("span", { key: 'a57c84337280b0e5a32a64357c20796421e18e5f', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
