'use strict';

var index = require('./index-w3vomLqM.js');
var translation = require('./translation-HqquF7bU.js');

const AtSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atChange", 7);
    }
    /**
     * Label text above the search bar.
     */
    label;
    /**
     * Hint text for the input, appears below the search bar.
     */
    hint_text;
    /**
     * Tooltip description.
     */
    info_text;
    /**
     * Placeholder text inside the search component.
     */
    placeholder;
    /**
     * String content of the search.
     */
    model;
    searchEl;
    /**
     * Emits an event when the input is changed. Used by atui-table.
     */
    atuiChange;
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
    get el() { return index.getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    /**
     * Emits id of the clicked button, either 'CSV' or 'PDF'.
     */
    atChange;
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (index.h("at-menu", { key: '708c9a46c3474e8459331170cf2a82ebaf2427ff', width: 'auto', align: "end" }, index.h("at-tooltip", { key: '57b1937be65c34d6337b0922c6b3470a2e1cdd55', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: '18d2bd50d4cede62555aa02b7f969e00b8ae7616', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: '4efe2ff549e3a009c159a97230b6fc11e221437f' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: '7264ec0c8aa98d10347e8892e3d5cf410c4c9c5d' }, index.h("at-button", { key: '76714a9779abd29df0a027fc4a872f4c4768fde5', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), index.h("at-button", { key: '9d1c9d20a5d12453d110ca747760c29938558278', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
};

const AtTableFilterMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
    }
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently selected filter columns
     */
    selected = [];
    translations;
    get el() { return index.getElement(this); }
    /**
     * Emits selected columns when checkbox selection changes
     */
    atChange;
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
        return (index.h(index.Host, { key: 'fa4d52dddfd70c189e40219bbc5561916ca509d1' }, index.h("at-menu", { key: '221845576124e28f5d681e45d1feb64dbfec3de2', autoclose: false, width: "fit-content", class: "self-start" }, index.h("at-tooltip", { key: '5dae003e89486fe8487710d177a738fb730f02fd', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: '4e991ad5b2370f0f865a7fd042f8bc15337f4c19', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '7d8c4c2ebc8616cd8f4f86437e2e32b551074798' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: 'fdd56ffbf31d934a9edfde9db41a3bd294c8e6db', class: "flex flex-col" }, index.h("at-checkbox-group", { key: 'ab0c0a78241c1e2eff0f88a2ee794372dd14f688', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
};

const AtTableFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
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
    get el() { return index.getElement(this); }
    /**
     * Emits id of column and filter value on change.
     */
    atChange;
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
    clearFilters = () => {
        this.selected = [];
        this.atChange.emit([]);
    };
    clearSingleFilter = (columnId) => {
        this.selected = this.selected.filter((column) => column.id !== columnId);
        this.atChange.emit(this.selected.length ? this.selected : []);
    };
    render() {
        return (this.col_defs && (index.h(index.Host, { key: '1fbbed1d72c7a41be400205f416f48bf3ba4bd91', class: "flex items-start gap-8" }, index.h("div", { key: '6093897c7ffa84c58cbbf3e90402fc90fa2a95e2', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, !this.selected.length && (index.h("p", { key: 'f0234ddbdba72d1521b81ca6d3b426e8c30e58c1', class: "text-light" }, "0 Filters")), this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (index.h("at-button", { key: 'f7edc17efd9803f4b4f9a56fa912ec6ccfcce0e6', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.cjs.js.map
