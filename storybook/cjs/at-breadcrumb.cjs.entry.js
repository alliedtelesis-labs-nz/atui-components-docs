'use strict';

var index = require('./index-B7bW4GPk.js');

const AtBreadcrumbComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
    }
    /**
     * Function to get the prefix for breadcrumbs.
     */
    get_prefix = () => '';
    /**
     * Delimiter between the prefix and the prefix.
     */
    prefix_delimiter = '';
    /**
     * Used to place atui-breadcrumb-item(s) and atui-breadcrumb-separator(s) automatically with the string values given
     */
    values;
    get el() { return index.getElement(this); }
    /**
     * Emits when one of the breadcrumb-items is clicked, `event.detail` is the 0-based index of the breadcrumb-item
     */
    atuiClick;
    handleClick(event) {
        const idOfEventTarget = Array.prototype.indexOf.call(this.el.querySelectorAll('at-breadcrumb-item > a'), event.target);
        if (idOfEventTarget >= 0)
            this.atuiClick.emit(idOfEventTarget);
    }
    render() {
        return (index.h("nav", { key: '168a921b65ca69ad9d209844e7d95a566e101f94', role: "navigation", "aria-label": "breadcrumb", class: "inline-flex items-center", onClick: (event) => this.handleClick(event) }, this.values &&
            this.values.map((value, index$1) => (index.h(index.Fragment, null, index.h("at-breadcrumb-item", { label: `${this.get_prefix(index$1)}${this.prefix_delimiter}${value}`, is_active: index$1 === this.values.length - 1 }), index$1 < this.values.length - 1 && (index.h("at-icon", { "aria-hidden": "true", role: "presentation", class: "fill-muted", name: "chevron_right" }))))), index.h("slot", { key: '3c77b5e16a42cc4b5a1668d792b85634371812b4' })));
    }
};

exports.at_breadcrumb = AtBreadcrumbComponent;
