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
        return (h("div", { key: '6b7e91ed795b84192a49513212f24bbe7b372c97' }, (this.label || this.info_text) && (h("atui-form-label", { key: '23f1ec1434a295f6b82906dc9ac3f5c48a6ca59d', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '5b57a02f7c5b14792ba562cd339713cf0c2ba1bf', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, h("span", { key: '7ff56c81284757cb0d6c7c15bdc4df46d1df58c0', class: "px-8" }, h("i", { key: '947571191a958f99ef1780df1c3a30b4d9a0da6c', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), h("input", { key: 'a252ef76a4c7e99f349b6a163af17f47e627a3b3', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '36ba8aeb03fcbd72d69faa0e6bb4e16147e47c49', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: 'a59512f4e7270331fce481268128dcab4a5cc954', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '2645a49d546071e486888309add9a6abeb47ce43', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
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
        return (h("atui-menu", { key: 'bb147da252a9621d4e9ada81f676da3eae119b1d', width: 'auto', align: "end" }, h("atui-tooltip", { key: '15ea60fc5c3fd4a1482deecc67188350efb9e77e', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '187f59d7eb5ceee45f837314dd3ff2f035c05bca', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: '8348d4315c36b63c112a9a6e728dc6c651783812', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '7a396f66cf39794ba67f4e9925a55473ac5b950a', slot: "menu-content" }, h("atui-button", { key: 'a6c86a2a19124cd0f29fe8e614d6cc32bfd5f918', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: 'e7082243faaec3a1ca63a3a7671a9c900abfc395', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
        return (h(Host, { key: '8cfa90dfa9a376f2b646bbc0832bc7e5d669cbfa' }, h("atui-menu", { key: '1fa1a78689e3e342a990e48a6b97f5c4150f3c70', autoclose: false, width: "auto", class: "self-start" }, h("atui-tooltip", { key: '0ac39d8679798bca84ef72c502c721b5a336463e', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'e82ad19e6b164062eea0b3e2ca51dc432a7f21a0', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '64e242fbc70c5a76205c7fe02eb55baaa195c380', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '3ebbebd7e4b95b314cc947d6da971e06639a0c37', slot: "menu-content", class: "flex flex-col" }, h("atui-checkbox-group", { key: 'b40ea390ce51802006fb038d0f411db53ba49631', slot: "menu-content", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: '313a9e95231c2a638466dd4184cc21fb7303964e', class: "flex items-start gap-8" }, h("div", { key: 'f13512ab8f9c64a88e8165bbccde927a10bf2b58', class: "flex min-h-[36px] flex-wrap items-end gap-8 rounded-md bg-surface-0 p-8" }, !this.selected.length && (h("p", { key: 'e7a836abe699aa659175088a2f79baa877106336', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("atui-button", { key: '4648598b6a1c301b59531f21c93cea4715b791f1', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return getElement(this); }
};

export { AtuiSearch as atui_search, AtuiTableExportMenu as atui_table_export_menu, AtuiTableFilterMenu as atui_table_filter_menu, AtuiTableFilters as atui_table_filters };
//# sourceMappingURL=atui-search.atui-table-export-menu.atui-table-filter-menu.atui-table-filters.entry.js.map

//# sourceMappingURL=atui-search_4.entry.js.map