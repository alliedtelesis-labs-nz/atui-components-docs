import { r as registerInstance, c as createEvent, h, g as getElement, H as Host } from './index-Cd7WF2gX.js';
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
        return (h("atui-menu", { key: 'e2b74f5723726012ed929c068c58da2e34719f2a', width: 'auto', align: "end" }, h("atui-tooltip", { key: 'da2ce5940c24fec0dc5c99772277a35e90c80d8f', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '91e8ed1a6ab29e8e5b1645a9ff652b236a455815', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'd587c3ce40750d4b5ed6ccc2a6a7d0e2fc59c124', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '81ec14e73ce5ca7b1793ab17d94f12a04d724552', slot: "menu-content" }, h("atui-button", { key: 'a6565c3dbf5c5bc770b9c4767991d2ffa102ef50', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '166c40156c567efe4dcbe88aef6d2b5d8efc88d3', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
        return (h(Host, { key: 'a510a028cdbbbbc32bc2307e17cde8a3564f901a' }, h("atui-menu", { key: '503e0fe6c8ff4852d657013c02ad3cdcc64e8ce8', autoclose: false, width: "auto", class: "self-start", portal: true }, h("atui-tooltip", { key: '725ccc04a0988b2e724f2d55b87e0a44f3835af6', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '5a14b1ab041c5a2c41d8815590fa2acc452abce4', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '264129cf21431dd031ac1ac30929b64686737c7b', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '35cdb8cd73d28280957927c1cc1fabf877e8172f', slot: "menu-content", class: "flex flex-col" }, h("atui-checkbox-group", { key: '3f2db823923be0c742b33b6c6ef099647ac7638b', slot: "menu-content", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: '8a0a70893046eae9ba52465d2412387c03d0cc6a', class: "flex items-start gap-8" }, h("div", { key: '6dc0e1baad3a56545b53147672add1ea19d1071b', class: "flex min-h-[36px] flex-wrap items-end gap-8 rounded-md bg-surface-0 p-8" }, !this.selected.length && (h("p", { key: '7e3e7fb5d42193d06c8ffba8c5b6a110772b92c8', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("atui-button", { key: 'd271ebf380617e3885501029c366e0086d641cda', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return getElement(this); }
};

export { AtuiSearch as atui_search, AtuiTableExportMenu as atui_table_export_menu, AtuiTableFilterMenu as atui_table_filter_menu, AtuiTableFilters as atui_table_filters };
//# sourceMappingURL=atui-search.atui-table-export-menu.atui-table-filter-menu.atui-table-filters.entry.js.map

//# sourceMappingURL=atui-search_4.entry.js.map