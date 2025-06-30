'use strict';

var index = require('./index-DGivrgtr.js');

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
const AtuiListItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * Size of the list item.
         */
        this.size = 'sm';
        /**
         * Border below the list item.
         */
        this.border = true;
    }
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: '0fe331a7eda0459a2b941972896e54bd6cedb9ba', class: `flex flex-row items-center justify-between gap-16 ${this.sizeClasses} ${this.border ? 'border-b' : ''} rounded outline-none outline-0 outline-active-light hover:cursor-pointer hover:bg-surface-1 focus:bg-surface-1 focus:outline-2` }, index.h("div", { key: 'a84b5a4455c2a1bab759c781a504d7de99b8bf98', class: "flex flex-grow flex-col" }, index.h("div", { key: 'ea2d14df08417b193cf88133cbacee6c99b9a2b3', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (index.h("span", { key: '0e4fa22dae370443f2ad130ce236e3fcf1782143', class: "material-icons items-center text-sm text-light" }, this.icon)), this.item_prefix && (index.h("span", { key: 'ddad074e5e7ebd56dcabd34009c6c4a89fc600bc', class: "mr-[4px] font-normal text-med" }, this.item_prefix)), index.h("span", { key: 'bfb54c60540df3a9c50421d5a615ae14fa7ca9d7', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '8f2d46951caca7b2b8dfd137da92eded62b515bd', class: "flex flex-row font-normal" }, index.h("span", { key: '53394ea0533cd9dfe84c223097ee30e1845854c7', class: "mr-4" }, this.item_title), index.h("slot", { key: '8790f2252481b267c6abf9f2580cf8bb9d08864a', name: "badge" })), this.subtitle && (index.h("span", { key: '1cf934093d9eac7122e30808f2024777750cd490', class: "inline text-sm font-normal text-med", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '3d73300a4d887e3ec4a23911fe9af1a050777867', class: "flex flex-wrap items-end justify-end gap-8" }, index.h("slot", { key: '87d868371ae03e2f595d202142e1b4ddadb5178a' }), this.content && (index.h("span", { key: '23dec0796624d784c92ee48fb2aa216faa092c4e', "data-name": "content" }, this.content)))));
    }
};

exports.atui_list_item = AtuiListItem;
//# sourceMappingURL=atui-list-item.entry.cjs.js.map

//# sourceMappingURL=atui-list-item.cjs.entry.js.map