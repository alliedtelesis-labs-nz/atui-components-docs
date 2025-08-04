import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';

const AtuiBreadcrumbItem = /*@__PURE__*/ proxyCustomElement(class AtuiBreadcrumbItem extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: 'f4523e6a559146c1284064ecba4aac9a4758f340', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "cursor-default rounded-lg px-8 py-2 capitalize text-active-foreground" }, this.label)) : (h("a", { class: "cursor-pointer rounded-lg px-8 py-2 capitalize text-light transition-colors hover:text-dark hover:underline" }, this.label))));
    }
    get el() { return this; }
}, [256, "atui-breadcrumb-item", {
        "is_active": [4],
        "label": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-breadcrumb-item"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-breadcrumb-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiBreadcrumbItem);
            }
            break;
    } });
}

export { AtuiBreadcrumbItem as A, defineCustomElement as d };
//# sourceMappingURL=p-DDULCfSr.js.map

//# sourceMappingURL=p-DDULCfSr.js.map