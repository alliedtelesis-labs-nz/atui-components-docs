import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const AtListSelectorItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Id of the list item
     */
    item_id;
    /**
     * Title of the list item.
     */
    item_title;
    /**
     * Optional subtitle of the list item.
     */
    subtitle;
    /**
     * Optional prefix.
     */
    item_prefix;
    /**
     * Border below the list item.
     */
    has_border = false;
    /**
     * Visual indication of the selected item.
     */
    is_selected;
    render() {
        return (h(Host, { key: 'c22332e04547985bf6c7c4ee5ec3ec5dabeeae88', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: 'c886b9263e89a3dc6a1c7b8f63d60e782f1c0a24', class: "fill-light mr-8 ml-16" }, h("slot", { key: '63ffd9372ab2424915fdd0b9dadc6629ec04d35d', name: "icon" })), h("div", { key: '5a2f627da6cad0746194637fc9d2fba82f108d49', class: "flex flex-grow flex-col py-8" }, h("div", { key: '603761ed334a31ab41cc747e0e076c3ecfadd307', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: 'bc2a6ca0b14302ee46a1e925c2d11fca8842b5ad', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '6f7ba04f1812685a326754e6b2b08896bedfb818', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'af2b17965697639e5940f0ae44dc9294088d8746', class: "flex flex-row" }, this.item_title && (h("span", { key: '8181040fd4eed7d8ceb24f9b343629a569cd434b', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '4c6835387638c0322c8575c814e69843ab517119', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '132f726792ab17c0d13998379ebf962a53ca7470', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '654d9abde5f352184b379cfaaefd7cdc515179c2', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '67126016411f4aa59b0ac5693e353343a18ac13d', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'fbc08eca656da924a5807140f8c3c2b366d02034' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
