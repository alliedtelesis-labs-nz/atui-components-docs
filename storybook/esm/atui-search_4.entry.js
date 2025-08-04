import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-D3rwhcmG.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';

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
        return (h("div", { key: '0947c6967da448c12466af00e6b46120db8a823a' }, (this.label || this.info_text) && (h("atui-form-label", { key: 'bdda8d81bdf251945b4760244aa1ae77ae7a1a48', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '588a243d474ff7c5768ef0d21c18fd50022529b1', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("span", { key: '0fdd1fef4e22bd5b26f506c98db23bcd81ec1051', class: "px-8" }, h("i", { key: 'a2e40eb989672062c40c7e6e73d072f3d7a9e4ce', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), h("input", { key: '5a66dc5c8de5c6f6a2feaabe223e1a5c4ac809a6', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '57c3748d63c0c9c67e3438aaae264de2d031b0c1', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: '1a293693e62c21dde8a8bdb0b834025327bcea2b', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '31cba0702a026255445fe8c1c23294779ab77aa4', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
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
        return (h("atui-menu", { key: 'eb019fa58204238f6f841749b9f7ff3c9752d922', width: 'auto', align: "end" }, h("atui-tooltip", { key: '53d7ded95b74a451fc9e7b20a65c2b90b6ead7f6', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'b184478053164be85b5d4d73f7ee71380e0a0a8b', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '55711746f7eaf1b437321107d5dc834c046c89d3', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '92e546300bb153789cd0eb3c2ad0070163d4a06b', slot: "menu-content" }, h("atui-button", { key: '268df22be715b76a459db57df510ee096c1cf919', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '6cb9ee6092ecd27df6a5b3268ccffcbb4d50f3b8', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
        return (h(Host, { key: 'b47f61efe3fc6416fdffff50146d679932991261' }, h("atui-menu", { key: 'f0f95ccad5e60f2aef1ea7873dad70b0da3b643c', autoclose: false, width: "auto", class: "self-start", portal: true }, h("atui-tooltip", { key: '0c74015bc0b6fe22f299c3c2b7845838241c1e23', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'c48d99e2af5affadb39a8846099dd7ef8632dd0c', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'c8822bab720a691c892fa4d4193442afc921ba13', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'ab0bd151ee7311f8779a72180510486f0e91ccf6', slot: "menu-content", class: "flex flex-col" }, h("atui-checkbox-group", { key: '2b0d5bb1e462edbdab9de93901db92c0dc0d1ef1', slot: "menu-content", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
            this.atuiChange.emit([]);
        };
        this.clearSingleFilter = (columnId) => {
            this.selected = this.selected.filter((column) => column.id !== columnId);
            this.atuiChange.emit(this.selected.length ? this.selected : []);
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
        return (this.col_defs && (h(Host, { key: '38e039f1c01b5434561bf610f5fa2e8baaeaba1a', class: "flex items-start gap-8" }, h("div", { key: '93c68a854fc10cd93b0875e99b1c7f3a94ae48f6', class: "flex min-h-[36px] flex-wrap items-end gap-8 rounded-md bg-surface-0 p-8" }, !this.selected.length && (h("p", { key: '3b8c1bfb10f6f30a01f021b62579f731f8471bed', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("atui-button", { key: 'bcc8a26ecf6061c2b691d9026a74eb447dee792d', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return getElement(this); }
};

export { AtuiSearch as atui_search, AtuiTableExportMenu as atui_table_export_menu, AtuiTableFilterMenu as atui_table_filter_menu, AtuiTableFilters as atui_table_filters };
//# sourceMappingURL=atui-search.atui-table-export-menu.atui-table-filter-menu.atui-table-filters.entry.js.map

//# sourceMappingURL=atui-search_4.entry.js.map