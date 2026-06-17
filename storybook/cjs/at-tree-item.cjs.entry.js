'use strict';

var index = require('./index-D1oh76XY.js');
var classlist = require('./classlist-BPb95vgj.js');

const variantsConfig = {
    variants: {
        disabled: {
            false: null,
            true: 'pointer-events-none opacity-30 grayscale-[1]',
        },
        size: {
            sm: 'px-4 py-4',
            md: 'px-8 py-[6px]',
            lg: 'px-8 py-8',
        },
    },
};
const getTreeItemClasses = classlist.classlist('group text-button text-foreground fill-foreground hover:bg-surface-overlay/10 focus-visible:bg-surface-overlay/10 focus-visible:ring-active-glow relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] bg-transparent font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none group-focus:bg-slate-200 focus:outline-none focus-visible:ring', variantsConfig);
const AtTreeItemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
    }
    /**
     * Size of the button
     */
    size = 'lg';
    /**
     * Label to be displayed within the button
     */
    label;
    /**
     * Defines the indent of the tree item
     */
    depth;
    /**
     * Determines whether to add the arrow indicator icon
     */
    has_children = false;
    /**
     * Determines the direction of the indicator arrow
     */
    selected = false;
    /**
     * When set the button's styling will change and will no longer be interactive
     */
    disabled = false;
    get el() { return index.getElement(this); }
    /**
     * Emits when the button is clicked
     */
    atuiClick;
    handleClick(event) {
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'at-tree-item',
            element: this.el,
        });
    }
    handleKeyDown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.atuiClick.emit({
                originalEvent: event,
                componentType: 'at-tree-item',
                element: this.el,
            });
        }
    }
    render() {
        const classname = getTreeItemClasses({
            disabled: this.disabled,
            size: this.size,
        });
        const depth = this.depth ?? 0;
        const hasChildren = !!this.has_children;
        const indent = hasChildren ? `${depth * 20}px` : `${depth * 20 + 20}px`;
        return (index.h(index.Host, { key: '2c1735394ce1f70764a2b7c3b1435d148cb70dfc', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: '0cf12ecb2975a1bd8dd1ccc0f2744eb496339232', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, index.h("div", { key: '7aaebb64668fc033eec3988e9e2f655abb16df27', class: "flex gap-4" }, this.has_children && (index.h("at-icon", { key: 'f3ecf2cf61f57bd6f971e8a87f2addf1d1fef8b2', "data-name": "tree-item-indicator", name: this.selected
                ? 'chevron_down'
                : 'chevron_right' })), this.label && (index.h("span", { key: 'c708faeb4e304c362fa4926483c1bfce2e44a3e4', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), index.h("slot", { key: '7df644ae8faf645e8fd8188ca08eaff70d86c357', name: "label" })), index.h("slot", { key: '8087f6dc0905c9a2f3a29d6643765830ee1762bd' })), index.h("div", { key: '7ade92a0458bc8eac4b118037827ce46d362e473', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
};

exports.at_tree_item = AtTreeItemComponent;
