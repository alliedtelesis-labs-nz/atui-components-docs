'use strict';

var index = require('./index-COiLLAKF.js');
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
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        return (index.h("at-menu", { key: '5ae0c76cef5d82753f2bf734560d3c2455b606f3', width: "fit-content", align: "end" }, index.h("at-tooltip", { key: 'dd2b680840d98d13f186cc2fd39f292f3c2cc009', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'cfd5074843dc1b59fe47f0c74f36b14983f0a96a', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: '7d960ac012774fb70b381a94db93ac4690b18757' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: 'c219dcb353417eeaec9df007838acff1f8e64a5b' }, index.h("at-menu-item", { key: 'b5e559b8146087eeda69af84215ee7ef0ddd94f2', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), index.h("at-menu-item", { key: 'fdfa72bf3049087fc80476fa012f243524dee14e', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (index.h(index.Host, { key: 'c6c8e76de40879b50d4e02e0ea9c136d168eda63' }, index.h("at-menu", { key: '388f869f0c3c8a79f813bc5112aae14c085cbbef', autoclose: false, width: "fit-content", class: "self-start" }, index.h("at-tooltip", { key: '79664e2e4a16c4e6a75a340427dd9ce646414780', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'd7ef043423ff497bc719c8b77fc62579d65c67a9', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: 'c9398890b1936d5d014bc4ed732223fb22648f07' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: '584f1d954a5490d72a2d99ddc8d23e108466bb21', class: "flex flex-col" }, index.h("at-checkbox-group", { key: '523d6c2a2aaabd022a83596b8cf4ce805fe3b094', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (index.h(index.Host, { key: '3368f20a5a53bb142550417f14a9830da5d191df', class: "flex items-start gap-8" }, this.selected.length > 0 && (index.h("div", { key: '6c0b4cd8eb90db367bc49b5ec9cc18c25070ad02', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), index.h("at-button", { key: '1e7cebeab39a559f32cad2a24b1440d02265563e', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.cjs.js.map
