import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment } from './index-jvbUuQtg.js';

const AtBreadcrumbComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiClick = createEvent(this, "atuiClick", 7);
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
    get el() { return getElement(this); }
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
        return (h("nav", { key: '1897d22406088738863d1600cd8dd2ee36fcf585', role: "navigation", "aria-label": "breadcrumb", class: "inline-flex items-center", onClick: (event) => this.handleClick(event) }, this.values &&
            this.values.map((value, index) => (h(Fragment, null, h("at-breadcrumb-item", { label: `${this.get_prefix(index)}${this.prefix_delimiter}${value}`, is_active: index === this.values.length - 1 }), index < this.values.length - 1 && (h("i", { class: "material-icons text-icon-md text-light", "aria-hidden": "true", role: "presentation" }, "chevron_right"))))), h("slot", { key: '93986b3ed0323fd42ef8d721ec91ae870122a25b' })));
    }
};

export { AtBreadcrumbComponent as at_breadcrumb };
