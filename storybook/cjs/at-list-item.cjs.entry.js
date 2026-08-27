'use strict';

var index = require('./index-Bo1AxtqW.js');

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
     * Applied styling for hover background color and cursor.
     */
    selectable = false;
    get sizeClasses() {
        return listItemVariants[this.size];
    }
    render() {
        return (index.h(index.Host, { key: 'ff55dd39af53eb9cf043e1206a1fedac92f44106', role: "listitem", tabIndex: this.selectable ? 0 : undefined, class: `${this.sizeClasses} ${this.selectable ? 'hover:bg-surface-1 cursor-pointer' : ''} border-muted flex items-center gap-3 border-b` }, index.h("div", { key: 'a49c9b63ea2a753ed90fd70be3905e0918409c57', class: "flex flex-grow flex-col" }, index.h("div", { key: '84a41e5da39e123f0124ffccaf8837058cb5b4f2', class: "flex items-center justify-start gap-8 whitespace-nowrap" }, index.h("span", { key: '8ec8d9662cf611a05afdc3cdd24e7f73e98f5b1f', class: "fill-light" }, index.h("slot", { key: 'ea90e40c6db2b0ba6f60fe7abcccc819ca2318c9', name: "icon" })), this.item_prefix && (index.h("span", { key: '0789a603c5b815265cb53cb927f0df5745f663c3', class: "text-secondary mr-[4px] font-normal" }, this.item_prefix)), index.h("span", { key: 'da9ddfc950eb99bfc45196fb7d079439576bd045', class: `flex flex-grow truncate pr-8 font-medium ${this.item_prefix && this.subtitle ? 'flex flex-col' : ''}` }, index.h("span", { key: '0e503efa089f8436e2137a733ecc9eb71ecbe873', class: "flex flex-row font-normal" }, index.h("span", { key: '9bcc7a8aa131ebb826020ad35019726482ed0110', class: "mr-4" }, this.item_title), index.h("slot", { key: '6aae6633787324b8aaccb83f488917866c1cce3a', name: "title" })), this.subtitle && (index.h("span", { key: 'e4ce15b80d3ea6832446271dca3495d59de82f6d', class: "text-secondary inline text-sm font-normal", "data-name": "subtitle" }, this.subtitle))))), index.h("div", { key: 'dd362679370c7a4e23687a5685bfade197be4ef1', class: "flex flex-wrap items-end justify-end gap-8 text-right" }, index.h("slot", { key: '9b4679cc245608734dc347073e70e6f2dd9b9a27' }), this.content && (index.h("span", { key: '5e70ce8f3fc31dec949644a9d5ef8e6ff63ff221', "data-name": "content" }, this.content)))));
    }
};

exports.at_list_item = AtListItem;
