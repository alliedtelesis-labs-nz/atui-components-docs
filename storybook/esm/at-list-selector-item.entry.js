import { r as registerInstance, h, H as Host } from './index-8e2OpwTu.js';

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
        return (h(Host, { key: '5683da3118880f3c465a0f2573c2c1f7a2cf6b61', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: '2ecf73204473b08b45dff5f19f2c2a2552193a83', class: "fill-light mr-8 ml-16" }, h("slot", { key: 'c25e42eb77e6e9e7a42a93c2d7e8d449b2f9aaa4', name: "icon" })), h("div", { key: 'e5ee967d4b7d1d4b0e647a5058dbe2eb12adbb86', class: "flex flex-grow flex-col py-8" }, h("div", { key: 'ef8b2378bff94d7a1ec7f011a1b78c557bfcca8f', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: 'bca09d4c67af4cba10db876a5d17811022cb3969', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: 'c75c86e7971ba683e863bf9a74c7e95cfcffce31', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'b3d2b0cfbee22153f5721c9cb70de7da48f63f5d', class: "flex flex-row" }, this.item_title && (h("span", { key: '81507d2201ed67709165e8b634a867c1886811a5', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '7f9c1c79953548fdc31e8cc6c8f12e4a8eafd678', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'fec0a4c6cda32cecdf39e3742942f7ec3b604a24', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '39759bcbfdd87f6248df8f0b361aaeb18ad1741c', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '6915b3b58b3cd1e89db43fc73d38bd45856a9499', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '447a85cbe15f8f64718a94445d61e1055ff98737' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
