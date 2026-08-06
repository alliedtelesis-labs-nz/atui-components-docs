import { r as registerInstance, h, H as Host } from './index-HD-uhvb8.js';

// Vertical padding only — the container (e.g. `at-card`, which already applies
// 16px of content padding) owns the horizontal inset, so rows sit flush with the
// container's title and other content instead of being double-indented.
const listItemVariants = {
    xs: 'min-h-16 text-sm py-4',
    sm: 'min-h-[32px] text-sm py-4',
    md: 'min-h-[40px] text-body py-4',
    lg: 'min-h-[48px] text-body py-4',
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
        return (h(Host, { key: '63ecaa4414261a0caa496b3b3179be4c93a2a109', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: '983bb7f109df20d42eb89b02c616e44622c70630', class: "flex flex-grow flex-col" }, h("div", { key: '97c882654f54741609eaafd8112c9968d4781992', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: 'b44657751e9af07bf45ecb6085b54a8bd10fdd76', class: "fill-light" }, h("slot", { key: 'c6f09c093c314da8a361c6a2169a82b76b37237c', name: "icon" })), this.item_prefix && (h("span", { key: '46eda7763e44a318f93f9aca9a6f8d39d4390651', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: 'dc7ac7706bf5b8b28e5d5f86d81a5d8f049d0f34', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '7f52e3297cdc6fc6b8c2cb09dd800b49ab6365f2', class: "flex flex-row font-normal" }, h("span", { key: '3930fb36177f8688d3d29a09a36d45e9c085d200', class: "mr-4" }, this.item_title), h("slot", { key: 'b990016780592865ef5dcb7b135c8a0e4bc0289e', name: "title" })), this.subtitle && (h("span", { key: 'f9439f86ae8260a8b90f9252829ee532ab3fddf3', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '83de75fcee201df942a07e44a937200e68db2720', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: '9d8f9f30991b870c610d6947b186b67c8a335449' }), this.content && (h("span", { key: '7802f7921bba0b0deef6ec8e073701c4a39f1459', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
