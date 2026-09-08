'use strict';

var index = require('./index-Bc1nzv_X.js');

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
        return (index.h(index.Host, { key: '0ec99a8a12f02c7fe7e66974d69d5b7395bfec40', class: "flex w-fit items-center" }, this.is_active ? (index.h("span", { "aria-current": "page", class: "text-active-accent cursor-default rounded-lg px-8 py-2" }, this.label)) : (index.h("a", { role: "link", tabIndex: 0, onKeyDown: (event) => {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    event.target.click();
                }
            }, class: "text-muted hover:text-foreground focus-visible:ring-active-glow cursor-pointer rounded-lg px-8 py-2 transition-colors outline-none hover:underline focus-visible:ring" }, this.label))));
    }
};

exports.at_breadcrumb_item = AtBreadcrumbItem;
