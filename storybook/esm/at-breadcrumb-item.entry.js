import { r as registerInstance, h, H as Host, a as getElement } from './index-C3PSGxNR.js';

const AtBreadcrumbItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'dd0bbdc96bab3c552998956f396561cdce6cac18', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2 capitalize" }, this.label)) : (h("a", { class: "text-light hover:text-dark cursor-pointer rounded-lg px-8 py-2 capitalize transition-colors hover:underline" }, this.label))));
    }
    get el() { return getElement(this); }
};

export { AtBreadcrumbItem as at_breadcrumb_item };
//# sourceMappingURL=at-breadcrumb-item.entry.js.map
