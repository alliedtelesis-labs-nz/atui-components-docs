'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '2cc4f164429c3f2a3a259619ac0515e5508dfef3', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: 'b2f70bad5ff916e1e93cd1ea4553e3bd75361c67', class: "flex flex-grow flex-col" }, index.h("div", { key: '1a5f43369e91a17f5ee7cc93597ab4ad0b755c83', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: 'c23db3c296fef9a516e2cef185320ee8426c5312', class: "material-icons text-muted items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: 'e7a7ee233d2e603944357f40887844fda7ecae50', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: 'a15a97bbf8a6979642eca3eb5dc6f9ca93d48213', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '9be670a2b208a646a91666ee1618da0e7901444f', class: "flex flex-row font-normal" }, index.h("span", { key: 'f32b1e6b784c42d4b5b6369a0ecac827c71a0a47', class: "mr-4" }, this.item_title), index.h("slot", { key: '8d45200bf580a8f274e8bdc24cdaa0738622004a', name: "title" })), this.subtitle && (index.h("span", { key: '5cf2314f60fac54a562f478636b7ea61cd33bee7', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '155f490f9ef07f69be85afec7ed88a6a6c73ba8c', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '521de178520c19e2bd9c8558f836e64ec5fd3456' }), this.content && (index.h("span", { key: '49e07107fb54a6baff25026c232c6ab0a8f5e815', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
