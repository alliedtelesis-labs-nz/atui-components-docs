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
        return (index.h(index.Host, { key: '5bda91fdfc391dd93081dc85f3a65904fe0043d5', role: "listitem", tabIndex: 0, class: "hover:bg-surface-1 flex items-center gap-3 px-4 py-3" }, index.h("div", { key: 'caa64527899b0924e8d124bb4f32a8b48fae95df', class: "flex flex-grow flex-col" }, index.h("div", { key: 'bc74431c6d3c89f285cd4335d6d61a6b59f3f447', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: '746dbe75c00bda1ea5d1ad02650a998e508afab5', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: '749ea9f3a84f569d5bd725f3edfa36a65d1b8076', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '3259b5ace4699bc75dd457ce083135b2d330c748', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'b5dfd990b470400eae2b029c86da9fb29fbd718c', class: "flex flex-row font-normal" }, index.h("span", { key: 'd21f83a37f13aa4b0dfb18e6583367f39eebe39f', class: "mr-4" }, this.item_title), index.h("slot", { key: 'cd99542687dec091fb7d7ed2797337e426c8dbb3', name: "title" })), this.subtitle && (index.h("span", { key: '0b35d911c8814bb64f93b035ea135dc5e36c5ed7', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '21e9ff229d8d8e2dbd0c48c7d9c22cd52657d1d0', class: "flex flex-wrap items-end justify-end gap-8" }, index.h("slot", { key: '6bc5b9132e7f45adef015a33b99124d1fce914f9' }), this.content && (index.h("span", { key: 'eed6a07fa0da25d5c553cf865ee2833ed8288f4d', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
