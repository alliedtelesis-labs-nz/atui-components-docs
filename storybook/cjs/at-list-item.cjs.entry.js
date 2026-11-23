'use strict';

var index = require('./index-D6_HFEr-.js');

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
        index.registerInstance(this, hostRef);
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
    get el() { return index.getElement(this); }
    hasLoaded = false;
    componentDidLoad() {
        this.hasLoaded = true;
    }
    connectedCallback() {
        if (this.hasLoaded) {
            index.forceUpdate(this);
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
        return (index.h(index.Host, { key: 'b700b367317334be58515b9760524bd8466628e5', role: this.inList
                ? 'listitem'
                : this.selectable
                    ? 'button'
                    : undefined, tabIndex: this.selectable ? 0 : undefined, onKeyDown: (event) => this.handleKeyDown(event), class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b`, "data-name": "list-item" }, index.h("div", { key: '11c2e067f8705e950dbcd92729ef0ab665382d96', class: "flex max-w-[60%] min-w-0 shrink-0 flex-col", "data-name": "list-item-details" }, index.h("div", { key: '66874054490184ac7ac776aced4e08179c9b0c07', class: "flex min-w-0 items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: 'db5b48e7c4e3d97a30726e893f5b05abbc9406e7' }, index.h("slot", { key: 'fcf2fb82a34e25f3377ee87d689102a1db5c625b', name: "icon" })), this.item_prefix && (index.h("span", { key: '128924f8eecb9b9315016ffce61d0ab2f242f280', class: "text-secondary mr-[4px] font-normal", "data-name": "prefix" }, this.item_prefix)), index.h("span", { key: '302916b78c2b61f0472b784f0dcd2f61c7722e30', class: `flex min-w-0 flex-grow pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '00d2640dc8a2ad6c2971733a76c51e954ce2d817', class: "flex max-w-full min-w-0 shrink-0 flex-row font-normal" }, index.h("span", { key: '318cf2124921f3330e22c417ef23ec361730de91', class: "mr-4 truncate", "data-name": "title", onMouseEnter: (event) => this.showTitleWhenTruncated(event) }, this.item_title), index.h("slot", { key: 'fce2e583a8542841793198b2548441e78ff75456', name: "title" })), this.subtitle && (index.h("span", { key: '770e4f10a6ec7b9e7b27e171b6bb9c81489a7cfe', class: "text-secondary inline min-w-0 truncate text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: '197ed7ce27d879fbdfd8277233327d0542107d5b', class: "flex min-w-0 flex-1 flex-wrap items-end justify-end gap-8 text-right", "data-name": "list-item-content" }, index.h("slot", { key: '50d93a4830abb493004f1db3541a579109d68db8' }), this.content && (index.h("span", { key: '47d7e855f94d4c7dda65a0c0c7051cb70a698ac0', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
