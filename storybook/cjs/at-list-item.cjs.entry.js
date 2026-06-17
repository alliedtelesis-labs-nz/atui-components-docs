'use strict';

var index = require('./index-D1oh76XY.js');

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
        return (index.h(index.Host, { key: 'fe05ef934be7b1535a2ebc76cfd7159389554abf', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: '43c75cac072663e1eb9e422070280409f8392c13', class: "flex flex-grow flex-col" }, index.h("div", { key: '353f615841944d3e9ec27ebad42c93136caae524', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: 'c947d112e24a71d2c581683791539ce0d86c31c6', class: "fill-light" }, index.h("slot", { key: 'e74cc9bbd1bc9d0ea5aa45d7b96be1f2dd8ec159', name: "icon" })), this.item_prefix && (index.h("span", { key: '17d07fe6a9db93dff14efa14caca5a4bda77001a', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: 'dae5c9c1f98000a3d87bec54a79e96d63ab14a8c', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '4e27dc168356be05cd959d8b167c0b59136f2d2c', class: "flex flex-row font-normal" }, index.h("span", { key: '0d9046f0c2fe46471819bc5974925ef1681b322d', class: "mr-4" }, this.item_title), index.h("slot", { key: 'cbbd02e26397fff345f914f431a9ef889936444e', name: "title" })), this.subtitle && (index.h("span", { key: '3e2e5042e4fb8d7af33968d92066f9862857611d', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'ec0c9d62f773e4ea1d6ecfd77f51410c68197db9', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '0bb39f7ad9332e63972b2e07628f701ffd5705f9' }), this.content && (index.h("span", { key: '7c50add9ec1707ebff1ce5f0209d8890b3c8131f', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
