'use strict';

var index = require('./index-CzDB71Wy.js');

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
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
     * Border below the list item.
     */
    border = true;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '98ccca0ddb48cf9df6620f1f41de52c30750ad64', role: "listitem", tabIndex: 0, class: "hover:bg-surface-1 flex items-center gap-3 px-4 py-3" }, index.h("div", { key: 'a516cd2aeebcdeccaee8342a48cb3d0178c9a6f6', class: "flex flex-grow flex-col" }, index.h("div", { key: 'f21e6aac6f6261bb38cf0ae9445d9a5c035ca2c6', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: 'f2bf7e3639d9184faa445dc98ce75f16f8defa2e', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: 'e1ea3eb45e362b1addb53a763722df198f667c1c', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '43b523acbc98b95d827a98a084834275adbba262', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '74e0fbcd154471346f5e821cf9ccde4b46394276', class: "flex flex-row font-normal" }, index.h("span", { key: 'de84de73793a331b6aea0a304fd400ac48f26241', class: "mr-4" }, this.item_title), index.h("slot", { key: 'a499a2a23e8695752967e97ef4352ffa74dd83ec', name: "title" })), this.subtitle && (index.h("span", { key: '9a669747ecf7fd4c50fa8572f39ce33e8c0a613a', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '392cd0e736d0ff5173dd656ee82fad6e963ccd92', class: "flex flex-wrap items-end justify-end gap-8" }, index.h("slot", { key: '78204a17a175b6679ffaa86dda0a84865df1d674' }), this.content && (index.h("span", { key: '0903d0026417183559347366954f219e9e042eed', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
