import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-C8uvvL0O.js';
import { c as classlist } from './classlist-Bfa-pAao.js';

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
const getTreeItemClasses = classlist('group text-button text-foreground hover:bg-surface-1 focus-visible:ring-active-foreground/30 relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] bg-transparent font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none group-focus:bg-slate-200 focus:outline-none focus-visible:ring-2', variantsConfig);
const AtTreeItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
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
        var _a;
        const classname = getTreeItemClasses({
            disabled: this.disabled,
            size: this.size,
        });
        const depth = (_a = this.depth) !== null && _a !== void 0 ? _a : 0;
        const hasChildren = !!this.has_children;
        const indent = hasChildren ? `${depth * 20}px` : `${depth * 20 + 20}px`;
        return (h(Host, { key: 'ace9e4fcb2d5fa866f64679b382397a69a35de92', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '6d9d5b6a60f89e085983969d087fc8ac14945c62', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: 'eeed906c0cf9001359a932f48992db676ee27d68', class: "flex gap-4" }, this.has_children && (h("span", { key: '59ca2a66eec4d3cc619a34d4fc3546a85f976354', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (h("span", { key: '8151f8d40374929cbd38ab5676df663147b94397', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), h("slot", { key: '8fd006573fc18288b1ce23681e916a89ad5bede1', name: "label" })), h("slot", { key: '47ee2d99392eb24e87442078602d519eb24cb7a0' })), h("div", { key: '8a4d0b9c69b7f6a3ea4450ec96ec3ab26d45a5ac', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
    get el() { return getElement(this); }
};

export { AtTreeItemComponent as at_tree_item };
//# sourceMappingURL=at-tree-item.entry.js.map

//# sourceMappingURL=at-tree-item.entry.js.map