'use strict';

var index = require('./index--r5sCsiV.js');

const AtBreadcrumbItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Applies different styling and makes the element non-clickable when set
     */
    is_active;
    /**
     * Label for the breadcrumb item
     */
    label;
    get el() { return index.getElement(this); }
    render() {
        return (index.h(index.Host, { key: '01ae92c8df03e078487d7dddb33320777802bb07', class: "flex w-fit items-center" }, this.is_active ? (index.h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2 capitalize" }, this.label)) : (index.h("a", { class: "text-muted hover:text-foreground cursor-pointer rounded-lg px-8 py-2 capitalize transition-colors hover:underline" }, this.label))));
    }
};

exports.at_breadcrumb_item = AtBreadcrumbItem;
