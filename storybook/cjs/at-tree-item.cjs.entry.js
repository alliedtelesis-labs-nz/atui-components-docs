'use strict';

var index = require('./index-C0zY2e5N.js');
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
const getTreeItemClasses = classlist.classlist('group text-button text-foreground fill-foreground hover:bg-surface-overlay/10 focus-visible:bg-surface-overlay/10 focus-visible:ring-active-glow relative box-border flex w-full cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] bg-transparent font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none group-focus:bg-slate-200 focus:outline-none focus-visible:ring', variantsConfig);
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
        return (index.h(index.Host, { key: '9b965edbab1767b927cd234ffe5af76bf8d53794', class: classname, role: "button", tabIndex: 0, "aria-expanded": this.has_children
                ? this.selected
                    ? 'true'
                    : 'false'
                : undefined, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: 'f1e7a15fd368689009497a2771f7033dab69ffbb', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, index.h("div", { key: 'fd83a83e00d29a561fc93348941982342314b3ff', class: "flex gap-4" }, this.has_children && (index.h("at-icon", { key: '9464fcc9f5c9cc2b2f467f390e39b17b71865971', "data-name": "tree-item-indicator", name: this.selected
                ? 'chevron_down'
                : 'chevron_right' })), this.label && (index.h("span", { key: 'db3639ec0297a3336bbdfdfb7a459e64bdcde4bf', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), index.h("slot", { key: 'fdbef6681d2c644e31c0850b22da464fe7e7c254', name: "label" })), index.h("slot", { key: 'aa616e81119cfa81377ca97f737b15f1233138f1' })), index.h("div", { key: '02667cca484e40d16d71a2654e7db0bcb2ebbc57', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
};

exports.at_tree_item = AtTreeItemComponent;
