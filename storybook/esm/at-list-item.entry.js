import { r as registerInstance, h, H as Host } from './index-CKYs7vaG.js';

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
        return (h(Host, { key: 'd8767fe694a6681ac774c60610b8a4759fbee95b', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: '1ebed33072a2ffb49cedcd7afcb488d74237e31c', class: "flex flex-grow flex-col" }, h("div", { key: 'a25bfa82e582c69db47363cf83832203bde43e81', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: 'c85c03f952e722f8f48b00ececfbb1cde054d551', class: "fill-light" }, h("slot", { key: 'eade821f8bcc3c6adf2dca96759c969f94ef5ab4', name: "icon" })), this.item_prefix && (h("span", { key: '940b9dc46c2a5b68d22cb8565afb9d040d3877f9', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'c645855c4e0fb301b363af81bc90f6be53cbb31c', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '008e9159594135b9e7121231c0a34ff8eb98ea7e', class: "flex flex-row font-normal" }, h("span", { key: '7934ce059b855f2feb661fd37139a5e0d4c7e6a9', class: "mr-4" }, this.item_title), h("slot", { key: '75c6c61c80e7663c90d3069450a1cb45a19bbfb3', name: "title" })), this.subtitle && (h("span", { key: '5839d19c240cb607e4b5c1d6cd50effe53fd9891', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '2422450d51bafb3f005738804dd86f5c8d1d5635', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: 'edffe129c94ac40c078617e6b37ca92114ad834b' }), this.content && (h("span", { key: '302c7044eb08646a2fc571be3dde4a6ae5fa8908', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
