import { r as registerInstance, h, H as Host } from './index-HD-uhvb8.js';

// Vertical padding only — the container (e.g. `at-card`, which already applies
// 16px of content padding) owns the horizontal inset, so rows sit flush with the
// container's title and other content instead of being double-indented.
const listItemVariants = {
    xs: 'min-h-16 text-sm py-4',
    sm: 'min-h-[32px] text-sm py-4',
    md: 'min-h-[40px] text-body py-4',
    lg: 'min-h-[48px] text-body py-4',
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
        return (h(Host, { key: 'e1b52eed6c27cf7119551d7298703305c85dfde9', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: 'cec47d28a488427e1a6df97a27f56c47aa8a51d7', class: "flex flex-grow flex-col" }, h("div", { key: 'b2f4c9fa643ac152c3656187bc4564c0185df585', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '468559ca5f3796b9feaa110f67cd6fd5c2b6b9b0', class: "fill-light" }, h("slot", { key: '4483612f6630483d6ea756e994fe7002c8e35613', name: "icon" })), this.item_prefix && (h("span", { key: 'd14d5efa53c9daf14910734b63375f090e09e2af', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'e0e254f687b0a9c077e6a983d16aa5c07f8e10ee', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'a8af873b30cac7a2d474a1d15b104f88640664d8', class: "flex flex-row font-normal" }, h("span", { key: '1be8d2eff4d3381d54c975ce3f9fa8630c798f39', class: "mr-4" }, this.item_title), h("slot", { key: 'cc1b3f9c32c5f9f40869a6596d816a1d8bcf0373', name: "title" })), this.subtitle && (h("span", { key: '896f25fd22f3ad9e004e2523a5c3931f2ce1deee', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'f828cd9f59245ac446800826ed8efaedebb0635d', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: 'b1eee4110d2479c55092fe387cfd9512b29b396d' }), this.content && (h("span", { key: '6c4b5ffea31e6448c4424e9bdbdb5adec208cc8c', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
