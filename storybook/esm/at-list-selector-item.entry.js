import { r as registerInstance, h, H as Host } from './index-_QbJz5mf.js';

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
        return (h(Host, { key: '2e879bdb37f7220018ba0ba867c631d735ac2f6a', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: 'd4936aced75129bd5f67c139adb67d3a2f8a8d80', class: "fill-light mr-8 ml-16" }, h("slot", { key: '25c0d13352d1a7840a75f8ad1b1a8c7a2c3bfde0', name: "icon" })), h("div", { key: '0e942672626789f1e329c6542039dc3e522ed41d', class: "flex flex-grow flex-col py-8" }, h("div", { key: 'b9dcbb0d2ba32f4ac57e203712cd3ca47fe55413', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: 'ac23d4ce548976838089bdf9d4fb3b3785f5a8a1', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '034add1599c26c0d8f7efe8177a59c0b4d441491', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '8a1fdad0045de678ea8abf7e2ae09e6124e05b26', class: "flex flex-row" }, this.item_title && (h("span", { key: 'cad723cd5216d01e9775223382af8b429148d646', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'd5ca5e59ba8378a5750629f4bc1a67d9dc149383', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: 'adc50622e07e25a3ce1d54bbd75501d995c58188', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '80ef5b82bc8d3bfa1f121aaf0805e12100caf3ca', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: '3120c9b65fa0fcb297568f7aeb9e3d5f2f7a8975', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: 'a5d7e219395354bb2e30a66080d98d47ba3bfdbe' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
