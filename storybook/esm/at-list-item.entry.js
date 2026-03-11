import { r as registerInstance, h, H as Host } from './index-jvbUuQtg.js';

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
        return (h(Host, { key: 'f63f987cf065462da9c10eefe983897c8f5672aa', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-light flex items-center gap-3 border-b` }, h("div", { key: '6c0ef19eb0481d5bb9d98183e72f8bf6572caf53', class: "flex flex-grow flex-col" }, h("div", { key: 'af461ee9e8001a37a801034e057af34576840169', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: '67e6d102e5286ba8ac3ab8506e579b3717cc2271', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: '0cd41527a1bf97283e14c81b84764c234c46e900', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '81441d29b4f21cf3a4a2006be05ef843b3de3559', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '7d01d88c509643dddf2294b2bd457a489fe96700', class: "flex flex-row font-normal" }, h("span", { key: '6cf39bf58cda10c8aae6699c27aabd613a377447', class: "mr-4" }, this.item_title), h("slot", { key: 'c91773167650358150376982c4146a9dd0dde06d', name: "title" })), this.subtitle && (h("span", { key: '462cbbf5649831b06dfaff89bff1dde9bbfd0b42', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '2427dbc01a3b01cf6603f7b959050e92f8c0eaee', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '75d889c130e1bf5d9e1d8c4295985c12f0044f47' }), this.content && (h("span", { key: '32e1d5b3400b67e0e4dab84424bdcccd5844a77e', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
