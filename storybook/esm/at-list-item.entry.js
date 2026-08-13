import { r as registerInstance, h, H as Host } from './index-3yf7vLYE.js';

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
        return (h(Host, { key: '94d6616e7d9cbdd555aa05d27a8e9c941403b2f3', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, h("div", { key: 'bb5fbd3ba779dfba0f83c73bcd2f47eea4a28fea', class: "flex flex-grow flex-col" }, h("div", { key: '26432f54d04d437d7b0b752c23ec6d6074e141a3', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '85f4cae2d4d511feccf4360f6e43592fb5c89afa', class: "fill-light" }, h("slot", { key: '19674448b80aa48fffc558027a3fd355740effbc', name: "icon" })), this.item_prefix && (h("span", { key: 'd5149c5e3c2224c4207f72648303c647d37975d2', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), h("span", { key: '51a3f389ec5c1d9689c5d06227da2cf4985f695c', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '3e1fdde25253b6e06f399da1be2a2e801078bbdd', class: "flex flex-row font-normal" }, h("span", { key: 'e9a4bf11b6d2dd5a33eda5419b1e47c860234c4c', class: "mr-4" }, this.item_title), h("slot", { key: '1e121bc68bd1a381277f22dd7ae745c4bd754fd5', name: "title" })), this.subtitle && (h("span", { key: '73dd2ddc975fae2fbc7ecf58656529598b684dd2', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'aadb439ba9d553bf24b5a6b3d7900467719fb4cf', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, h("slot", { key: 'eff5969f9ee24653cf1210438bda280ef99d6865' }), this.content && (h("span", { key: 'cc30b2afa4102dc5b347dd50536bf9d18ae0ce21', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
