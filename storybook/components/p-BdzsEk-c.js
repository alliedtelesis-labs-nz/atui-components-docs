import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';

const AtBreadcrumbItem = /*@__PURE__*/ proxyCustomElement(class AtBreadcrumbItem extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    render() {
        return (h(Host, { key: 'dd0bbdc96bab3c552998956f396561cdce6cac18', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2 capitalize" }, this.label)) : (h("a", { class: "text-light hover:text-dark cursor-pointer rounded-lg px-8 py-2 capitalize transition-colors hover:underline" }, this.label))));
    }
    get el() { return this; }
}, [256, "at-breadcrumb-item", {
        "is_active": [4],
        "label": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-breadcrumb-item"];
    components.forEach(tagName => { switch (tagName) {
        case "at-breadcrumb-item":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtBreadcrumbItem);
            }
            break;
    } });
}

export { AtBreadcrumbItem as A, defineCustomElement as d };
//# sourceMappingURL=p-BdzsEk-c.js.map

//# sourceMappingURL=p-BdzsEk-c.js.map