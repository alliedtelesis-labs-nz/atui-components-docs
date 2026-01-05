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
        return (index.h("div", { key: 'e7c60785ce70e5dfc84550423b0d953a3a478e19' }, (this.label || this.info_text) && (index.h("at-form-label", { key: 'c3779baf0542805720445b5b7d019bd9cbd0ebc6', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: 'af6877caa1dab4498a58bfad45e0c7f809747fe1', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, index.h("span", { key: '9d0d2a65d3fe3f9c53bf5bb8f1768ebbbe550f28', class: "px-8" }, index.h("i", { key: 'f1b844a08f2f35e0e842480b68039796ec9e41d6', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), index.h("input", { key: '24f9e83e07a556787414fd9facbb829d19e60215', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '9ef26f544e73f318d4d81c90dc90e30a0378c821', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '3a546d0a5ef7cd9e8be636f7c3890db70aa10225', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), index.h("span", { key: '27b4870d0771439659da89b5578474f6142c78cc', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (index.h("at-menu", { key: 'c5da9b62c5eb6d8ac0fbecefed0d4ff8b82d2443', width: "fit-content", align: "end" }, index.h("at-tooltip", { key: '62b7791b951d9065037cd58a7ed4b763e0283a49', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: '4cb4ff8b5ad043677bde872283c40d2f5c0cfe41', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: '362d733d211d6221334340beb20d32fe41f198fc' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: '92f20d8eeb7518a7fd1c59ced65905395f6e3f5e' }, index.h("at-menu-item", { key: 'e45501e95ae9324602cd31d2d7ee6452c0e23fe4', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), index.h("at-menu-item", { key: '46f113ee37881a1a54b3ecc1950e7d756d5185eb', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (index.h(index.Host, { key: 'b0ddd071f90f02f302ab4ab561ce707f911002c0' }, index.h("at-menu", { key: '8a319a63b74242215254b8a8a9b604c2db2ecdbf', autoclose: false, width: "fit-content", class: "self-start" }, index.h("at-tooltip", { key: 'b6b7ec02bfe63478e90156b32d480696661db144', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: '78417818748ac2c3e4f5df2267cd02df1226b6c6', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '321436de5e0095ce56ffe638b8c566aa8db0232b' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: 'e5ee73fceecee50e7dc4a8d0c0b83998ebfadfa3', class: "flex flex-col" }, index.h("at-checkbox-group", { key: '7929ca66048d884796a850c3b47f458a14100926', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (index.h(index.Host, { key: 'aa68de03e56af1303b76e5d0bdc7d36643937d89', class: "flex items-start gap-8" }, this.selected.length > 0 && (index.h("div", { key: 'a17235064bdc8b4d96c0da077813640084747b26', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), index.h("at-button", { key: 'b6183d994fcfa52ade09602812c077b1fdd0fc40', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.cjs.js.map
