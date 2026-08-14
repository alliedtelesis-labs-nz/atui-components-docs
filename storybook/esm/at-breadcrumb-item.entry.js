import { r as registerInstance, a as getElement, h, H as Host } from './index-BJOjHwmt.js';

const AtBreadcrumbItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Applies different styling and makes the element non-clickable when set
     */
    is_active;
    /**
     * Label for the breadcrumb item. Rendered verbatim — no casing transform is applied, so identifiers such as `AT-x550-hq-01` keep their exact casing.
     */
    label;
    get el() { return getElement(this); }
    render() {
        return (h(Host, { key: 'fbb099f660631b7df5762d367811f503032d8ebf', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-accent cursor-default rounded-lg px-8 py-2" }, this.label)) : (h("a", { class: "text-muted hover:text-foreground cursor-pointer rounded-lg px-8 py-2 transition-colors hover:underline" }, this.label))));
    }
};

export { AtBreadcrumbItem as at_breadcrumb_item };
