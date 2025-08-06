'use strict';

var index = require('./index-43B6Ydvl.js');
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
        return (index.h("div", { key: 'b2cff02213df441e3beb7829d4229e31682337c0' }, (this.label || this.info_text) && (index.h("atui-form-label", { key: '5a54d253887dd6017946a2f98bd0539d57542888', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: '38dbfb4b98488c8d8c889e30e87991abd91b8c93', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, index.h("span", { key: '703492fe78ca81513ed298246c12fcb5f3caa526', class: "px-8" }, index.h("i", { key: '8dd59516e809b320a9304fa2cb280000fdd36249', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), index.h("input", { key: '821a2d3aca6d129a3cd9d2b4a55d58b10f2284d0', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: 'cbc202c0c30b954e10b63aeab4c598d2f2c6a339', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("atui-button", { key: '0171d34d09c7f4e785e8dbae5610a877ddefcc0f', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), index.h("span", { key: '2898208d6c9ae7e48b8a5dafef842b5872563f77', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
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
        return (index.h("atui-menu", { key: '291aae2fc383f713313f08daf7599117e723e790', width: 'auto', align: "end" }, index.h("atui-tooltip", { key: '0a6f7801d607330a524ea5cd7739fb90bc743a8c', slot: "menu-trigger", position: "top" }, index.h("atui-button", { key: 'd26a4d615b35db0891f83b5e1b5334870a7804e0', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: 'a0bfbf8bc1bb8b4bca1254bbadae05ef44a04073', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: '77afc4ed027f35ee83cc950831497d1316ed8c7d', slot: "menu-content" }, index.h("atui-button", { key: '21250255ca5415420a61aa43970b22a4c1242657', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), index.h("atui-button", { key: '816b08d86708147ecc1c90c24968ddb390902988', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
        return (index.h(index.Host, { key: 'e49b326c2f3f4c2581e553dadfe10a21edbbb3d6' }, index.h("atui-menu", { key: '33fa8d8893181f32022411621815d34078bef1b6', autoclose: false, width: "auto", class: "self-start", portal: true }, index.h("atui-tooltip", { key: '1c7d301621a4faeec4c9584dbac1573e74d3b67f', slot: "menu-trigger", position: "top" }, index.h("atui-button", { key: '2db8a786f7c44975780ba5641600504d7abc1b37', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '5e01bba9df12e73e15656e99984b6f82091b5fb9', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: '0a7c03db24df7c7e71418d7c5fb194de1b9b8f12', slot: "menu-content", class: "flex flex-col" }, index.h("atui-checkbox-group", { key: '204aec996c5520a92cf99a5c373910b2a4c62db9', slot: "menu-content", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
            this.atuiChange.emit([]);
        };
        this.clearSingleFilter = (columnId) => {
            this.selected = this.selected.filter((column) => column.id !== columnId);
            this.atuiChange.emit(this.selected.length ? this.selected : []);
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
        return (this.col_defs && (index.h(index.Host, { key: '3483ae5551292e2128e15534c5d3f20582b51762', class: "flex items-start gap-8" }, index.h("div", { key: '4d8dafb60574ced2701d29112f4320b5b492199a', class: "flex min-h-[36px] flex-wrap items-end gap-8 rounded-md bg-surface-0 p-8" }, !this.selected.length && (index.h("p", { key: 'b8c920779083cd153ab21dc881b5dc63a7305872', class: "text-light" }, "0 Filters")), this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (index.h("atui-button", { key: 'b81c9250276f58d7d667a818f44aaf6f8210762d', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_search = AtuiSearch;
exports.atui_table_export_menu = AtuiTableExportMenu;
exports.atui_table_filter_menu = AtuiTableFilterMenu;
exports.atui_table_filters = AtuiTableFilters;
//# sourceMappingURL=atui-search.atui-table-export-menu.atui-table-filter-menu.atui-table-filters.entry.cjs.js.map

//# sourceMappingURL=atui-search_4.cjs.entry.js.map