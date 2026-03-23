import { r as registerInstance, h, H as Host } from './index-CkS36Ijo.js';

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
     * Applied styling for hover background color and cursor.
     */
    selectable = false;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '84dc9c5e02f150741183b58cbea7763a3c22f69e', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-light flex items-center gap-3 border-b` }, h("div", { key: '4bbbc94fb37c3687526177b715297aad8f80967c', class: "flex flex-grow flex-col" }, h("div", { key: '68e8e853c89f753d47a41271a1107fb2e82f75f4', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: '548b1e83a2ec4365bbebc53955d68bf0b4af9f5c', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: 'e68dbd0ab671688950d4b857a9f5c215027d5df9', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'a1e78d3e085f3010fec219e88bef10c97bf799ef', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '64e4ad448efbd484663f4b86b3cf40a2c5328254', class: "flex flex-row font-normal" }, h("span", { key: '6f9f7d4bfd02bf7fffe4f455e7b63be08d5c3947', class: "mr-4" }, this.item_title), h("slot", { key: 'de95fb9a8d9b8f6e602e870c91f91e71c2df4c52', name: "title" })), this.subtitle && (h("span", { key: 'e8dba07cb2069a24624859a98d3b87a89276b041', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '86197a416d4cb134260a87c7524a5768abffb7fa', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '3b41954403084eefb95bb4f7028db2bac8b41f03' }), this.content && (h("span", { key: 'd1ba8c5d0b32ad9a85d606900050aad1735edb25', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
