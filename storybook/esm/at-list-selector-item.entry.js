import { r as registerInstance, h, H as Host } from './index-DVWT6VvQ.js';

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
        return (h(Host, { key: '115b76ccb72f0be0c9619f6620d3e823e818864d', role: "menuitem", class: `outline-active-light hover:bg-surface-overlay/10 focus:bg-surface-overlay/20 rounded-menu-item flex flex-row items-center outline-0 outline-none hover:cursor-pointer focus:outline-2 ${this.is_selected ? 'bg-active-background !text-active-foreground' : ''} ${this.has_border ? 'border-muted border-b' : ''}` }, h("span", { key: 'd091745ac047ca67627af394b4e4258830df9736', class: "fill-light mr-8 ml-16" }, h("slot", { key: 'ebff80c8b23ca8d1a266a848fe218acb1214aaab', name: "icon" })), h("div", { key: '112fe44079dc4c5aecd74adda3ff4faca9115b86', class: "flex flex-grow flex-col py-8" }, h("div", { key: '50ef5c6b9e5ba3b5f694346b0032749d5a4e90aa', class: "text-body flex items-center font-medium whitespace-nowrap" }, this.item_prefix && (h("span", { key: '4878cf2138b4de0e96574ac6a4bd1f17a0166ee5', class: "text-body text-muted mr-[16px] font-normal", "data-name": "item-prefix" }, this.item_prefix)), h("span", { key: '52f5412336c535d8039c8b392874e3e4724fef31', class: `text-body flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '0f1e58c45d2edf3f0e345129d5b3bcb21214eaca', class: "flex flex-row" }, this.item_title && (h("span", { key: '3b0f775e519423faf4965e006838badd23e0a7e3', "data-name": "item-title" }, `${this.item_title} `)), h("slot", { key: 'd80dc766b896a1bc51f5de25661b6e90ce7843e5', name: "badge" })), this.item_prefix && this.subtitle && (h("span", { key: '4bee474aa724a436d5681f849c1431f95ed07676', class: "text-body text-secondary font-normal", "data-name": "item-subtitle-when-prefix-exists" }, `${this.subtitle}`))), h("slot", { key: '9311c9d60326c26767560dd10f5762aea2c1e9be', name: "info" })), this.subtitle && !this.item_prefix && (h("span", { key: 'b96aa4e767b4d233446699ced088e7dfc5fb39a1', class: "text-secondary inline text-sm font-normal", "data-name": "item-subtitle" }, this.subtitle))), h("slot", { key: '0d1612caa2a6d1912d541a8959898ccf97e79e3d' })));
    }
};

export { AtListSelectorItem as at_list_selector_item };
