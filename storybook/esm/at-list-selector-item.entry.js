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
        return (h(Host, { key: '3d6e89afcb8cf4d3e3bd962e1a6ec6fe07555633', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: '5ca4da89905956550691c9c0219f0bad1c0619f7', class: "fill-light mr-8 ml-16" }, h("slot", { key: 'daa5370a644dde81ab3c1209007fd8adf1236540', name: "icon" })), h("div", { key: '2cf34f2b60ee08f804e8aaa8068297d5f65d4636', class: "flex flex-grow flex-col py-8" }, h("div", { key: '26757629fa865ab0ed4699a2bd08c30272fee05e', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '07e8af038228e07273c32f9585662ff0a55534c2', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: 'ceed637b1bb67f4b7ebb46ce575a5a288ef119aa', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '4836b35b0fd2e82eb3e0539da7cb6697b79ba9e6', class: "flex flex-row" }, this.item_title && (h("span", { key: 'adf8444116d355955f21a38a479199cca22064cd', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '1140904a6cc278dfd6203a43cafef8eb67484ea4', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'fad01e7cba4a84e2cab7de27d96599df4f984986', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '2323d43bd49b4459c44871986f8376f31fd45e6b', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '0d1fc2d0de6839049aed4bc65d14a108ebaf0816', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'e93914b5d20fe04bc3dc2e48c6dbd66fc13d95a0' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
