import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: 'e4e60a9e0891efe814a8054abf9c73a16469b73c', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2 capitalize" }, this.label)) : (h("a", { class: "text-muted hover:text-foreground cursor-pointer rounded-lg px-8 py-2 capitalize transition-colors hover:underline" }, this.label))));
    }
};

export { AtBreadcrumbItem as at_breadcrumb_item };
