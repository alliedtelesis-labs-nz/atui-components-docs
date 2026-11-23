'use strict';

var index = require('./index-D6_HFEr-.js');
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
    connectedCallback() {
        if (!this.el.hasAttribute('tabindex')) {
            this.el.tabIndex = 0;
        }
    }
    handleClick(event) {
        if (this.disabled)
            return;
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'at-tree-item',
            element: this.el,
        });
    }
    handleKeyDown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            if (this.disabled)
                return;
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
        return (index.h(index.Host, { key: 'cc9599fe0e1e8b1b4dd22b5ddc946b71d352580d', class: classname, role: "treeitem", "aria-level": depth + 1, "aria-expanded": this.has_children
                ? this.selected
                    ? 'true'
                    : 'false'
                : undefined, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: '62d772adcc3b1efa919a0dd0782e7eec94f74dc5', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, index.h("div", { key: '78a6bbc0386fbe137688e3288b00b3e975c8934f', class: "flex gap-4" }, this.has_children && (index.h("at-icon", { key: '5c772bfb3d5e47a101ecd6f9ac234ce3aa11abdb', "data-name": "tree-item-indicator", name: this.selected
                ? 'chevron_down'
                : 'chevron_right' })), this.label && (index.h("span", { key: '23a8ab27dbcbddeae914b7580b8a5ae332621878', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), index.h("slot", { key: '498e2f060364e6cd396ca1c031cc74f9a2ad43a4', name: "label" })), index.h("slot", { key: 'ca4a04a2df8c6c0ff54187b30e1cae5e297ff95c' })), index.h("div", { key: '613991a7bedc90d958e41a9b7a450e6d279b8ce0', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out" })));
    }
};

exports.at_tree_item = AtTreeItemComponent;
