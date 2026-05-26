import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm p-4',
    sm: 'min-h-[32px] text-sm p-4',
    md: 'min-h-[40px] text-body p-4',
    lg: 'min-h-[48px] text-body p-4',
};
const AtListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '4e811f62d86a0d5f2e850079c97fed314340da75', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: '011c63b40b6bbddba73f340f8a8c4ebddb020680', class: "flex flex-grow flex-col" }, h("div", { key: '3e89bd920ca5caf2f439e83bf53069aa19070957', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '50da91f503fff616e09305cef86fd53bae8efda0', class: "fill-light" }, h("slot", { key: '1648cc8d510a5153c956241aa8ca80be797933e1', name: "icon" })), this.item_prefix && (h("span", { key: '87e044afd293cb2e4525061cd1e1ec5b54e15f01', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'a70189e9be1e61467f08ddf7ccfbd68b87582a11', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'c8442cb65d66b44e0d88a0e0ee13f27c70554a95', class: "flex flex-row font-normal" }, h("span", { key: '1a21fe0c9678e2bf43591dadb1f33fbcd5b8979c', class: "mr-4" }, this.item_title), h("slot", { key: '0c9715be9829ee29b5075ad3acb98b2edcf4bfe8', name: "title" })), this.subtitle && (h("span", { key: '1f535703dbc94aaae94b64a10d9ac3a351aa5f76', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '85f4545a7c3bdc27b4769f2b60ccbc9dc030cf12', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '1d9f924ab844f976ebe3ad378cdfb71b6e723b45' }), this.content && (h("span", { key: '17f0eaf95469c6c43528e65175ee5efde80448ce', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
