import { r as registerInstance, h, H as Host } from './index-DW9Wz0FM.js';

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
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
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
        return (h(Host, { key: '6cda6e7ceaca17e5b7ef10211e4bf3da3bb139ff', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '7b75a59ba03342ea410d31c2580caacf4c83f0e1', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: '0ae14885c7a58107c9acc00a10904f4f072b442e', class: "flex flex-grow flex-col py-8" }, h("div", { key: 'f0d0043e6c1bde47c908a410ad510a7a416ea32d', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '7657112591040fb50b3f75f6ad48d99c6a16f88d', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '1c59d36d0bea3bb87ffc09eecedddef15914fde4', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '83e17e281c914190f98b0db08983d4561edfd749', class: "flex flex-row" }, this.item_title && (h("span", { key: '8367ef6ee25105ec7e9be970346301346751543a', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '05a603854e2c3bb126df90ccdfd637e7e7da84bb', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '631a0c239a61e9857232c5908840eec6866b9823', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '106bf76886b194cae95778acbfa41f65ce201065', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '55397727ddc88809589ab3faea1fa996bae31824', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'cf7b6e38b0c79ab12bc5fde97340e0a32c53a5cb' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
