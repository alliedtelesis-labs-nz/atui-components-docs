import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DDLUhBkV.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-BOygyBmB.js';
import { d as defineCustomElement$4 } from './p-Desv48Pq.js';
import { d as defineCustomElement$3 } from './p-BMCp9d4F.js';
import { d as defineCustomElement$2 } from './p-Bxc6CMPN.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

const AtuiTableFilters = /*@__PURE__*/ proxyCustomElement(class AtuiTableFilters extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Currently selected columns and filter values
         */
        this.selected = [];
        this.clearFilters = () => {
            this.selected = [];
            this.atuiChange.emit([{ id: '', value: '' }]);
        };
        this.clearSingleFilter = (columnId) => {
            this.selected = this.selected.filter((column) => column.id !== columnId);
            this.atuiChange.emit(this.selected);
        };
    }
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
        this.atuiChange.emit(this.selected);
    }
    render() {
        return (this.col_defs && (h(Host, { key: '5d637fabe6f17fb2cad801ef3eee09f8555419d2', class: "flex items-start gap-8" }, h("div", { key: 'ac95e5f710a420d75b9f70b0ad5ff4236cb89a7d', class: "flex min-h-[36px] flex-wrap items-end gap-8 rounded-md bg-surface-0 p-8" }, !this.selected.length && (h("p", { key: 'fcba479cd96adf414584283a434f2d339b46332b', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("atui-button", { key: '7911975e80252c5dded18958a8983163ad563894', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return this; }
}, [0, "atui-table-filters", {
        "col_defs": [16],
        "selected": [1040],
        "translations": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-table-filters", "atui-button", "atui-form-label", "atui-input", "atui-loading", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-table-filters":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTableFilters);
            }
            break;
        case "atui-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "atui-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-loading":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiTableFilters as A, defineCustomElement as d };
//# sourceMappingURL=p-CAQmxUMA.js.map

//# sourceMappingURL=p-CAQmxUMA.js.map