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
        return (h(Host, { key: '24a0b5d0127035a246ec3980327b8902ff12d4e7', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: '32c4bfa5ba06cdbcef34bff4b0187d84861aa225', class: "flex flex-grow flex-col" }, h("div", { key: 'b225d7d7b3e1e03a0a9a168b7f5c0fcae32f7638', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '6259b4da6f15c5210979cb57d9399532c2977353', class: "fill-light" }, h("slot", { key: 'bc58fa94ae0ef5c7f0ce7d1682897e73b55422cf', name: "icon" })), this.item_prefix && (h("span", { key: '8ec77ac9cbf64c904c6280bc8401cdc750e736e1', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'bfe902efc5159653ba5b275478874aefe788799e', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'c8769a64dc63089f68fa7d8ae8fc44bb44a2a3f9', class: "flex flex-row font-normal" }, h("span", { key: 'fd199a544be4681738b42f01dc885bd9ba4ab926', class: "mr-4" }, this.item_title), h("slot", { key: '2cc35d939c4e02d414981abc5e96c1ab79bb3e92', name: "title" })), this.subtitle && (h("span", { key: '519b88c14ffb21c5e6f1253bfbfbbc08e5b23a92', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'fed5be26921a0162ebf922a3d121651d10178932', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '450e3b0c2130fa10bf83b904803e9a321a418988' }), this.content && (h("span", { key: '26f39c5b958a917e63586dc423d3877b0d8db89d', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
