import { r as registerInstance, h, H as Host, g as getElement } from './index-D3rwhcmG.js';

const AtuiBreadcrumbItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, { key: 'f4523e6a559146c1284064ecba4aac9a4758f340', class: "flex w-fit items-center" }, this.is_active ? (h("span", { "aria-disabled": "true", "aria-current": "page", class: "cursor-default rounded-lg px-8 py-2 capitalize text-active-foreground" }, this.label)) : (h("a", { class: "cursor-pointer rounded-lg px-8 py-2 capitalize text-light transition-colors hover:text-dark hover:underline" }, this.label))));
    }
    get el() { return getElement(this); }
};

export { AtuiBreadcrumbItem as atui_breadcrumb_item };
//# sourceMappingURL=atui-breadcrumb-item.entry.js.map

//# sourceMappingURL=atui-breadcrumb-item.entry.js.map