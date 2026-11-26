import { r as registerInstance, h, H as Host } from './index-DTCxn2cp.js';

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
        return (h(Host, { key: '3a206b9117512ec284b85a4c60113eb90d457f73', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: '1ef6966eed304e47597f394a6a7d6c390cfb4471', class: "mr-8 ml-16" }, h("slot", { key: 'b450f82b56e6a6befebd6b74681574f9b1439239', name: "icon" })), h("div", { key: '701726d25d29a4d4a58831f1680a4e1e9db8f3bd', class: "flex min-w-0 flex-grow flex-col py-8" }, h("div", { key: '895d9553240af73bd8a3ec3385ad31b8bad0b580', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '63b6ef5488b55e3d0d5dab75b0c19be5124547e6', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '1954a198ed8f1d0a5d7547fcf376d2c239c4523f', class: `text-body flex min-w-0 flex-grow overflow-hidden pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '1837904de42ddb1315daa81482a1e8aa20d77b5f', class: "flex min-w-0 flex-row" }, this.item_title && (h("span", { key: 'd4953dbe37a5d57375f130890a45bb16ff024ade', "data-name": "item-title", class: "line-clamp-2 min-w-0 flex-1 break-words whitespace-normal" }, `${this.item_title} `)), h("slot", { key: 'bf71f27f546561c25840ac3184d2dc5c16772a9f', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '028c4eebc7252043ef2eacdafa1a82fa127b879f', class: "text-body text-secondary overflow-hidden font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '9a9103baa2a4c97c0534bd18430635cd37f3a55c', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'afb9ab049de14ac14a0dc25dc6286c0f5e5cc815', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'd4f500193ad72d316bdcef0a4ced3fbc226702ae' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
