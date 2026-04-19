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
     * Optional icon shown to the left of the list item - use mat-icon name.
     */
    icon;
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
        return (h(Host, { key: '2cc4f164429c3f2a3a259619ac0515e5508dfef3', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-light flex items-center gap-3 border-b` }, h("div", { key: 'b2f70bad5ff916e1e93cd1ea4553e3bd75361c67', class: "flex flex-grow flex-col" }, h("div", { key: '1a5f43369e91a17f5ee7cc93597ab4ad0b755c83', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: 'c23db3c296fef9a516e2cef185320ee8426c5312', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: 'fbb99bed3ef15bd204fcb5d8ecbfe41182b84689', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '571e510e6f3fbdaea6e62e196b1a17008559f89b', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '7e6739cd5ecab1694f23466d3464f761aad4b094', class: "flex flex-row font-normal" }, h("span", { key: '2bef8a66e58e74ca8b0cf0ac8acad45eac98de8b', class: "mr-4" }, this.item_title), h("slot", { key: '29d28c278f3c9e20f4f48575fe089766f7a513df', name: "title" })), this.subtitle && (h("span", { key: '029f2d477046ccc0d52887d2eb342bca6d736a2c', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '3e941256f2e4e195045948dd533bb5399fa13103', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '81a36bd84834c689dee4391b1385bd235778ed1d' }), this.content && (h("span", { key: '6e5c2c0e01e7599ea3b2c6ee264530907ede17ec', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
