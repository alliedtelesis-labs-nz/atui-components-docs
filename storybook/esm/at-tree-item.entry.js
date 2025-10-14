import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-EP34iaAr.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'd0b1111bb28259b499004206ada7cdca434ce132', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '15e2aff4697c30248d4a584c05f95dc6f0fcd901', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: '87fd6e2ecde7f4a411c73bd0773a979116e4f8b2', class: "flex gap-4" }, this.has_children && (h("span", { key: 'c5cadb5e60250e1ee14404a52f59114fc7dd3f91', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (h("span", { key: 'f4bdc8e1a3815945c940063d913a27a72ada8ab8', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), h("slot", { key: '65f5c4dcd3b9cb9e9a66d4793c4003bb6c64b032', name: "label" })), h("slot", { key: '29de6e5bc53fe8b8d7512837dd32003f032c2b82' })), h("div", { key: 'f0bc9b5cfc3ebfe0a30914b15355a64e2f2f4683', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
};

export { AtTreeItemComponent as at_tree_item };
//# sourceMappingURL=at-tree-item.entry.js.map
