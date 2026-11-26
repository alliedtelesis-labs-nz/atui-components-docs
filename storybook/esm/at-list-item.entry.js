import { r as registerInstance, a as getElement, f as forceUpdate, h, H as Host } from './index-DTCxn2cp.js';

// Vertical padding only: the container (e.g. `at-card`, which already applies
// 16px of content padding) owns the horizontal inset, so rows sit flush with the
// container's title and other content.
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
     * Applied styling for hover background color and cursor. Makes the item focusable, and Enter or
     * Space activates it as a click does.
     */
    selectable = false;
    get el() { return getElement(this); }
    hasLoaded = false;
    componentDidLoad() {
        this.hasLoaded = true;
    }
    connectedCallback() {
        if (this.hasLoaded) {
            forceUpdate(this);
        }
    }
    get inList() {
        const parent = this.el.parentElement;
        return (!!parent &&
            (parent.getAttribute('role') === 'list' ||
                parent.tagName === 'UL' ||
                parent.tagName === 'OL'));
    }
    handleKeyDown(event) {
        if (!this.selectable || event.target !== this.el)
            return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.el.click();
        }
    }
    showTitleWhenTruncated(event) {
        const span = event.currentTarget;
        span.title =
            span.scrollWidth > span.clientWidth ? (this.item_title ?? '') : '';
    }
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (h(Host, { key: '92c7318298fac8cb1aa2d37e8f3a2c97e031bf51', role: this.inList
                ? 'listitem'
                : this.selectable
                    ? 'button'
                    : undefined, tabIndex: this.selectable ? 0 : undefined, onKeyDown: (event) => this.handleKeyDown(event), class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, h("div", { key: 'f9c48f838eea567b1d60782f87d9ace11f736b96', class: "flex max-w-[60%] min-w-0 shrink-0 flex-col", "data-name": "list-item-details" }, h("div", { key: '632263cceb45d8b0685d99bae683a4ecee79e3b2', class: "flex min-w-0 items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '8bd690dcbd1b6c5b1fd1ed9b40b9bb2de727a41d' }, h("slot", { key: '2b95ff70a48cedd1a8dc6d0008b5a0f415d6da82', name: "icon" })), this.item_prefix && (h("span", { key: 'a3f7c1ec40924dd475cb414b8967e06317a24489', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), h("span", { key: '84520ad51bebe9ad9bdb2020202049ff45931bf3', class: `flex min-w-0 flex-grow pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'ec1745bdadf0aa6ee69096e7ab4d21f254505d4c', class: "flex max-w-full min-w-0 shrink-0 flex-row font-normal" }, h("span", { key: '3404deb8137f06e6a30db3d55e15f6d7c305b7e2', class: "mr-4 truncate", "data-name": "title", onMouseEnter: (event) => this.showTitleWhenTruncated(event) }, this.item_title), h("slot", { key: 'cc1dd3dab6e578bbaaa107e822bd5325383ec75f', name: "title" })), this.subtitle && (h("span", { key: '536bb70424290ab0881cfac16e9b570663ce5e78', class: "text-secondary inline min-w-0 truncate text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: '1be11cd60d5dc48aba5e7cb5fca5be92b1e20fa1', class: "flex min-w-0 flex-1 flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, h("slot", { key: '0f7dea8224d0e9d87116addb03d851ddf5cbe7d8' }), this.content && (h("span", { key: 'ab278660ea254503822dfe91c548917488a28d46', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
