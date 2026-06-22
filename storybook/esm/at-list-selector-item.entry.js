import { r as registerInstance, h, H as Host } from './index-B-1zT4Ec.js';

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
        return (h(Host, { key: 'aa735a2d4c964992889734124c6fffc4397ec8ad', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: 'dcb840d0a97de735266978858eeaab7668d6bfca', class: "fill-light mr-8 ml-16" }, h("slot", { key: '44a0ff5f7e3da8ce83560a90bd7e23f061f3345e', name: "icon" })), h("div", { key: 'f214138eb5282004ca6357ae1ee4166201dcee47', class: "flex flex-grow flex-col py-8" }, h("div", { key: 'c8990e5c1753603dffc8076368af7af4f9902b90', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '9acc242f174b8324ecf921a25ce5d43a07fc71aa', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '4c6fd8e5f3a24c01e5490a79e15c0cb37220e73f', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '535788c2be771f3cf2a2beeb5438e98eff43784e', class: "flex flex-row" }, this.item_title && (h("span", { key: 'd36918e7d22deaada37062c4d5903c8ca849ec5c', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '693310684454ca4058abd12b63b6d8953082ddf6', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'd46108045d0166f18aee6fe1e4379b05046527e2', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '2567af6357934247c59ea424fec8d7afc17f3f3a', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '4482f7141e5cb70632c5749c60d857437d47e4a2', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '6f8203f0d60d09bcc38facd59d4138752f668842' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
