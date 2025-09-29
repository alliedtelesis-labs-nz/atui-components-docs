'use strict';

var index = require('./index-LVEefvKk.js');

const AtBreadcrumbComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiClick = index.createEvent(this, "atuiClick", 7);
        /**
         * Function to get the prefix for breadcrumbs.
         */
        this.get_prefix = () => '';
        /**
         * Delimiter between the prefix and the prefix.
         */
        this.prefix_delimiter = '';
    }
    handleClick(event) {
        const idOfEventTarget = Array.prototype.indexOf.call(this.el.querySelectorAll('at-breadcrumb-item > a'), event.target);
        if (idOfEventTarget >= 0)
            this.atuiClick.emit(idOfEventTarget);
    }
    render() {
        return (index.h("nav", { key: '583326fa338ea9e21197d317cc3108070ff83b58', role: "navigation", "aria-label": "breadcrumb", class: "inline-flex items-center", onClick: (event) => this.handleClick(event) }, this.values &&
            this.values.map((value, index$1) => (index.h(index.Fragment, null, index.h("at-breadcrumb-item", { label: `${this.get_prefix(index$1)}${this.prefix_delimiter}${value}`, is_active: index$1 === this.values.length - 1 }), index$1 < this.values.length - 1 && (index.h("i", { class: "material-icons text-icon-md text-light", "aria-hidden": "true", role: "presentation" }, "chevron_right"))))), index.h("slot", { key: '6471373aa832e5c0314c8c4d6d1c5913be20c91f' })));
    }
    get el() { return index.getElement(this); }
};

exports.at_breadcrumb = AtBreadcrumbComponent;
//# sourceMappingURL=at-breadcrumb.entry.cjs.js.map
