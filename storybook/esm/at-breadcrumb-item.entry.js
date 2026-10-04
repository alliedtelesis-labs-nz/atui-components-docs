import { r as registerInstance, a as getElement, h, H as Host } from './index-Baj27LS8.js';

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
        return (h(Host, { key: 'a6cdea772f12f8e2d4f93fe98c53d3b41ef6164b', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-current": "page", class: "text-active-accent cursor-default rounded-lg px-8 py-2" }, this.label)) : (h("a", { role: "link", tabIndex: 0, onKeyDown: (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    event.target.click();
                }
            }, class: "text-muted hover:text-foreground focus-visible:ring-active-glow cursor-pointer rounded-lg px-8 py-2 transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none hover:underline focus-visible:ring" }, this.label))));
    }
};

export { AtBreadcrumbItem as at_breadcrumb_item };
