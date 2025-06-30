import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-HJO1YDmC.js';

const AtuiBreadcrumbComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
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
        return (h("nav", { key: '69075bf67b7930c23cd3d5920e176175c14ccafe', role: "navigation", "aria-label": "breadcrumb", class: "inline-flex items-center", onClick: (event) => this.handleClick(event) }, this.values &&
            this.values.map((value, index) => (h(Fragment, null, h("atui-breadcrumb-item", { label: `${this.get_prefix(index)}${this.prefix_delimiter}${value}`, is_active: index === this.values.length - 1 }), index < this.values.length - 1 && (h("i", { class: "material-icons text-icon-md text-light", "aria-hidden": "true", role: "presentation" }, "chevron_right"))))), h("slot", { key: 'c3c48e9d7fc505413be3250b5a4e6204a03ebb1d' })));
    }
    get el() { return getElement(this); }
};

export { AtuiBreadcrumbComponent as atui_breadcrumb };
//# sourceMappingURL=atui-breadcrumb.entry.js.map

//# sourceMappingURL=atui-breadcrumb.entry.js.map