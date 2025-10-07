import { r as registerInstance, a as getElement, h, H as Host } from './index-Cod2-jIY.js';

const AtBreadcrumbItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Applies different styling and makes the element non-clickable when set
     */
    is_active;
    /**
     * Label for the breadcrumb item
     */
    label;
    get el() { return getElement(this); }
    render() {
        return (h(Host, { key: 'dd0bbdc96bab3c552998956f396561cdce6cac18', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2 capitalize" }, this.label)) : (h("a", { class: "text-light hover:text-dark cursor-pointer rounded-lg px-8 py-2 capitalize transition-colors hover:underline" }, this.label))));
    }
};

export { AtBreadcrumbItem as at_breadcrumb_item };
//# sourceMappingURL=at-breadcrumb-item.entry.js.map
