import { r as registerInstance, h, H as Host } from './index-BAAX2Der.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm p-4',
    sm: 'min-h-[32px] text-sm p-4',
    md: 'min-h-[40px] text-body p-4',
    lg: 'min-h-[48px] text-body p-4',
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
        return (h(Host, { key: '0ff271b13da427f4ef009692123b37e5648294cf', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: '092e60eaf2475942c6671bb86176c3c0b9ed7eee', class: "flex flex-grow flex-col" }, h("div", { key: 'ae1eb837a74ea0cf6f3cf65a66b20389a3896e87', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '9fe60062cd0a2bc8637215f7e80e995a7db262b4', class: "fill-light" }, h("slot", { key: 'b6ed9b8c41f0997d9c671938d1006d83977bd09a', name: "icon" })), this.item_prefix && (h("span", { key: '9bb741c14f0eefd6420a271a9db4262a9cc8292b', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '102479e28fc6f48571954eee008f513e28759358', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'a54c73104f276f0f1cac1c7eece40c729dd58f81', class: "flex flex-row font-normal" }, h("span", { key: '5e68c955aa66e306382cdff9a29253ceeee0da8e', class: "mr-4" }, this.item_title), h("slot", { key: 'c1d0f3600826d3b982f093069be142203470ce53', name: "title" })), this.subtitle && (h("span", { key: 'fcb6be6fd98f422f0a4e88914f96664c7f20875b', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'faf61f81e89666f54d355779dba4f639bbe79f6d', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '9a965966b0a8ef6630706ff4095fdb7b5d82167c' }), this.content && (h("span", { key: '363e68a1edcad81b3745bda644b359ca3fd9f96f', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
