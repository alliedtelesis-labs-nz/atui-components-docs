import { p as proxyCustomElement, H, d as createEvent, h, F as Fragment } from './p-89eupKrN.js';
import { d as defineCustomElement$2 } from './p-BaBfz5nl.js';

const AtBreadcrumbComponent = /*@__PURE__*/ proxyCustomElement(class AtBreadcrumbComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiClick = createEvent(this, "atuiClick", 7);
    }
    /**
     * Function to get the prefix for breadcrumbs.
     */
    get_prefix = () => '';
    /**
     * Delimiter between the prefix and the prefix.
     */
    prefix_delimiter = '';
    /**
     * Used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) automatically with the string values given
     */
    values;
    get el() { return this; }
    /**
     * Emits when one of the breadcrumb-items is clicked, `event.detail` is the 0-based index of the breadcrumb-item
     */
    atuiClick;
    handleClick(event) {
        const idOfEventTarget = Array.prototype.indexOf.call(this.el.querySelectorAll('at-breadcrumb-item > a'), event.target);
        if (idOfEventTarget >= 0)
            this.atuiClick.emit(idOfEventTarget);
    }
    render() {
        return (h("nav", { key: '583326fa338ea9e21197d317cc3108070ff83b58', role: "navigation", "aria-label": "breadcrumb", class: "inline-flex items-center", onClick: (event) => this.handleClick(event) }, this.values &&
            this.values.map((value, index) => (h(Fragment, null, h("at-breadcrumb-item", { label: `${this.get_prefix(index)}${this.prefix_delimiter}${value}`, is_active: index === this.values.length - 1 }), index < this.values.length - 1 && (h("i", { class: "material-icons text-icon-md text-light", "aria-hidden": "true", role: "presentation" }, "chevron_right"))))), h("slot", { key: '6471373aa832e5c0314c8c4d6d1c5913be20c91f' })));
    }
}, [260, "at-breadcrumb", {
        "get_prefix": [16],
        "prefix_delimiter": [1],
        "values": [16]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-breadcrumb", "at-breadcrumb-item"];
    components.forEach(tagName => { switch (tagName) {
        case "at-breadcrumb":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtBreadcrumbComponent);
            }
            break;
        case "at-breadcrumb-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtBreadcrumb = AtBreadcrumbComponent;
const defineCustomElement = defineCustomElement$1;

export { AtBreadcrumb, defineCustomElement };
//# sourceMappingURL=at-breadcrumb.js.map

//# sourceMappingURL=at-breadcrumb.js.map