import { r as registerInstance, a as getElement, h, H as Host } from './index-DdGm_rA6.js';

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
     * Applied styling for hover background color and cursor. Makes the item focusable, and Enter or
     * Space activates it as a click does.
     */
    selectable = false;
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'ae71b83555753b46e13243b189dbd1633b5bee01', role: this.inList ? 'listitem' : undefined, tabIndex: this.selectable ? 0 : undefined, onKeyDown: (event) => this.handleKeyDown(event), class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, h("div", { key: 'b1c7490e54b7fed1df4e10eeb046f3e8b7e941c0', class: "flex max-w-[60%] min-w-0 shrink-0 flex-col", "data-name": "list-item-details" }, h("div", { key: 'f944db8481fd942f72229930ea8a346233fbea32', class: "flex min-w-0 items-center justify-start gap-8 whitespace-nowrap" }, h("span", { key: 'a0878f171ed37942076701cbb4c5eb90361977e5' }, h("slot", { key: 'bdf185484f7707fbfe4a22ccd6177d628d80eac3', name: "icon" })), this.item_prefix && (h("span", { key: '4b07dca36fe64cc6f55ee57fdd90060b02dde950', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), h("span", { key: '875567c6f7edc12fc48bdbb76a54c850074c2444', class: `flex min-w-0 flex-grow pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, h("span", { key: '5475567058f2381f8a4c1252da8a1e59c3fbd031', class: "flex max-w-full min-w-0 shrink-0 flex-row font-normal" }, h("span", { key: '132cd28dc3e2e4b63b3a18495eee3c1a17f5b622', class: "mr-4 truncate", "data-name": "title", onMouseEnter: (event) => this.showTitleWhenTruncated(event) }, this.item_title), h("slot", { key: 'b4f6b35e5dbae895225051c00b1a86b7247fc8eb', name: "title" })), this.subtitle && (h("span", { key: '409c1ec09f2750a1b516ad86ff34dab26795ae4c', class: "text-secondary inline min-w-0 truncate text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), h("div", { key: 'ebdb6c01404d25849ea14477a718540c29c4044d', class: "flex min-w-0 flex-1 flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, h("slot", { key: '06786e7247edd5efdf02ef71f1f017d915ea2aed' }), this.content && (h("span", { key: 'a0f5c5868c057ca1f1bcec1eb6f7484aa8254f29', "data-name": "content" }, this.content)))));
    }
};

export { AtListItem as at_list_item };
