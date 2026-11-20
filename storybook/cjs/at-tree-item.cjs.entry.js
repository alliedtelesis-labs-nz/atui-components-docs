'use strict';

var index = require('./index-CWfGEe1_.js');
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
const getTreeItemClasses = classlist.classlist('group text-button text-foreground hover:bg-surface-overlay/10 focus-visible:bg-surface-overlay/10 focus-visible:ring-active-glow relative box-border flex w-full cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] bg-transparent font-medium whitespace-nowrap capitalize transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none group-focus:bg-slate-200 focus:outline-none focus-visible:ring', variantsConfig);
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
        return (index.h(index.Host, { key: '83fd3a993c35290798b37177c0d90cccbe76c380', class: classname, role: "button", tabIndex: 0, "aria-expanded": this.has_children
                ? this.selected
                    ? 'true'
                    : 'false'
                : undefined, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: 'f0299b378e56c63fedbe7280cd758ffade238b1e', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, index.h("div", { key: '427f0d4350e88a1a5238155e2acf61642228887f', class: "flex gap-4" }, this.has_children && (index.h("at-icon", { key: 'f996fb24e10587d261afb1337d093a754d63a4e2', "data-name": "tree-item-indicator", name: this.selected
                ? 'chevron_down'
                : 'chevron_right' })), this.label && (index.h("span", { key: '45f4a0d91320e822cd3f8fa5362ca600adbd9ce3', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), index.h("slot", { key: '338d04a137dae642985be971e0e2ef1eee6ab05e', name: "label" })), index.h("slot", { key: '4a7e99557a7f4cf221da2a4fc8a3a0bf5fba5a9a' })), index.h("div", { key: 'b4ca271a6853a6e5cf58a257d259cbbdb98c8678', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out" })));
    }
};

exports.at_tree_item = AtTreeItemComponent;
