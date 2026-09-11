import { r as registerInstance, h, H as Host } from './index-BQ4XN8sR.js';

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
        return (h(Host, { key: 'd73b4d80315942e72c85d645103498a409935fc9', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: 'a63de414a17d9d68548d1c343f3d21a060e568f4', class: "fill-light mr-8 ml-16" }, h("slot", { key: '3df228a865a06cc3476c06084421f62bafc2423f', name: "icon" })), h("div", { key: 'e3d007e0f49fe938fa132119c11f0f167f1fe8c8', class: "flex flex-grow flex-col py-8" }, h("div", { key: '3c721259af5635e4fbfb20694084a339fe5d2f27', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '3c6e35851198e297593ada90e45acba6bf8b81d2', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: 'e9d5a6308243370cb4fbed9af8a9cbc5194b02b8', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'ccc5a1d9d376d1742e41229a9c19b8bb2d64afa2', class: "flex flex-row" }, this.item_title && (h("span", { key: 'c2e19ce6a1301c596775fa225dc8ca0d2ab25b9d', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'c47906f5b3ca60eed3fe928ded5673ae0de6c571', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '9de50b24ae041ad92f2569b5bd181fa5389c4eec', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '68ecb670c30a7727a0153084ce6ea45a91f5f0cb', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '22b4d730ce8c3734d27bd68ad1d927ebcbb119d6', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '09dc03b224e94ef9294fa8a964d880c518983ef7' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
