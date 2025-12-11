import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';

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
const AtTreeItemComponent = /*@__PURE__*/ proxyCustomElement(class AtTreeItemComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
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
    get el() { return this; }
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
        return (h(Host, { key: '96d6ed8222a643c6a253501b32da3cd5bd7dfa46', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '0ee3e944d37660ea71e241b1593b1483e819b892', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: 'f8588d0343c67840216466de9fa417355f3ab3c2', class: "flex gap-4" }, this.has_children && (h("span", { key: 'e6cec36ae75df39f07413092b86aeaa1a6a880bb', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (h("span", { key: 'c94d0794b4ca0d76537cd88ca8194f0edcc28dfb', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), h("slot", { key: '484c4badd7ec9a0b0d457b24cb294d1eaaecbbc2', name: "label" })), h("slot", { key: '73c7def738158dfbdb9e85d037476ffa899032d0' })), h("div", { key: '266a10bdd061c355f4fc82cf8925543a001077a2', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
}, [260, "at-tree-item", {
        "size": [1],
        "label": [1],
        "depth": [2],
        "has_children": [4],
        "selected": [1028],
        "disabled": [1028]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-tree-item"];
    components.forEach(tagName => { switch (tagName) {
        case "at-tree-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTreeItemComponent);
            }
            break;
    } });
}

export { AtTreeItemComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CYdO926Z.js.map

//# sourceMappingURL=p-CYdO926Z.js.map