import { r as registerInstance, h, H as Host } from './index-23Nz5eZw.js';

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
        return (h(Host, { key: '3af4ac0116a2f478c166ab0e1967e30effbacdf4', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: '8388650df82cecb1bc011bdb846126bbb8b24ae4', class: "flex flex-grow flex-col" }, h("div", { key: '34b604e189412cbdbeb093e254e03d50049abb0e', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '1557bb3629dd6b46885184cae20c5415a46e92ce', class: "fill-light" }, h("slot", { key: 'b113c978c7d40861d13021efbacdcbdeeb6c0c74', name: "icon" })), this.item_prefix && (h("span", { key: '7c004b3d947079193d226b05244ef33d3ab3e77e', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'd0339d958ab1b995bec4d339f5b00496843b9416', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'b507d77b12919313d9c402470aa000d8c5333659', class: "flex flex-row font-normal" }, h("span", { key: '3de7d9c3354b488b415664f4ec6328e10b30fc79', class: "mr-4" }, this.item_title), h("slot", { key: '42b4c1da58596985672717036d15ca7e40e7b809', name: "title" })), this.subtitle && (h("span", { key: 'c7d3d304ca4f25b9d6f9ba8a8b0d4a18292254e2', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '83c8b5bb56f5962d9744c55a809f4d51282d83d1', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: 'd19347e4e1b1fe243456628b0784476d5087c768' }), this.content && (h("span", { key: 'da4f1b8de2d0cc00480d61f7f2a3f36a8b80f192', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
