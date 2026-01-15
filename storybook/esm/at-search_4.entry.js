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
        return (h("div", { key: '7087aad8e30e41868251d5ef2e76695cd044691a' }, (this.label || this.info_text) && (h("at-form-label", { key: 'd0dcab91841dc3bced06d04097b2cff2d6480af0', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'c73314a6911bcd7b35f3e640202695c63703b200', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '0c8aa68e76d33ad056fb2810979924a2c4c86efa', class: "px-8" }, h("i", { key: 'd8f77ba627668075ab369f1b670a34eccd2696af', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: 'cfa497dfc05ba560fe0e38333b4552ba743da659', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '6ebe84971367dfa6dd26fa22e3185d7bd3e30c98', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: 'a5e63025721eb7309d6793eb62434f8c3a5d5640', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: 'bfeafe39107e30b9558b6dfeeec0f8f2a8b0fa48', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        return (h("at-menu", { key: '74709471b0f1aad97ab1d5a41269cbc495a0b5e4', width: "fit-content", align: "end" }, h("at-tooltip", { key: '89e532dcee45a8f911f246dc594afc967f9fa655', slot: "menu-trigger", position: "top" }, h("at-button", { key: '86e6b2cb254138970ec0d9bda4d810696514cb7a', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'ad8a57280b1e6a3cad0203ef604166f3cc558ab2' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'a1e9b5359b10fe75a97286d2f0ec3b5c384a488f' }, h("at-menu-item", { key: '8f5b8b72ed79203e44c2b26ecdd5c06795b0d188', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'a365569174bd10af1a0696e472c361660588d4eb', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (h(Host, { key: 'b40480d2b227e039a8f8a50b9614e19c70940f06' }, h("at-menu", { key: 'bceabca730cc6b4be5a31d85a9cccba94b454be0', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '76823e0a9ee58df8b6ee7b6a41e8e6ee1c3f5bd4', slot: "menu-trigger", position: "top" }, h("at-button", { key: '564e0bf69b6ba45d11582fa17798b75c9ab99ba9', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '7803450846c97f716307478f293b8f2c4f88460c' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'ba8af99eaf2ccc03576df1b35433308e3520e935', class: "flex flex-col" }, h("at-checkbox-group", { key: '2c6334759cb06f5023ad3d1a0b5ba5f0c50d0c5f', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: '7e6ec317a5643bb945da15b57123e0d4a6c901fc', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: '6355d188effe188f5e612fead5e1d2dd155ec195', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), h("at-button", { key: '2149df20b20a06549469dd80f354059ba0db0066', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

export { AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters };
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.js.map
