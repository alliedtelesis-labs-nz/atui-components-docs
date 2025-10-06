import { r as registerInstance, h, H as Host } from './index-B5bw8iR3.js';

const listItemVariants = {
    xs: 'min-h-16 text-sm',
    sm: 'min-h-[32px] text-sm',
    md: 'min-h-[40px] text-body',
    lg: 'min-h-[48px] text-body',
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
     * Border below the list item.
     */
    border = true;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '5b686333cab7f80bece9e094da16a664b34cb44a', class: `flex flex-row items-center justify-between gap-16 ${this.sizeClasses} ${this.border ? 'border-b' : ''} outline-active-light hover:bg-surface-1 focus:bg-surface-1 rounded outline-0 outline-none hover:cursor-pointer focus:outline-2` }, h("div", { key: 'c962993ca60093006518c9e04e562bcf445557c2', class: "flex flex-grow flex-col" }, h("div", { key: '7727de2bf3a52a62a24bce585e10e58e386a4222', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, this.icon && (h("span", { key: '9d08e32f2efe4653e638b04353fc90f05e60d47a', class: "material-icons text-light items-center text-sm" }, this.icon)), this.item_prefix && (h("span", { key: 'adfcebcc950a049324fab14b7ab534ff6e4766a2', class: "text-med mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'e3053b941cdc34e8ffa5aa5b4e43712b0b58a201', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'aac778407622426454c290f0cde3ad925c271517', class: "flex flex-row font-normal" }, h("span", { key: 'dc19c267a1a56383e17cb1f682c2e399fed145bf', class: "mr-4" }, this.item_title), h("slot", { key: '523a0328e651862bd49e8157676863a62d4d588a', name: "badge" })), this.subtitle && (h("span", { key: '0152bc1f496af25d67345838ee989ed4ff8fb57b', class: "text-med inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '9c9fc8f8fd92106eebc45a184194f55d1ab81e9a', class: "flex flex-wrap items-end justify-end gap-8" }, h("slot", { key: '52809cb2ae7ea210cae1a7d3760b540b8829234c' }), this.content && (h("span", { key: '4a6121c7c895ddbacb8a32e7c2882726d833f168', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
//# sourceMappingURL=at-list-item.entry.js.map
