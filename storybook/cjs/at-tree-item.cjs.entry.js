'use strict';

var index = require('./index-BkghNVG3.js');
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
        return (index.h(index.Host, { key: 'f2abb007cede0cd10eefa321cd200cdbcae59d09', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: '1a7c8311194575d5878e74d283205f116c34e719', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, index.h("div", { key: '682f7592c2c7d3fb033b6d172e88cdba49599aec', class: "flex gap-4" }, this.has_children && (index.h("at-icon", { key: 'ac86f2d8571bfcab489c2fb51e6ad4d8a2936484', "data-name": "tree-item-indicator", name: this.selected
                ? 'chevron_down'
                : 'chevron_right' })), this.label && (index.h("span", { key: '2d88d65f617b5071a3a8cfec0b3d448787512d3c', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), index.h("slot", { key: '8c337cc6c928270a5441ccbf901ea4e80121fa51', name: "label" })), index.h("slot", { key: '6fadc32d38f8fb3a8c765bad505a95acae3f08e5' })), index.h("div", { key: 'c8e48102c51e3651f4b38e8b36664edb623c776c', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
};

exports.at_tree_item = AtTreeItemComponent;
