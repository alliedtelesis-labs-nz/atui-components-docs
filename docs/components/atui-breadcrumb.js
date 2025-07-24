import { p as proxyCustomElement, H, d as createEvent, h, F as Fragment } from './p-kcU6cSzl.js';
import { d as defineCustomElement$2 } from './p-Bu5mES--.js';

const AtuiBreadcrumbComponent = /*@__PURE__*/ proxyCustomElement(class AtuiBreadcrumbComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiClick = createEvent(this, "atuiClick", 7);
        /**
         * Function to get the prefix for breadcrumbs.
         */
        this.get_prefix = () => '';
        /**
         * Delimiter between the prefix and the prefix.
         */
        this.prefix_delimiter = '';
    }
    handleClick(event) {
        const idOfEventTarget = Array.prototype.indexOf.call(this.el.querySelectorAll('atui-breadcrumb-item > a'), event.target);
        if (idOfEventTarget >= 0)
            this.atuiClick.emit(idOfEventTarget);
    }
    render() {
        return (h("nav", { key: '56918b66c57d82429d36e04787f6465b48473eeb', role: "navigation", "aria-label": "breadcrumb", class: "inline-flex items-center", onClick: (event) => this.handleClick(event) }, this.values &&
            this.values.map((value, index) => (h(Fragment, null, h("atui-breadcrumb-item", { label: `${this.get_prefix(index)}${this.prefix_delimiter}${value}`, is_active: index === this.values.length - 1 }), index < this.values.length - 1 && (h("i", { class: "material-icons text-icon-md text-light", "aria-hidden": "true", role: "presentation" }, "chevron_right"))))), h("slot", { key: '3e748cce1dfb62d3bfd2265e0298d453452e7051' })));
    }
    get el() { return this; }
}, [260, "atui-breadcrumb", {
        "get_prefix": [16],
        "prefix_delimiter": [1],
        "values": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-breadcrumb", "atui-breadcrumb-item"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-breadcrumb":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiBreadcrumbComponent);
            }
            break;
        case "atui-breadcrumb-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtuiBreadcrumb = AtuiBreadcrumbComponent;
const defineCustomElement = defineCustomElement$1;

export { AtuiBreadcrumb, defineCustomElement };
//# sourceMappingURL=atui-breadcrumb.js.map

//# sourceMappingURL=atui-breadcrumb.js.map