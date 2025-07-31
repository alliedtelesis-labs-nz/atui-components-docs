'use strict';

var index = require('./index-DSZ-ppzm.js');

const AtuiBreadcrumbComponent = class {
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
        const idOfEventTarget = Array.prototype.indexOf.call(this.el.querySelectorAll('atui-breadcrumb-item > a'), event.target);
        if (idOfEventTarget >= 0)
            this.atuiClick.emit(idOfEventTarget);
    }
    render() {
        return (index.h("nav", { key: '80effdc8a939df88f3f4d6fadc9bd49fd61ea444', role: "navigation", "aria-label": "breadcrumb", class: "inline-flex items-center", onClick: (event) => this.handleClick(event) }, this.values &&
            this.values.map((value, index$1) => (index.h(index.Fragment, null, index.h("atui-breadcrumb-item", { label: `${this.get_prefix(index$1)}${this.prefix_delimiter}${value}`, is_active: index$1 === this.values.length - 1 }), index$1 < this.values.length - 1 && (index.h("i", { class: "material-icons text-icon-md text-light", "aria-hidden": "true", role: "presentation" }, "chevron_right"))))), index.h("slot", { key: '642a4f58395565eb1e04fb00cc6c4c666fdb03f0' })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_breadcrumb = AtuiBreadcrumbComponent;
//# sourceMappingURL=atui-breadcrumb.entry.cjs.js.map

//# sourceMappingURL=atui-breadcrumb.cjs.entry.js.map