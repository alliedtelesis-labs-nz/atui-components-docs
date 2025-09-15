'use strict';

var index = require('./index-i7hIKTeN.js');
var translation = require('./translation-HqquF7bU.js');

const AtSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atChange", 7);
    }
    onChangeFn() {
        this.atuiChange.emit(this.searchEl.value);
        this.model = this.searchEl.value;
    }
    clearFn() {
        this.searchEl.value = '';
        this.atuiChange.emit(this.searchEl.value);
        this.model = '';
        this.searchEl.focus();
    }
    render() {
        return (index.h("div", { key: '4491d7d5af7ef1bfbb08cf0935c90a71218040ac' }, (this.label || this.info_text) && (index.h("at-form-label", { key: '631246df7551ddcb0264bb0eb605d93b44c25182', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: 'd36fd4f84c427eccf79a63f982a8f6c59591c416', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/30 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, index.h("span", { key: 'a25fe92511eabc949807f0e771cb0749106423f3', class: "px-8" }, index.h("i", { key: 'f4a7642de6da0577b526be010bcfdd026c13f4ac', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), index.h("input", { key: 'cd0dd55e8f9587bdf58aa65b52beb9d761c42be6', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '2a88b0f82d3522aedc7694893dad57c56c735df8', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '2847b6d9f0a47f4fc29af10d0a9c66bf8af33412', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), index.h("span", { key: '542dfe6e2475f7b92386587c2233d4a2cc3e255a', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
    }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (index.h("at-menu", { key: 'a4fe3f274fadc4cffddeb873314cc0c1b13856ce', width: 'auto', align: "end" }, index.h("at-tooltip", { key: 'd6c3c6473f455258f275c3242ff53c7baba65b55', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: '4ce03be5d5a7284d3482ccbe098d1dd75a7ec403', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: '18ef67c15b8e1cbac775375771b3d7d65f5d2c88' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: '91a82a7758d1dc439e9f481179190905551dd2ba' }, index.h("at-button", { key: '5b262b59ba52b49b1f03757b84690cf64a0ce374', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), index.h("at-button", { key: '847a6d67f1521b4726ae0d8a6c2c1dad3c22db31', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return index.getElement(this); }
};

const AtTableFilterMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
        /**
         * Currently selected filter columns
         */
        this.selected = [];
    }
    get filteredColumns() {
        return this.col_defs
            .filter((colDef) => colDef.field !== 'Checkbox')
            .map((colDef) => ({
            option_id: colDef.field,
            label: colDef.field,
        }));
    }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    handleSelectedChange(newValue) {
        this.selected = newValue || [];
    }
    handleColumnSelect(event) {
        const newValue = event.detail || [];
        this.selected = newValue;
        this.atChange.emit(this.selected);
    }
    render() {
        return (index.h(index.Host, { key: '740e3b3ddea854f5729d6eb39433b08f6b310ee7' }, index.h("at-menu", { key: '4e6890727ee7108afe6c8ae6167919c137825bc3', autoclose: false, width: "fit-content", class: "self-start" }, index.h("at-tooltip", { key: '236b3ebb6fe3d78b36d461cca79ade4a36304e7e', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'dd6de522a03a6b7e67941826bd81134c4907e028', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '527488b281751faa1d1dbbef48b9749bba12d9da' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: '77d59766bb94bde944f5d71e2b8afd0c67b07169', class: "flex flex-col" }, index.h("at-checkbox-group", { key: '3b01680074d0065f3e43147dee0c18d78db9f220', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
};

const AtTableFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return (this.col_defs && (index.h(index.Host, { key: 'bbb23bf9ade8b3063c8bd4594189c59606823ee1', class: "flex items-start gap-8" }, index.h("div", { key: 'c1dbe24320f2963c8c5c1416342c7907f1632d8f', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, !this.selected.length && (index.h("p", { key: '239828e9906b7084bed1a18c6ceea3ba35daa578', class: "text-light" }, "0 Filters")), this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (index.h("at-button", { key: 'c9e7cfb958c06aae3dadcab41fa639050e21ce08', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return index.getElement(this); }
};

exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.cjs.js.map

//# sourceMappingURL=at-search_4.cjs.entry.js.map