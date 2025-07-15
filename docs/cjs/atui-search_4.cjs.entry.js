'use strict';

var index = require('./index-BJDFmEHZ.js');
var translation = require('./translation-HqquF7bU.js');

const AtuiSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
        return (index.h("div", { key: '92aeadbb6e82ef57874abdbad39d8061eb34ad22' }, (this.label || this.info_text) && (index.h("atui-form-label", { key: '383105c142f0bf65fd6e949c6130a3c961f82846', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: '11c106d2dd0077bc7aaaf9fa3465621da4aead84', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, index.h("span", { key: '433f71bbc98a469262e5bd12bd2d16e1e6a05688', class: "px-8" }, index.h("i", { key: 'ede4cf03a5750030b89c64d29f9951014ffa2efc', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), index.h("input", { key: '20b05a3cd26893bef97209217740487b0b9e6de9', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: 'c13bbf3dd680c220442a355a46a0124f210789fd', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("atui-button", { key: 'b19c0582cd1d1dfa81fe0babd0fc4c38da47dcb6', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), index.h("span", { key: '1754452bc11649b946b633eddc77209d112f81ee', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
    }
};

const AtuiTableExportMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    clickHandler(event) {
        this.atuiChange.emit(event.target.id);
    }
    render() {
        return (index.h("atui-menu", { key: '759c53fbe29895ebaa4b3f498bd284bc43621442', width: 'auto', align: "end" }, index.h("atui-tooltip", { key: '474c55b800909d844553f3b1bac2ebe040095e74', slot: "menu-trigger", position: "top" }, index.h("atui-button", { key: 'b00a2478991c3493e3c34934abf2a45ae21615c8', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: '2985c9e0a7921a9cd2c262a32e4a9822936e2c6a', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: 'd90554b4b26ddab18581fd36b81457c5dda64307', slot: "menu-content" }, index.h("atui-button", { key: '7a177056498a73aa9d4ebdbea82786363c132710', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), index.h("atui-button", { key: 'dc1b5e4bdae345fc18cee6d78f97c6974a11eda8', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
    }
    get el() { return index.getElement(this); }
};

const AtuiTableFilterMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return (index.h(index.Host, { key: '50170c4379c16843edb4c1b83bb365f29d897c47' }, index.h("atui-menu", { key: 'c80285a33cecc5a020ad9a153ebf7ba9457feaac', autoclose: false, width: "auto", class: "self-start" }, index.h("atui-tooltip", { key: '591d6b0e1d0e04b7d951d9ab687dd4f965946826', slot: "menu-trigger", position: "top" }, index.h("atui-button", { key: 'd7b458482c23e8e2294c203d893e8a984f9cb19d', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '9d9371f08a0941d5807b2ccf144791d6b4e7a54e', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("atui-checkbox-group", { key: '5c25453cd10b5f4bbcd50a898b58437cdd79ed42', slot: "menu-content", options: this.filteredColumns, value: this.selected, onChange: (event) => this.handleColumnSelect(event) }))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
    }; }
};

const AtuiTableFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return (this.col_defs && (index.h(index.Host, { key: '5d637fabe6f17fb2cad801ef3eee09f8555419d2', class: "flex items-start gap-8" }, index.h("div", { key: 'ac95e5f710a420d75b9f70b0ad5ff4236cb89a7d', class: "flex min-h-[36px] flex-wrap items-end gap-8 rounded-md bg-surface-0 p-8" }, !this.selected.length && (index.h("p", { key: 'fcba479cd96adf414584283a434f2d339b46332b', class: "text-light" }, "0 Filters")), this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (index.h("atui-button", { key: '7911975e80252c5dded18958a8983163ad563894', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_search = AtuiSearch;
exports.atui_table_export_menu = AtuiTableExportMenu;
exports.atui_table_filter_menu = AtuiTableFilterMenu;
exports.atui_table_filters = AtuiTableFilters;
//# sourceMappingURL=atui-search.atui-table-export-menu.atui-table-filter-menu.atui-table-filters.entry.cjs.js.map

//# sourceMappingURL=atui-search_4.cjs.entry.js.map