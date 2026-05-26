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
        return (h(Host, { key: 'cbff4888105a6fee884687ae08d9f0d0126fd239', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: '0f48b8df18d063a7d14341dd9c3731187241d44b', class: "flex flex-grow flex-col" }, h("div", { key: 'f776b8dc8fee486993a17a3cd95f01fd8ad81d7d', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '52ccf0f25044c40158dc73ecffd57f1f0d766cf0', class: "fill-light" }, h("slot", { key: 'afda6efd7117cd4d84aff00c33e157e37d4200eb', name: "icon" })), this.item_prefix && (h("span", { key: 'c1a08952e9ccd389d18d08f53ca36d682c43167f', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '1c40ea32d592da32302fc9a21023c6677b06655d', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'ac0f82f38690652a4fbe27043092bcc541b193b8', class: "flex flex-row font-normal" }, h("span", { key: '726902fb74018cd4c9f29166aec6479a03f4feb5', class: "mr-4" }, this.item_title), h("slot", { key: '2409fb08c029206a4c4ae05067aa7c3387c2041b', name: "title" })), this.subtitle && (h("span", { key: '2d546a9aec73c8acdbd9246c1ace573467ed7581', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '360ce68d2cce2899c48ae1de29315d8329bd9f37', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: 'e79a41f9df33c799b0fccab6476272fb168b070b' }), this.content && (h("span", { key: 'bddeb0963c5debfb0e4a4749b4063d3a89817405', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
