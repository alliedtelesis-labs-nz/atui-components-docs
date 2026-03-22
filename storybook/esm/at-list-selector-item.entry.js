import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

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
        return (h(Host, { key: '75185d2c2e8f37a30f4f00163847d5014ee606a2', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: 'edf1a4c14743ca5c8c4c646228a0e9a3354ac82e', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: '7b761abbba0e66d718c258c528597721870e4a49', class: "flex flex-grow flex-col py-8" }, h("div", { key: 'cbb47dc319d4e698158a36a5b68d18ccf2d26bf2', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '71a85d999989c08ce13d13bf8f76a1bb7363402b', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '885451a702131858a66a80493ee5e535b26bf599', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '7989ce7db087ccf88f1c12e42bb71a4b1cac665b', class: "flex flex-row" }, this.item_title && (h("span", { key: 'db2e53e077447552d64d215c3000ba2b95db5025', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '92da4d11ed1f0b2f60e1e72856ec6ed2589e31d8', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'dc990a2b6a6606e3df7d3f530b6ade2720b54bd9', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '868cd20f9a017958bab3cb221d77c1a20af396b6', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'e5f8fef30634ff446da2b546cd599363777f9cbe', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'a575106a81636a0b64c3697d71a220b504e1ce1b' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
