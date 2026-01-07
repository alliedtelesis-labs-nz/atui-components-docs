import { r as registerInstance, h, H as Host } from './index-7z-rGOwX.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
const AtListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'ca59a07938b4a8752f465e959772d81cc800746f', role: "listitem", tabIndex: 0, class: "hover:bg-surface-1 flex items-center gap-3 px-4 py-3" }, h("div", { key: '5c089b9bbfed407a80186e2047b2e7f1e339d4ef', class: "flex flex-grow flex-col" }, h("div", { key: 'a031c1ce4ee474fb5c489c6133a7244fa62f03e8', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: '113d2377945f9b479c7a6cfe7aea650f7963dc3a', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: '7dc54ac345e06309e9a133f95018d9ef2a94b618', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '63a7ffb23649624461e759f616e3529f40278bf6', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '25d5cfba857f254e9dd1604ef2eac95016e4c97e', class: "flex flex-row font-normal" }, h("span", { key: 'ef25f0905faf1ca4cc80615a7cb807525710ebfb', class: "mr-4" }, this.item_title), h("slot", { key: '4a0d329490d652a7bd98bd79b13a7768153b3e1e', name: "title" })), this.subtitle && (h("span", { key: 'aaa71e6f81ce7289e6780a191701596a088afb63', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '1e2d2115e1e9bce6edea9c2343052e74c3bff20e', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '782bfd10d37e1c29fa4b61e0a8a0954ae3c8c200' }), this.content && (h("span", { key: '05991aaeaa7bc2bbe9255097be41ed3fbfb02cd6', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
