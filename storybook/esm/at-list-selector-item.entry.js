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
        return (h(Host, { key: '72f743b83764761c66359038690415709a9d341b', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: 'e9ebe5cd3d132bec95940272e1062248afd2db56', class: "fill-light mr-8 ml-16" }, h("slot", { key: '5f71c12e749631dc2879383faf37c62f84c71729', name: "icon" })), h("div", { key: 'ae813222df4ac89c92b0615f642abe2db4486089', class: "flex flex-grow flex-col py-8" }, h("div", { key: '8216594e6ba068c331ae45b83c5e6af330373c7e', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '584dbd42489afe4706128b8082b488cbf7920aa5', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: 'e7993df7b15e2030d5d92c2a300bb7a9c9335866', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'c6c4cd2bfcef7eb5b7c3e1e01e0526bf4a1ba843', class: "flex flex-row" }, this.item_title && (h("span", { key: 'cca52fb02457b5c1dd7ae4eb176d509285f250ec', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '006015bff22dae307ed089c3fd787a6ee1ea3be0', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'fcfc46e62a1b24c0a4fd8257f6b9d8a78f34c97e', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '3f755fe935116340257e0b1b4402bc0a830c47d1', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'cd7b089aa7c4ce20dfe435cf28eacec29b099c78', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'c0f44a2bdb6475fecc8c93782c499f1c7f546dab' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
