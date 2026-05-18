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
        return (index.h(index.Host, { key: '70f1a8d1a8eb0daee0280c2f429a838a1d588952', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: '2be1f26cfacac23900f9c89d82bb84d77eed1d44', class: "flex flex-grow flex-col" }, index.h("div", { key: '17dea73f88dcd4c8176fb708d424ee2c2ffd75be', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: 'e917d81372051ed93eecde1314ec66178759251a', class: "fill-light" }, index.h("slot", { key: '6e949a5526a8c5889312431bbdc9c6aa2a27e8e2', name: "icon" })), this.item_prefix && (index.h("span", { key: 'eae7fa84446b9663742f2bf9297e4445e9c13801', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: '3c37605d3b191ac85309dda205dec663c89d0c7f', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '60787b39fa9878f9ee38874d9149b0568eea1de9', class: "flex flex-row font-normal" }, index.h("span", { key: '0a9f887ecec1c1808ed10d7f59709a9663a4b262', class: "mr-4" }, this.item_title), index.h("slot", { key: '149c006306eabfcab0b4c1f923523e499ae19543', name: "title" })), this.subtitle && (index.h("span", { key: '8aebb1b962c6b0990aec482c0e932fc4ce559933', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'b4369434e7e1d485ad258766c44c8e418fbe0a8b', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: 'e601a2d87fd5a7e3acf21c7dab1fb48ffcbf08c6' }), this.content && (index.h("span", { key: '23bfc3170ea647a26f78114a59d88b4e81f8dfb0', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
