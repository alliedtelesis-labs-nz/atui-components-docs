'use strict';

var index = require('./index-CZHE0nPQ.js');

const AtBreadcrumbItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Applies different styling and makes the element non-clickable when set
     */
    is_active;
    /**
     * Label for the breadcrumb item. Rendered verbatim — no casing transform is applied, so identifiers such as `AT-x550-hq-01` keep their exact casing.
     */
    label;
    get el() { return index.getElement(this); }
    render() {
        return (index.h(index.Host, { key: 'f6c09f549bd4425ef801b92926d4127ea532568b', class: "flex w-fit items-center" }, this.is_active ? (index.h("span", { "aria-disabled": "true", "aria-current": "page", class: "text-active-foreground cursor-default rounded-lg px-8 py-2" }, this.label)) : (index.h("a", { class: "text-muted hover:text-foreground cursor-pointer rounded-lg px-8 py-2 transition-colors hover:underline" }, this.label))));
    }
};

exports.at_breadcrumb_item = AtBreadcrumbItem;
