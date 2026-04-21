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
        return (h(Host, { key: 'b63f0b429f0a7de535082f9717b4ddb51092b88d', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-subtle flex items-center gap-3 border-b` }, h("div", { key: '55474f8fb230b4412f98750bbec157f72842a498', class: "flex flex-grow flex-col" }, h("div", { key: '619b50057208be2dabdad332cb6478badbb82328', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: 'b08de5efcfc73eb65ea0d19708e4315817a611bf', class: "material-icons text-muted items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: '6fde7c022841c94f66aabe2fa2f82e86a9548e60', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '4a4b930dd16cc2928694f17e0e4ba956cc6d956e', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '2ab22f8db096ad3e41f39c03fd78b4d9aa9d7001', class: "flex flex-row font-normal" }, h("span", { key: '800bfd04be430d0674031b2025ca185cb772ac8d', class: "mr-4" }, this.item_title), h("slot", { key: '318a843cb522422b819d813a8a59d8c0d4280b4b', name: "title" })), this.subtitle && (h("span", { key: '7f668b1d6b5fa264f61e81d4734896b8a44c1e1c', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '5b954fa1e15482f585affaf575ebb82d510bc64b', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '5651ed60b735a4142758f9f99550e9ee687e9bda' }), this.content && (h("span", { key: 'd7c6ce816f8a91c14b9f2cc339ad1dec998aabdc', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
