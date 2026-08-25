import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DgqokAJi.js';
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
const getTreeItemClasses = classlist('group text-button text-foreground fill-foreground hover:bg-surface-overlay/10 focus-visible:bg-surface-overlay/10 focus-visible:ring-active-glow relative box-border flex w-full cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-[0.3rem] bg-transparent font-medium whitespace-nowrap capitalize duration-150 ease-in-out outline-none group-focus:bg-slate-200 focus:outline-none focus-visible:ring', variantsConfig);
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
        return (h(Host, { key: 'b4fd7b51ff2d8410b7feb83640c885cd8f072b00', class: classname, role: "button", tabIndex: 0, "aria-expanded": this.has_children
                ? this.selected
                    ? 'true'
                    : 'false'
                : undefined, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '5aea5d12aa150fcf28a585c10dfb5bd250ef9a7d', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: '56792de327b7b0adcbcac2c874cec84c8a91b0e4', class: "flex gap-4" }, this.has_children && (h("at-icon", { key: '0eae37b4be282932cfbc72092cebd9b48faa6f03', "data-name": "tree-item-indicator", name: this.selected
                ? 'chevron_down'
                : 'chevron_right' })), this.label && (h("span", { key: '8db700870f0f8898ae5bb2a696a9e7fb52f2950a', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), h("slot", { key: '86e73170bd53d874d40a2e7aca0594ad65fc0afa', name: "label" })), h("slot", { key: '885275ca5a08f1f5f185f05fa21f2e91d33fc858' })), h("div", { key: 'd53055f8c7f3b49d418d2172976a8e5e7d501dc4', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
};

export { AtTreeItemComponent as at_tree_item };
