import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-DIyAz4jv.js';
import { d as defineCustomElement$4 } from './p-DS8rd89A.js';
import { d as defineCustomElement$3 } from './p-GC4X_ipO.js';
import { d as defineCustomElement$2 } from './p-bn76tgB4.js';
import { d as defineCustomElement$1 } from './p-CJ4jwrx3.js';

const AtTableFilters = /*@__PURE__*/ proxyCustomElement(class AtTableFilters extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently selected columns and filter values
     */
    selected = [];
    translations;
    get el() { return this; }
    /**
     * Emits id of column and filter value on change.
     */
    atChange;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    filterChangeHandler(event, columnId) {
        event.stopPropagation();
        this.selected = this.selected.map((column) => {
            if (column.id === columnId)
                return { id: column.id, value: event.detail };
            return column;
        });
        this.atChange.emit(this.selected);
    }
    clearFilters = () => {
        this.selected = [];
        this.atChange.emit([]);
    };
    clearSingleFilter = (columnId) => {
        this.selected = this.selected.filter((column) => column.id !== columnId);
        this.atChange.emit(this.selected.length ? this.selected : []);
    };
    render() {
        return (this.col_defs && (h(Host, { key: '257622b5f6799270ac74d564619d65ab57bd3624', class: "flex items-start gap-8" }, h("div", { key: '6616e3859ed9a1fd238c4f31db2b61da2d85ef58', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("at-button", { key: 'a2f781ae7b86b3556afec73d22d3a65fefe7afd2', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
}, [256, "at-table-filters", {
        "col_defs": [16],
        "selected": [1040],
        "translations": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-table-filters", "at-button", "at-form-label", "at-input", "at-loading", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-table-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTableFilters);
            }
            break;
        case "at-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTableFilters as A, defineCustomElement as d };
//# sourceMappingURL=p-DK5hrv2m.js.map

//# sourceMappingURL=p-DK5hrv2m.js.map