import { r as registerInstance, h, H as Host } from './index-8kq1vl9Q.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
};
const AtuiListItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Size of the list item.
         */
        this.size = 'sm';
        /**
         * Border below the list item.
         */
        this.border = true;
    }
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '205f598ecf8b72faa1a35ddb0298ec46df8c4bcb', class: `flex flex-row items-center justify-between gap-16 ${this.sizeClasses} ${this.border ? 'border-b' : ''} rounded outline-none outline-0 outline-active-light hover:cursor-pointer hover:bg-surface-1 focus:bg-surface-1 focus:outline-2` }, h("div", { key: '24383bf4b6ebb82ee748795b2d756c86d3e33f3e', class: "flex flex-grow flex-col" }, h("div", { key: '40d2cf3b89fca463db5f869788d9638d0004429c', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: '6d80671f2cf571f87ad1a00a57f1b22aee6ced52', class: "material-icons items-center text-sm text-light" }, this.icon)), this.item_prefix && (h("span", { key: '05cb94724ab05eda3edd826df5c467d24134f730', class: "mr-[4px] font-normal text-med" }, this.item_prefix)), h("span", { key: '3abb95e5ac64a9e61cd1ed4f892285395ef14cc6', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '69a505cdaf173b9ed14f9abdae33eb5303316811', class: "flex flex-row font-normal" }, h("span", { key: 'f4fc06cb90582fca7a208f9444686b1e4b60cced', class: "mr-4" }, this.item_title), h("slot", { key: 'd7e678a4916d1fc469a87be2f6f7c9563581ef2c', name: "badge" })), this.subtitle && (h("span", { key: '16f9f322ed3ea6d814c9fd8412e40a62ee61571a', class: "inline text-sm font-normal text-med", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'fb08dd6813587f886d1461caf83134806033e6aa', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '965988778ad7e72c8f7a0cf7b924878bde284897' }), this.content && (h("span", { key: '05a87e875bebbdfe793083bf1d4ca31f97225c15', "data-name": "content" }, this.content)))));
    }
};

export { AtuiListItem as atui_list_item };
//# sourceMappingURL=atui-list-item.entry.js.map

//# sourceMappingURL=atui-list-item.entry.js.map