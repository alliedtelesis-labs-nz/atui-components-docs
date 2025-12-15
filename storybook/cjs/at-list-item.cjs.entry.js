'use strict';

var index = require('./index-COiLLAKF.js');

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
    /**
     * Adds background and cursor styles to indicate selection
     */
    selectable = false;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '340386db504a796c5ee5b1052f212464841ec392', role: true, tabIndex: this.selectable ? 0 : 1, class: `flex flex-row items-center justify-between gap-16 ${this.sizeClasses} ${this.border ? 'border-b' : ''} ${this.selectable ? 'hover:bg-surface-1 focus:bg-surface-1 cursor-pointer' : ''} outline-active-light rounded outline-0 outline-none focus:outline-2` }, index.h("div", { key: 'c6d30cc8e2e3fa82d1c8433228cfd0bd6a67d6e7', class: "flex flex-grow flex-col" }, index.h("div", { key: '5ba077d7ace080c4d6f9dd602b3be5b48798b420', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: 'ebbfdeca5ac80dafdce6f1275e771b310fb740e8', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: '69d7e1dcfb78ba2013c767cd0110571614705f21', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '3e04701de83539c95c6c3e60f2065bb6271a9e50', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: 'efbfe10417dbcdc5e3e741c0ad0c27fb9d88c17d', class: "flex flex-row font-normal" }, index.h("span", { key: '38707737ab27402a0240a806c14ba5fb1658ea99', class: "mr-4" }, this.item_title), index.h("slot", { key: 'b0b4f51df173edd1124f9135e89d73e88aadad55', name: "title" })), this.subtitle && (index.h("span", { key: 'f6a318f8da488e4821e34e60640cbf0edf341671', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'b4499903103d833c4f0b87eadc61b09a57c089ae', class: "flex flex-wrap items-end justify-end gap-8" }, index.h("slot", { key: '62dc20a24660c1eb3434a203fab75e4a21048ff2' }), this.content && (index.h("span", { key: 'ae3e7a05b372d1b5a5e649bb56419cc806ad8ede', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
//# sourceMappingURL=at-list-item.entry.cjs.js.map
