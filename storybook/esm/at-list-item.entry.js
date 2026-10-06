import { r as registerInstance, h, H as Host } from './index-Baj27LS8.js';

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
        return (h(Host, { key: '1e3b0ff2670a870f9b6e45c8f8acfd0d3b48c9f8', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, h("div", { key: '2f82def5528943481fa23b4af4cfac8482601d96', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, h("div", { key: '1e538e6a6a329849372838ec87becabe1bb8c15b', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: 'c5cc79a2797c99e6edb63b1d21a0b9d6f95aca57' }, h("slot", { key: 'fd51d58996cad0cacf8dcb5aedee9e04609c5099', name: "icon" })), this.item_prefix && (h("span", { key: '6634b92bb6c0ee3b26e28bad6db93894233531b3', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), h("span", { key: '4e259159fcc00377dd0589209b42bd14e80fc980', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '1c3d58f373a4442d4e6df8877028e66ae84d69bc', class: "flex flex-row font-normal" }, h("span", { key: '0c81bb12b2bb62ce6a8736b59ef0e09e4b5e64ea', class: "mr-4", "data-name": "title" }, this.item_title), h("slot", { key: 'd07ce5802cdb4660239e5ab818098709b14ce2fd', name: "title" })), this.subtitle && (h("span", { key: '1ad03061c4f3560701c830fe8d1e815fd2d4a73e', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'ce794f932e52bf97e700fb63b2ed3ab6d81c9106', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, h("slot", { key: 'd132abda5364162e539ac62c6d1c7c98502a4ba8' }), this.content && (h("span", { key: 'af59328a17f71ccf4536fa87a519d038019c87b7', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
