import { r as registerInstance, h, H as Host } from './index-CT99rxub.js';

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
        return (h(Host, { key: 'bd29a2011510be6355572835e9094529de07d9ef', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: '64e93d0856abe0b6070037c64d0249f72682a395', class: "flex flex-grow flex-col" }, h("div", { key: '5eaefe6361501e3f4ac320e28bb002d4bfc32311', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: 'dc4d975c78a7601f7099678ec14c14554b8d0875', class: "fill-light" }, h("slot", { key: 'db4f28ceb5f2c6f0fb541c113319b46b95b092e2', name: "icon" })), this.item_prefix && (h("span", { key: '1eff3a65ebb5130aeaab05ac18dbcda31df4a1a2', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '5c07ff6141f93a6b2159536e6527791e3087ecab', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'e7dc31a254fbbb462e5a4e1e95e353dca813220c', class: "flex flex-row font-normal" }, h("span", { key: '17a038670853ad1aa25c205ccc3e185387c2df9e', class: "mr-4" }, this.item_title), h("slot", { key: '1d7d45e0f10393644d0c6cc3e88fb3d688b17cb5', name: "title" })), this.subtitle && (h("span", { key: '74eb1546d54ad5aeab99287aa6fcc5ab99fe8dbb', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '18f0c8a5b26be50244393a7adc6462bdbeaacb1b', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '3e983e11a4b6e3a3781e0159094f6ac08791fb6f' }), this.content && (h("span", { key: '8c2425e6996b7a18e8f53733c5e8ecf6fac0e8df', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
