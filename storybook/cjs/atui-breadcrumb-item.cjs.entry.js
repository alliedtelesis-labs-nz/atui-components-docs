'use strict';

var index = require('./index-DSZ-ppzm.js');

const AtuiBreadcrumbItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'f4523e6a559146c1284064ecba4aac9a4758f340', class: "flex w-fit items-center" }, this.is_active ? (index.h("span", { "aria-disabled": "true", "aria-current": "page", class: "cursor-default rounded-lg px-8 py-2 capitalize text-active-foreground" }, this.label)) : (index.h("a", { class: "cursor-pointer rounded-lg px-8 py-2 capitalize text-light transition-colors hover:text-dark hover:underline" }, this.label))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_breadcrumb_item = AtuiBreadcrumbItem;
//# sourceMappingURL=atui-breadcrumb-item.entry.cjs.js.map

//# sourceMappingURL=atui-breadcrumb-item.cjs.entry.js.map