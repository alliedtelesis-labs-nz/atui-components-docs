import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';
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
        return (h(Host, { key: 'bfa806bd9baac15d0c4e82a67235fd7b03df6e5c', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: 'dd14c3a139155a13f7efa64b4276925b4f62af4e', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: '5e44b7b47b1ee27955f6a2978cd22c101e879620', class: "flex gap-4" }, this.has_children && (h("span", { key: 'a777bbec11f60bdd34099e63fc8958d00b9d7dd7', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (h("span", { key: 'efc0276dc46a6abe1c08843312ca120ecec5a45e', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), h("slot", { key: 'e31c9c9a4339bc04a83ea64c54216b7702ed6111', name: "label" })), h("slot", { key: '94c8deb2e30592133e03b42f60d52648730a5050' })), h("div", { key: '1bc551820c4ec67715fd983fdf2328b9c2e6f20f', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
};

export { AtTreeItemComponent as at_tree_item };
