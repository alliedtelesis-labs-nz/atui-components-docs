import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DTCxn2cp.js';
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
const getTreeItemClasses = classlist('group text-button text-foreground hover:bg-surface-overlay/10 focus-visible:bg-surface-overlay/10 focus-visible:ring-active-glow relative box-border flex w-full cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] bg-transparent font-medium whitespace-nowrap capitalize transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none group-focus:bg-slate-200 focus:outline-none focus-visible:ring', variantsConfig);
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
    isInTree = false;
    connectedCallback() {
        this.isInTree = !!this.el.closest('[role="tree"]');
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
        return (h(Host, { key: 'ea0798a82003dce67aa187530f04c2813b9cac8f', class: classname, role: this.isInTree ? 'treeitem' : 'button', "aria-level": this.isInTree ? depth + 1 : undefined, "aria-expanded": this.has_children
                ? this.selected
                    ? 'true'
                    : 'false'
                : undefined, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '305d7018b5a679c223fd342f24880c8dbca93dd6', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: '7b74f1f6c231d565747347b0417f55ce874d7ed8', class: "flex gap-4" }, this.has_children && (h("at-icon", { key: '5e121513960900fb47d4bcfc25813a03473e0037', "data-name": "tree-item-indicator", name: this.selected
                ? 'chevron_down'
                : 'chevron_right' })), this.label && (h("span", { key: 'e47cf46d3d0d8554b1e0c48e49231d49bfa57d9f', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), h("slot", { key: '8baab267088acfda8d16672f7d7091c0a048975f', name: "label" })), h("slot", { key: 'ff6592deae9873fc3c604ad714ef5435a38a766b' })), h("div", { key: '3dfbd7597b5728c81345f2a74159ba6da44efd4c', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out" })));
    }
};

export { AtTreeItemComponent as at_tree_item };
