import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-HJO1YDmC.js';
import { f as fetchTranslations } from './translation-CDu8lP-T.js';

const AtuiSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        return (h("div", { key: '9eb6978e10fae326252ae3c597b1db9afab8fba4' }, (this.label || this.info_text) && (h("atui-form-label", { key: '7a0b8028233c50ae50e6950464f0d1e08391bb49', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '5511031c78b6543a5c798fc5d15cc468eda0d2a5', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("span", { key: 'c01e51e85d8c1a47ea525a70e98509d48ad9a746', class: "px-8" }, h("i", { key: '3b79379cebad5d0c52e78252cd74028507774213', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), h("input", { key: '9cf5797f0f228140255035411b7c6a0e341741a6', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '66ba546df3a517e07664282077c160cd371fb71d', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: 'afa4859dde5a5d1f30b6bf3ce537d3fb0ab92644', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '85b4764649cef41e41c9d5bd591e279f2c604e19', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
    }
};

const AtuiTableExportMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atuiChange.emit(event.target.id);
    }
    render() {
        return (h("atui-menu", { key: 'd661b503ad685a628f808747771971acbbf3fc4b', width: 'auto', align: "end" }, h("atui-tooltip", { key: 'eaca7b1f5c3837892d25cb874c6591e5a3d86696', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '39798e36b89800615332b7d4f25b791b51ad5c1b', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'b30a788616f8108db4fcad6daa71aca78103c080', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'd7ff9c190c6ddf2381469d7a83cdb82b6dd37456', slot: "menu-content" }, h("atui-button", { key: 'c771a7945ce0f8450f811b0f1959b0519077233a', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '51ff3f9dfdd8c35f776534d4500f6bb76ca5cddd', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return getElement(this); }
};

const AtuiTableFilterMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        this.translations = await fetchTranslations(this.el);
    }
    handleSelectedChange(newValue) {
        this.selected = newValue || [];
    }
    handleColumnSelect(event) {
        const newValue = event.detail || [];
        this.selected = newValue;
        this.atuiChange.emit(this.selected);
    }
    render() {
        return (h(Host, { key: '38ec8d74c53a0eed7d555531a5d2e30fea05266e' }, h("atui-menu", { key: 'b29301ea4395c1afc66675d65bd1f7c49487956d', autoclose: false, width: "auto", class: "self-start" }, h("atui-tooltip", { key: '8c46d2bdb7c0f226b3a7da860d74aa7608da5753', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '741486073e07aee31cbb8c54df9429ddbf7046c6', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'a6ab27c113ed85f51f9cd5c67eb59f3a352dea29', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("atui-checkbox-group", { key: '03b136ceeb899bed13dadda0946e9281367e8609', slot: "menu-content", options: this.filteredColumns, value: this.selected, onChange: (event) => this.handleColumnSelect(event) }))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
};

const AtuiTableFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Currently selected columns and filter values
         */
        this.selected = [];
        this.clearFilters = () => {
            this.selected = [];
            this.atuiChange.emit([{ id: '', value: '' }]);
        };
        this.clearSingleFilter = (columnId) => {
            this.selected = this.selected.filter((column) => column.id !== columnId);
            this.atuiChange.emit(this.selected);
        };
    }
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
        this.atuiChange.emit(this.selected);
    }
    render() {
        return (this.col_defs && (h(Host, { key: '4b760f7a4215209248e9c3bcae7687ab5190c077', class: "flex items-start gap-8" }, h("div", { key: 'b4c9f62354f7dcb92ea3a8bdbb261e94d1b90b53', class: "flex min-h-[36px] flex-wrap items-end gap-8 rounded-md bg-surface-0 p-8" }, !this.selected.length && (h("p", { key: '432cd5a06d6f855ce65a473ee74317a2cc8f31ac', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("atui-button", { key: 'a49886de20d0ddf0d6acef12edf9396e43a6ae0c', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return getElement(this); }
};

export { AtuiSearch as atui_search, AtuiTableExportMenu as atui_table_export_menu, AtuiTableFilterMenu as atui_table_filter_menu, AtuiTableFilters as atui_table_filters };
//# sourceMappingURL=atui-search.atui-table-export-menu.atui-table-filter-menu.atui-table-filters.entry.js.map

//# sourceMappingURL=atui-search_4.entry.js.map