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
        return (h(Host, { key: 'c40a87df412ce5d61c347eaf3fadefb4b4328071', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: 'a48bcc78a40b7cabe68ced20fa18312e4c7ac1e2', class: "flex flex-grow flex-col" }, h("div", { key: 'a8b335fcdcb0b1d54abea00838af5f37c5362e44', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '4662d93759b064c36d2dff33a06f6d46802b0889', class: "fill-light" }, h("slot", { key: '80f4708538fdc4ab13e1d7b609f8a614723adba8', name: "icon" })), this.item_prefix && (h("span", { key: '6862f3582597bc424b0962c971ee6790a140bba0', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '20217760c4ca1e180e8634a2b2e0746ac48fa85c', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '4f456a67d6c3b35d63e590a5eeecf16d87991535', class: "flex flex-row font-normal" }, h("span", { key: 'db15b4b8b49839867d2aae34a61114f233177c1a', class: "mr-4" }, this.item_title), h("slot", { key: '914afa5870c8c66ea7faa0d651412349cf5967b3', name: "title" })), this.subtitle && (h("span", { key: '326cde5055fc9680ee31c9c9d50f4acf10a2c625', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'f3deae2081eeb03ddb41de75b80ccfcdb296089b', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '1016d3bf3f11960aa044a5e091cb4f255141496d' }), this.content && (h("span", { key: 'ce5ce0af4913a6c8227b532957a55c3933b66eb8', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
