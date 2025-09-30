import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-BlNBm0E8.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';

const AtSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atChange", 7);
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
        return (h("div", { key: 'a21eb0988151f4f2f6c59f77053ff661888c05f6' }, (this.label || this.info_text) && (h("at-form-label", { key: '503354533d1b5a3fe7c020470d953fa2c88a1837', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'e3570ca7b14f454a0661a06a223525de995719a4', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/30 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '0718b3bb49e1bd98392c1746a9507ffdbec45222', class: "px-8" }, h("i", { key: 'f29213ef45c8c1c879fa4193dd6472889c9ec9b1', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: 'c31ff327e88614e67a42132a889ade265c2912bf', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '53b504fa5a346d1ec0d090f1d9516d89d3d8d2b5', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '164ac4271630766f1ae04497b1fab0b7247ae64d', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '1abe9527f3d5bcb61e1aaada1704c8ff6f9bbd3f', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
    }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atChange.emit(event.target.id);
    }
    render() {
        return (h("at-menu", { key: '6e873ab59cf2f7c95717d744e83676b4803713c0', width: 'auto', align: "end" }, h("at-tooltip", { key: '64a660a2d3fcc6878799041c243c18884d280fc2', slot: "menu-trigger", position: "top" }, h("at-button", { key: '29f4e9f57e92395542e5287cbb0a694e66c644d2', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '33eb172cad9d3fb1ca90c1d0e93538efe939ddbc' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: 'aeff5dac94979ea05430e06433c98a5b5863133f' }, h("at-button", { key: '965b82ffbcd25e64f00db2624521512d0601271d', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: 'fed3f7d4e78bc73cb922aa683682c7bdd33a4d40', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return getElement(this); }
};

const AtTableFilterMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
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
        this.atChange.emit(this.selected);
    }
    render() {
        return (h(Host, { key: '5940b92f7f69d89d5f4a3b65b27dadfaa7981dcd' }, h("at-menu", { key: '8f44c54eadef9a7dd3e035c83d4a3fff600852b3', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: '960486b1a5358404fd4637c068e20d287f66ed33', slot: "menu-trigger", position: "top" }, h("at-button", { key: '80fda7b9a4070ddf0bac766a91817b74474a7f82', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '5ad305c2a07f10baf0eecd1c0c07484882997d84' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'bfb6632cc2591e4554556e842ce8bbe06fbc0bdb', class: "flex flex-col" }, h("at-checkbox-group", { key: '34057e86c5b50e2e526e624345a324ab76d1518d', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
};

const AtTableFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        /**
         * Currently selected columns and filter values
         */
        this.selected = [];
        this.clearFilters = () => {
            this.selected = [];
            this.atChange.emit([]);
        };
        this.clearSingleFilter = (columnId) => {
            this.selected = this.selected.filter((column) => column.id !== columnId);
            this.atChange.emit(this.selected.length ? this.selected : []);
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
        this.atChange.emit(this.selected);
    }
    render() {
        return (this.col_defs && (h(Host, { key: 'ae720bc323423fd279af3171ccea27ba87521942', class: "flex items-start gap-8" }, h("div", { key: 'a5f1785c775656e515fb2ad65d15e8b4b689d95a', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, !this.selected.length && (h("p", { key: '109179ca64b8ccf9c6bc0da28101b18361460a9e', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("at-button", { key: '510f9e9ead96e3da96967c34743a544e875b38e9', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return getElement(this); }
};

export { AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters };
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.js.map
