import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';

const AtuiBreadcrumbItem = /*@__PURE__*/ proxyCustomElement(class AtuiBreadcrumbItem extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        return (h(Host, { key: '73eb59daa9648f35c23747900740874650bd41ac', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "cursor-default rounded-lg px-8 py-2 capitalize text-active-foreground" }, this.label)) : (h("a", { class: "cursor-pointer rounded-lg px-8 py-2 capitalize text-light transition-colors hover:text-dark hover:underline" }, this.label))));
    }
    get el() { return this; }
}, [0, "atui-breadcrumb-item", {
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
//# sourceMappingURL=p-DpFvodMj.js.map

//# sourceMappingURL=p-DpFvodMj.js.map