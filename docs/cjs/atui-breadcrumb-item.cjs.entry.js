'use strict';

var index = require('./index-BJDFmEHZ.js');

const AtuiBreadcrumbItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: '0c0e47f58c636535ee6b25d12e2d726f2413bbec', class: "flex w-fit items-center" }, this.is_active ? (index.h("span", { "aria-disabled": "true", "aria-current": "page", class: "cursor-default rounded-lg px-8 py-2 capitalize text-active-foreground" }, this.label)) : (index.h("a", { class: "cursor-pointer rounded-lg px-8 py-2 capitalize text-light transition-colors hover:text-dark hover:underline" }, this.label))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_breadcrumb_item = AtuiBreadcrumbItem;
//# sourceMappingURL=atui-breadcrumb-item.entry.cjs.js.map

//# sourceMappingURL=atui-breadcrumb-item.cjs.entry.js.map