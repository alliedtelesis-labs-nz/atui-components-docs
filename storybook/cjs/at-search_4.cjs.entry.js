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
        return (index.h("at-menu", { key: '1334afc74573706f7beb23b48f4b34dd7e2e3e08', width: "fit-content", align: "end" }, index.h("at-tooltip", { key: 'c6c7af0d33aea3ab4003afa7906c9c361234d26a', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'bd1cec0e0ea5efd3703f1850753618051fad93e2', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: '5a56258406c1a664026a6ef40044efc2cc6e0ad0' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: 'a616d3c9f56d00dc71517eda40e8632ceb8032c0' }, index.h("at-menu-item", { key: '9712e46905e3931bafd80280622c358783b11a9d', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), index.h("at-menu-item", { key: '9fb8ee47838fc9e48a4941cf2700fc7ed1676419', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (index.h(index.Host, { key: '9488b5e1339cb1e20913ac7a2a6f9e94954298fb' }, index.h("at-menu", { key: 'ba7c307184f74729a763a47efed601b2afa0601e', autoclose: false, width: "fit-content", class: "self-start" }, index.h("at-tooltip", { key: '01da92a337f95a7259f5a957659f34aca84f09fb', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'bd0724e70754a570fa6116436dfed9414f7e70b1', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '584b95a9db331d4d6220f87f52a2e632be049f2b' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: 'b74f7dce6d190bddb4a380e11c1f1e5b8ab6743d', class: "flex flex-col" }, index.h("at-checkbox-group", { key: '394e3468cbf660359bc952b7d18bdc1807ef4c4e', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (index.h(index.Host, { key: '257622b5f6799270ac74d564619d65ab57bd3624', class: "flex items-start gap-8" }, this.selected.length > 0 && (index.h("div", { key: '5d7a3272465159c566c15bde21b1b933cd498118', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), index.h("at-button", { key: 'bff7d46a16256d5a24fe352137d84aa2417b463b', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.cjs.js.map
