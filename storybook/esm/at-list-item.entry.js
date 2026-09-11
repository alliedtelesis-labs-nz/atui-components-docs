import { r as registerInstance, h, H as Host } from './index-BQ4XN8sR.js';

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
        return (h(Host, { key: '14c12b0d50e4003afb4c9cb58d2e3380ea867b04', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, h("div", { key: 'e1634f1e5e560361d16900e065f96f3bbe99aba5', class: "flex flex-grow flex-col", "data-name": "list-item-details" }, h("div", { key: 'cba211557fba4ed1723e1c8769aba4aaf3b5eb35', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '82461c7323cd8a0834c7749b8818f21acfdb06f0', class: "fill-light" }, h("slot", { key: '2ad2486a8436cd239280d89a35ed7f819ceed1ac', name: "icon" })), this.item_prefix && (h("span", { key: '80565d2fbfdc04961428905cdc875d623f1fca6b', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), h("span", { key: 'b6db171cdffe04fd02a4df74e3d174b837ab3df9', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'cbfd472ff332dfe84b30e3fc4b553c0c45407ee1', class: "flex flex-row font-normal" }, h("span", { key: '90eddcda680dc70cac0d879d42cf4422f52ec04a', class: "mr-4", "data-name": "title" }, this.item_title), h("slot", { key: '6f3cae203629a7b98d06ce77e7605df3f26a06c3', name: "title" })), this.subtitle && (h("span", { key: '6f7829af40429b66c2fc00432d6e243d2f31aef6', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'a4ac5721e1c221619903af7b6c7d94bcdfafc0d3', class: "flex flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, h("slot", { key: '6827f921ccaced384e136b4dd79b6c013249d4c0' }), this.content && (h("span", { key: '702965a225708c75eedf222ebcf94829a43a94c1', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
