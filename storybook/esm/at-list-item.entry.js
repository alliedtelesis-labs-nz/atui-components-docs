import { r as registerInstance, h, H as Host } from './index-8e2OpwTu.js';

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
        return (h(Host, { key: '2c29c6c5ea2e3371dfd9119033c60cc103dc98a2', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: 'f234255e1a9c757fde780a3cb1425d226bd751e8', class: "flex flex-grow flex-col" }, h("div", { key: 'b6a02bb91b4ef2ac0d7a2ec3406643e3622720a3', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '29c03b8d9581b76d90486d2bad68be287eb656dd', class: "fill-light" }, h("slot", { key: '970f84e06d88217cf2e72d1db3536e5b580365c5', name: "icon" })), this.item_prefix && (h("span", { key: 'e6ac0dcc67648fa88bb61f4bf0875358eeabbc7f', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '4b3f6e50a7f9f3c95db7e9f5920839496201dbc9', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'e65f3605e152d2b56663d406294bdaccc3a5ade7', class: "flex flex-row font-normal" }, h("span", { key: 'a5dde4181c268ac69923aedebfb4661844b7806f', class: "mr-4" }, this.item_title), h("slot", { key: '9fbdf39ad7ccc885165ecca576026a65ac926a00', name: "title" })), this.subtitle && (h("span", { key: 'c215508d28093dbe6f2e2fdb84a6689b13c0826d', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'd2efb4b6dfd72623e8cbaa5dff00a1710451841d', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '2819ea9ce5ed576ea2afd9310042fde175466adb' }), this.content && (h("span", { key: '8f36bca115287876606e85ab4028afb2ea7469d1', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
