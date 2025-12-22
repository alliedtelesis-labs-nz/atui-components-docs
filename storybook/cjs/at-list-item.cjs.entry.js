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
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '78d54190a51d9fb8bd157ee14fbfa2d7e47c1809', role: "listitem", tabIndex: 0, class: "hover:bg-surface-1 flex items-center gap-3 px-4 py-3" }, index.h("div", { key: 'a86cebca3ae6d2a134342bf622b27e7f0bb6b294', class: "flex flex-grow flex-col" }, index.h("div", { key: 'f243f99d806c7cdbe364ee3bd24186aaf9640538', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: 'e8e1b2ddb2fb5d1b769cd8842a47b3c7b266d6f8', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (index.h("span", { key: '917ef6c85499b069f8d9e62ac1c66dc6762fece6', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: 'd648832f90fe1e638d22b28569c95624b6e2f699', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '0d036a1fed4e4ad83cc36bc80f9328f93b01ff8d', class: "flex flex-row font-normal" }, index.h("span", { key: '76354ed41198724e0dfad8171f56ed8459d19bf7', class: "mr-4" }, this.item_title), index.h("slot", { key: 'f1bfc240b997ae08f6e31b6beef63db0b13537a8', name: "title" })), this.subtitle && (index.h("span", { key: '9cec0e244f4da96b6888fffedfa20c9befb82e39', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '7f3ceee53327284d8ab9b31184f27a2efacbeac2', class: "flex flex-wrap items-end justify-end gap-8" }, index.h("slot", { key: '75f62887b218bd3f7c0a0c3e7cec522133fd2bf3' }), this.content && (index.h("span", { key: 'bfe38cc2672d7701426523ee29d099c6f4f30144', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
//# sourceMappingURL=at-list-item.entry.cjs.js.map
