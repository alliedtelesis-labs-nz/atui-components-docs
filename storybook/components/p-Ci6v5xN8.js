import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CaGsJoRH.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('group relative box-border flex inline-flex cursor-pointer items-center justify-center gap-4 overflow-hidden whitespace-nowrap rounded-[0.3rem] bg-transparent text-button font-medium capitalize text-foreground outline-none duration-150 ease-in-out hover:bg-surface-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30 group-focus:bg-slate-200', {
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
const AtuiTreeItemComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTreeItemComponent extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '3f77199ce2b5beac95ec85758ce88fc081741628', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: 'b54e1721ff569d1ff27b252b49e2cb1562c9e77a', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: 'aabb281a34969b2be8800320145342cf5b3e86ef', class: "flex gap-4" }, this.has_children && (h("span", { key: '692f4d04090dd157d13db1c931de4643ffc7be4b', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (h("span", { key: 'ca69cdaf3ba777e35e3319f0b6cd988d02339129', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label))), h("slot", { key: '66c748035c247040baacb19d19f51894a6b734c3' })), h("div", { key: '3940140c48b61885d253c9e8a979ccc19eb282ec', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute left-0 top-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
    get el() { return this; }
}, [260, "atui-tree-item", {
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
    const components = ["atui-tree-item"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-tree-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTreeItemComponent);
            }
            break;
    } });
}

export { AtuiTreeItemComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-Ci6v5xN8.js.map

//# sourceMappingURL=p-Ci6v5xN8.js.map