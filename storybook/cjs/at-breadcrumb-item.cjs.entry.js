'use strict';

var index = require('./index-CdUivN1V.js');

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
        return (index.h(index.Host, { key: '490421e104ed8cfd58846d301b8c54886a94f877', class: "flex w-fit items-center" }, this.is_active ? (index.h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2 capitalize" }, this.label)) : (index.h("a", { class: "text-light hover:text-dark cursor-pointer rounded-lg px-8 py-2 capitalize transition-colors hover:underline" }, this.label))));
    }
};

exports.at_breadcrumb_item = AtBreadcrumbItem;
