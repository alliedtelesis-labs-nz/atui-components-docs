import { r as registerInstance, h, H as Host } from './index-D_TsKqPT.js';

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
        return (h(Host, { key: '8406c54a421c95d8c1911e082fa682e8221ed7a1', role: "listitem", tabIndex: 0, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: 'e1a686327ff41f1fc49f02b723b33c7ba1f5eca5', class: "flex flex-grow flex-col" }, h("div", { key: '95c80e22ac9aa079f44de1c330f9944f1c9e05d8', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '83c2b7ecb5c750cceab0ea1d9c7bb953a5ecb9c3', class: "fill-light" }, h("slot", { key: '66f4b492cbdf6b30f61fc2421197e1cf44785eba', name: "icon" })), this.item_prefix && (h("span", { key: '6f7427bfbc4fa33e2c95696136bd6e0fd1da1593', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '49904ec3eacdf59faa6f2eb556e0922dc182e6f2', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'f1c36e31bd93581624edf726c27b428aea2b4a38', class: "flex flex-row font-normal" }, h("span", { key: '6fcb4ffeaa0fd7516b493b3720d88a6db7ed4700', class: "mr-4" }, this.item_title), h("slot", { key: 'df97f7acc5da5e65b34cdffdc6408d72d49c7838', name: "title" })), this.subtitle && (h("span", { key: 'd647aee1583aeb48597ba12c1075fa83c4245373', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '896f3c67598d1b8b1d5269a2e90bcd4cb96e8bfc', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '4ed6a08dc8607a14ffd85bfa7206d09f29d53b00' }), this.content && (h("span", { key: 'de2f2422267ff82f56b7971ee44252b7930372ad', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
