import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-EP34iaAr.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';

const AtSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atChange", 7);
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
        return (h("div", { key: '4491d7d5af7ef1bfbb08cf0935c90a71218040ac' }, (this.label || this.info_text) && (h("at-form-label", { key: '631246df7551ddcb0264bb0eb605d93b44c25182', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'd36fd4f84c427eccf79a63f982a8f6c59591c416', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/30 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: 'a25fe92511eabc949807f0e771cb0749106423f3', class: "px-8" }, h("i", { key: 'f4a7642de6da0577b526be010bcfdd026c13f4ac', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: 'cd0dd55e8f9587bdf58aa65b52beb9d761c42be6', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '2a88b0f82d3522aedc7694893dad57c56c735df8', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '2847b6d9f0a47f4fc29af10d0a9c66bf8af33412', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '542dfe6e2475f7b92386587c2233d4a2cc3e255a', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
    }
    get el() { return getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emits id of the clicked button, either 'CSV' or 'PDF'.
     */
    atChange;
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (h("at-menu", { key: 'a41b85dd4f6eb8ef8bebf166f143a70aa842ce51', width: '200px', align: "end" }, h("at-tooltip", { key: '192f633f5b0a60418b242f3229317959591d842f', slot: "menu-trigger", position: "top" }, h("at-button", { key: '83ff5e02abb4508cb13bb9ba1870b537d71bdc81', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '7ebf0723c588312269eab8f14719324ca4edcee1' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'bd1f95a828cc454d12695e30ff61139704ced1da' }, h("at-button", { key: 'a23082ee616cc1771831bec0507404bc7a6eecef', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '8066809ff9cabb481c521503cf01df6a38c6ad88', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
};

const AtTableFilterMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
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
    get el() { return getElement(this); }
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
        this.translations = await fetchTranslations(this.el);
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
        return (h(Host, { key: '9488b5e1339cb1e20913ac7a2a6f9e94954298fb' }, h("at-menu", { key: 'ba7c307184f74729a763a47efed601b2afa0601e', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '01da92a337f95a7259f5a957659f34aca84f09fb', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'bd0724e70754a570fa6116436dfed9414f7e70b1', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '584b95a9db331d4d6220f87f52a2e632be049f2b' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'b74f7dce6d190bddb4a380e11c1f1e5b8ab6743d', class: "flex flex-col" }, h("at-checkbox-group", { key: '394e3468cbf660359bc952b7d18bdc1807ef4c4e', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
};

const AtTableFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
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
        return (this.col_defs && (h(Host, { key: '257622b5f6799270ac74d564619d65ab57bd3624', class: "flex items-start gap-8" }, h("div", { key: '6616e3859ed9a1fd238c4f31db2b61da2d85ef58', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, !this.selected.length && (h("p", { key: '791389e79b43855a99805b82bffd33ec83fe862e', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("at-button", { key: '32cc957483c383132a8be1fde6820d74859d8cc7', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

export { AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters };
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.js.map
