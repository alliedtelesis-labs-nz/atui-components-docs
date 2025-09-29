import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Bx9nFool.js';
import { f as fetchTranslations } from './p-DuLooPsr.js';
import { d as defineCustomElement$5 } from './p-Ixc4AGPB.js';
import { d as defineCustomElement$4 } from './p-IkAgp4un.js';
import { d as defineCustomElement$3 } from './p-CUVypgz_.js';
import { d as defineCustomElement$2 } from './p-Cf5bpagt.js';
import { d as defineCustomElement$1 } from './p-BQo85g_v.js';

const AtTableFilters = /*@__PURE__*/ proxyCustomElement(class AtTableFilters extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atChange = createEvent(this, "atChange", 7);
        /**
         * Currently selected columns and filter values
         */
        this.selected = [];
        this.clearFilters = () => {
            this.selected = [];
            this.atChange.emit([]);
        };
        this.clearSingleFilter = (columnId) => {
            this.selected = this.selected.filter((column) => column.id !== columnId);
            this.atChange.emit(this.selected.length ? this.selected : []);
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
        this.atChange.emit(this.selected);
    }
    render() {
        return (this.col_defs && (h(Host, { key: 'de5a1b0f0fb49ebd414b3cd5a5d6fea330e7371b', class: "flex items-start gap-8" }, h("div", { key: '581863fd8b4f3e53ed73091d3cb9f44250bd3bba', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, !this.selected.length && (h("p", { key: 'cb3a16e715d2160f99f04e746871258e3c45e77f', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("at-button", { key: 'b9cc6437507ed1652900b37e2f5ea6ae360efa62', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return this; }
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
//# sourceMappingURL=p-B3Lia15R.js.map

//# sourceMappingURL=p-B3Lia15R.js.map