import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Bx9nFool.js';
import { c as classlist } from './p-DowIpD9s.js';

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
        return (h(Host, { key: '5e4f3d7f52607b14d50d65568f285399aaaf8d78', class: classname, role: "button", tabIndex: 0, "aria-disabled": this.disabled, onKeyDown: (event) => this.handleKeyDown(event), onClick: (event) => this.handleClick(event) }, h("div", { key: '7539940dbb92bb9cf6e3679cd5c2ce3fac176fb7', class: "z-20 flex h-full w-full items-center justify-between gap-4", style: { paddingLeft: indent } }, h("div", { key: 'd7b2a08f16920256b439a1ef1c7924885d968312', class: "flex gap-4" }, this.has_children && (h("span", { key: '707915a32845356ed0e8aa21ed2b200dee37835e', class: "material-icons h-16 w-16 text-[16px] leading-[16px]", "data-name": "tree-item-indicator" }, this.selected
            ? 'keyboard_arrow_down'
            : 'keyboard_arrow_right')), this.label && (h("span", { key: '378ab166ddbaef22c6f11e4489480dbc1d75315e', class: "leading-[16px]", "data-name": "tree-item-label" }, this.label)), h("slot", { key: '5a4ef4993d4fac091a05ec8a915925ec1ac3a237', name: "label" })), h("slot", { key: 'bd6c2610a118b41be7938451395c1fb86e11fdb9' })), h("div", { key: 'ede48f7b6e0e4e71be543853ac426f17ec853205', "data-name": "focus-indicator", role: "presentation", class: "pointer-events-none absolute top-0 left-0 z-10 h-full w-full transition-colors duration-300 ease-in-out" })));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-D3SVVuG7.js.map

//# sourceMappingURL=p-D3SVVuG7.js.map