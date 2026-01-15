import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-DW9Wz0FM.js';
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
        return (h("div", { key: 'c5256436a65aacba1c842f3c12de3ea2af8937d6' }, (this.label || this.info_text) && (h("at-form-label", { key: 'd8eb8d37c4be7dd8dba40b511943638f0481aad8', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '967e0d53429f9f9d2e8f6b61d43f3bb3025836f0', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: 'fe4784779d3c594c66e7ebfa317a20d9c81cd8b3', class: "px-8" }, h("i", { key: '4f15b9758063c118227051adcfb9f5f4be2199d8', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: '9200e76b6ba47e9e6134baa41e7caf0f981f4cb9', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '3185f1185483a9cd6a8a13ea333c770bc7892134', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '147582bd92e8b136975d2d47f3cad2b3286f9c03', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: 'a03283fd484b0832c5b67436560c4559757aea5f', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (h("at-menu", { key: 'ba5ff1f1c34e24ae63c314ac58ff74e3643a2432', width: "fit-content", align: "end" }, h("at-tooltip", { key: '95fbf0bd30080421be8da20e7f2a8196a072b2f6', slot: "menu-trigger", position: "top" }, h("at-button", { key: '86a2e410b444c37abfcd88caeaf7b4fd7ab1a983', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '80031b67595a66fd97135e816043b5a561382c6c' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '97df7463831452b2958c761fcc7bfa132e64b814' }, h("at-menu-item", { key: '759fc5068b460ee93315daca3bc04b97a5b4c8d4', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { key: 'a3134e2683c9ae9e92b583691d093f06316f1185', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (h(Host, { key: '04d971342ea40ae7cc08e699edc09fb06f2db03f' }, h("at-menu", { key: 'fc2ef5c7bd04b3dc66bbfdf6d764f6616fbc2efd', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '090f59476d40c48c23b5c5d50cc058ac5b0981cd', slot: "menu-trigger", position: "top" }, h("at-button", { key: '45b21f7d0d4a868a7b4d6636c57e7d296a6ea809', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '0ed2a7365345e8b79976536c63651fa7f7b64aec' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'cd3ecae8a374262b76ac625aa008ced562c15dba', class: "flex flex-col" }, h("at-checkbox-group", { key: 'cbdd495081672c6aeee5d82e1bf0c9831ee63a1e', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get watchers() { return {
        "selected": [{
                "handleSelectedChange": 0
            }]
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
        return (this.col_defs && (h(Host, { key: '1a4b9730ac0d31a022defa22f065b434222fa229', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: '1d759b566771a790218edec6c8cf94925f111e4c', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), h("at-button", { key: 'fa6ac72cf55404beca780a38cd55bd027415bdfc', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

export { AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters };
