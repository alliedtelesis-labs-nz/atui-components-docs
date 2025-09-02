'use strict';

var index = require('./index-43B6Ydvl.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('group text-button text-foreground hover:bg-surface-1 focus-visible:ring-active-foreground/30 relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] bg-transparent font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none group-focus:bg-slate-200 focus:outline-none focus-visible:ring-2', {
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
});
const AtuiTreeItemComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
        /**
         * Size of the button
         */
        this.size = 'lg';
        /**
         * Determines whether to add the arrow indicator icon
         */
        this.has_children = false;
        /**
         * Determines the direction of the indicator arrow
         */
        this.selected = false;
        /**
         * When set the button's styling will change and will no longer be interactive
         */
        this.disabled = false;
    }
    handleClick(event) {
        this.atuiClick.emit({
            originalEvent: event,
            componentType: 'atui-tree-item',
            element: this.el,
        });
    }
    handleKeyDown(event) {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.atuiClick.emit({
                originalEvent: event,
                componentType: 'atui-tree-item',
                element: this.el,
            });
        }
    }
    render() {
        var _a;
        const classname = variants({
            disabled: this.disabled,
            size: this.size,
        });
        const depth = (_a = this.depth) !== null && _a !== void 0 ? _a : 0;
        const hasChildren = !!this.has_children;
        const indent = hasChildren ? `${depth * 20}px` : `${depth * 20 + 20}px`;
        return (index.h(index.Host, { key: 'f0653f73ed7a32abfcda799b55d0a6fcffff13f0', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, index.h("div", { key: '4f99af99174ed4498f6dbd5f3559e7273493fa47', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, index.h("div", { key: '3a5e6d40f22e4335ed4b3a131eb46cb54361ef5e', class: "flex gap-4" }, this.has_children && (index.h("span", { key: 'f6fc34604d2eeb8e8064f60626407586974a473f', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (index.h("span", { key: 'c2ae045d6d34be7347a275d54dcb33b9a374f0ad', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label))), index.h("slot", { key: 'db0a957653c1b8b5b9d7103b1939f623fe95a599' })), index.h("div", { key: 'c63b4e09ac2fe2876e56b8be6370f9844f36bf40', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_tree_item = AtuiTreeItemComponent;
//# sourceMappingURL=atui-tree-item.entry.cjs.js.map

//# sourceMappingURL=atui-tree-item.cjs.entry.js.map