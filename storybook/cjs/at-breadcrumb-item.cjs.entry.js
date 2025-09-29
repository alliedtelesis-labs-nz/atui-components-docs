'use strict';

var index = require('./index-LVEefvKk.js');

const AtBreadcrumbItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, { key: 'dd0bbdc96bab3c552998956f396561cdce6cac18', class: "flex w-fit items-center" }, this.is_active ? (index.h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2 capitalize" }, this.label)) : (index.h("a", { class: "text-light hover:text-dark cursor-pointer rounded-lg px-8 py-2 capitalize transition-colors hover:underline" }, this.label))));
    }
    get el() { return index.getElement(this); }
};

exports.at_breadcrumb_item = AtBreadcrumbItem;
//# sourceMappingURL=at-breadcrumb-item.entry.cjs.js.map
