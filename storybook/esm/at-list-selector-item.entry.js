import { r as registerInstance, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: 'ebe20b428ec81dd40c81f58ba1c9d4040c376536', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '466bd8a53ee2e3acd7db5cc0d5074450008c94ea', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: '531db90a8382b9135f03d796270191d461900ede', class: "flex flex-grow flex-col py-8" }, h("div", { key: '0979e5281ded657e28c89467e6828db1672fcf34', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '62bbe6aa7387222d75ef85dab71200546e2513d0', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: 'c2a0af5f09339bb6b545f799fefc8f2d4ad0f897', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'a568e321c69d06bf249b9dd1a150de12904309d6', class: "flex flex-row" }, this.item_title && (h("span", { key: '06531d0789be3e401200e3da12de89b5037eb66a', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'a4c10dce74e94766bc6af7b2fde5a32bd3d82815', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '636d2e6ce463edc73cbddbd9be41b667fefd0bf7', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: 'da9e44ba408c51150c3beea922ffd6c6d35365f7', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'd73236e74ac61e6bf1955ad8e8d87f2b84aa8f62', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '73da9e5bf1b5d3f7fff85f9606954a51b7fb4686' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
