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
        return (h("div", { key: '0b6b06a5d5961502a5708211e27773f7ce29088c' }, (this.label || this.info_text) && (h("at-form-label", { key: 'c2fa0a14e7f6334f1f3b858a650aa851c6fa4b2d', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'e1a93052f772cfbc69b87385847fdefcc3c13f6e', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '0d65b029fb430adbfb2fa56950880007fb1f1687', class: "px-8" }, h("i", { key: '91832c550295aa654370a0e07f51772058ced9a0', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: '8b788faec855bae92e820d9d58b38e5f634cc59b', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '77bf932b98c66a7a09de1b4bf842f3ea9cb7f624', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '287428398f8216158010fde3ab9d77442eb8c56c', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '4c782338d19303a3e2d52072235e2360d2954ccb', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (h("at-menu", { key: 'ba1e9cd425fb6ea88ec41af83868cea7b50812e3', width: "fit-content", align: "end" }, h("at-tooltip", { key: 'f86876852f6f1adbf97e97c073b927569d4e90ec', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'cfcacf884037fcc2d068da9bd91fad6db095e72f', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '07da416d05fb44105b478b5c6284b8d9bef65078' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '10c3182411a53c4da069c10e93b516f801673ce2' }, h("at-menu-item", { key: 'eed5e80065df3f9eac582a8ad229c0b36a7cd5ab', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'aa0fd42a87d38a5c95eb16f52dc6d0307dbda8b1', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (h(Host, { key: '1ead920cc055581a5f9fb91e64399973692b3c1f' }, h("at-menu", { key: '11c608694d9f9f97ba9c39965a647f8feb1f20b2', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '992c957bc991482fe6c063597eff7188a9d59eca', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'dc55ef6f81e0fb22a240e8dc40caab60468aebc1', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'c32ecf25a41b4c92b0d2d7533654b32cf4e68d59' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '820d6746484381c1960b3ea605080a29bdeed6c8', class: "flex flex-col" }, h("at-checkbox-group", { key: '47adeac0abf492eed44427afe61a9268784aec01', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: 'a1be0614942000b41147143cbe3ccdb616fbc451', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: '9c9ba3374f726d4bc5c446b21de89dcf17231e89', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), h("at-button", { key: '28eef51b3cd31da7de0f17a47395ca745fcbc8b3', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

export { AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters };
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.js.map
