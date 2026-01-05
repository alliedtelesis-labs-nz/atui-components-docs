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
        return (h("div", { key: 'd631d046becf8de96ff57d45ff914bcd40bcf350' }, (this.label || this.info_text) && (h("at-form-label", { key: '1283845bf9be5e09a7e8c479bd3f97c9ee7a9f8e', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '337fa1320475a4cb1ae6393ec5535fe47eab4b15', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '813d4c444d4c167b1e91c127b7e71945939518bd', class: "px-8" }, h("i", { key: 'e3769d0bed0e56d5e9d54c86c483de5c002b7d41', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: '5c91ec2d9345051fbe6c742af4c885bc2d36dd08', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '85efe398d6d37bc30b37bdacc015dd456e74f1b6', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: 'a1ca853fc966207ecfb0417400111998f5fd41c7', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: 'cb8377944410ec6904aa4f57c10230c1bd5a7baa', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (h("at-menu", { key: 'ab456eaef718474084bce8cc04090093f05169aa', width: "fit-content", align: "end" }, h("at-tooltip", { key: '542c8d1b2d35ed844100f67a718c91552a25ee13', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'c276fb65c6418fe1d3cc212d321b7f502a534564', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '6c8febc1bef3d449992a7f5b9b18e76f8f1a8c6d' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'e1c7c5ba6c216c4d7d4550880116c8352de3f082' }, h("at-menu-item", { key: 'ab304e9ab70f97dfc913677b2553a2904962382b', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: '61084621cc09e7aa504d470c5234532925bb3aee', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (h(Host, { key: '2cd1b800a5e751452738ceb9e1ff23014df6c9d8' }, h("at-menu", { key: '3431a1635e65f425a7792f02e0d4bb5f084affe4', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: 'c84639f4d2c07167fa33fdf58aff7b69e7eeea8f', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'de5a0e6707d9e51e68444c210c99af7cbbb21c7b', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '1800bb7fcee588b54784a361f815662a4a91701f' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '4185d23520896be0af6b7cd513275ac59aa8a60e', class: "flex flex-col" }, h("at-checkbox-group", { key: '612dca62e559fb26ea05b3ed9278085086cc61a6', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: '5b2362f4081ff9c0e334865cdae478abf13f603e', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: '1bc4b9ccb803eb863555659aa23bf0872b0e1e6e', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), h("at-button", { key: '5733728ace2f2039f38895ed01d4591196d2a79f', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

export { AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters };
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.js.map
