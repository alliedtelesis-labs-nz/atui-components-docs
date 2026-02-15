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
        return (h(Host, { key: '125fce6aa6b299bc495d1dc959f09d424c1a87fc', role: "menuitem", class: `outline-active-light hover:bg-surface-1 focus:bg-surface-1 flex flex-row items-center rounded outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-surface-1 !text-active-dark' : ''} ${this.has_border ? 'border-b' : ''}` }, h("i", { key: '2ae3456fa1588591e09ae9cd077ac6513715078b', class: "material-icons text-light mr-8 ml-16 items-center text-sm", "data-name": "item-icon" }, this.icon), h("div", { key: '1e2b368c39cb638c91db0b0ea1dc4a216059ea08', class: "flex flex-grow flex-col py-8" }, h("div", { key: 'a4b84beff4477c90324d4eb91c933915f22b928d', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '3a997b5da04769d58f6478ea68610f9c65f38347', class: "text-body text-light mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '62871b43ab15b17644858cec26a15da69a03983b', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '172bb75ff9ae963905d696219d3c4e31b31a61cb', class: "flex flex-row" }, this.item_title && (h("span", { key: '8a962b4924bd02adb913436213bb1606ba6b1246', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: '698d3f64026052a32ab4c6a1151aed0f3ca8eedc', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '186788abe28b3329a776ff51dfb95c75e65085b1', class: `text-body font-normal ${this.is_selected ? 'text-active-dark' : 'text-med'}`, "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '9b0e8abe0a67ac78b1f13d5f31de87c677321083', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'fce5744f9fb24e49a8b5d21507859ea44ce97894', class: "text-med inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '761510f9ea5427ea1f08145661ba2b744e993fc2' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
