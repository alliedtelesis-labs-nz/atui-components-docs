import { r as registerInstance, a as getElement, f as forceUpdate, h, H as Host } from './index-DTcI15Wk.js';

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
        return (h(Host, { key: '3eccc4f11390fe646ca59793bd309bed0d28e3d7', role: this.inList
                ? 'listitem'
                : this.selectable
                    ? 'button'
                    : undefined, tabIndex: this.selectable ? 0 : undefined, onKeyDown: (event) => this.handleKeyDown(event), class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, h("div", { key: 'e9afb5e7323a114977a4a918c62c5fc474d6f582', class: "flex max-w-[60%] min-w-0 shrink-0 flex-col", "data-name": "list-item-details" }, h("div", { key: 'a53deb0067d8e9adb9a63cbc0e3aa6e730e2798f', class: "flex min-w-0 items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: '091bfc5c25c97f8046a9b5002e4c447073b131be' }, h("slot", { key: '0da9eada9e5362a7ead05177b08ab8cc90d436fa', name: "icon" })), this.item_prefix && (h("span", { key: '8181bf05e6138a4aaf8b8b72388e285d5ae2f6c1', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), h("span", { key: 'f8d703e911b78977b76cdc216a56d7779d3b86f8', class: `flex min-w-0 flex-grow pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: 'c8473d0564a01e3455984bab30cc2581392b30fe', class: "flex max-w-full min-w-0 shrink-0 flex-row font-normal" }, h("span", { key: '409a6ed6235507664f7bf0a5a3bbb04d6f7446bb', class: "mr-4 truncate", "data-name": "title", onMouseEnter: (event) => this.showTitleWhenTruncated(event) }, this.item_title), h("slot", { key: 'd922b59769ebbae5aaeae0eb1af76c3dbaa9c6d2', name: "title" })), this.subtitle && (h("span", { key: '3bd8f723b63f404933fd8c1ee3f6588e15685946', class: "text-secondary inline min-w-0 truncate text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'e59a495c5b08c719045051e9be74c2dd4c1b40aa', class: "flex min-w-0 flex-1 flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, h("slot", { key: 'ad1a348a30bc59c518cc85f4e6c170dbe686e66b' }), this.content && (h("span", { key: '32c94db2352df71795b0bf7bc2982e5d88f92198', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
