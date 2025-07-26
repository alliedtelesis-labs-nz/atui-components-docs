'use strict';

var index = require('./index-BAt2i-T2.js');
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
        return (index.h("div", { key: '5ced24996906e32db8884ea8779c138b2e83b3ee' }, (this.label || this.info_text) && (index.h("atui-form-label", { key: '8182a57e5be8a7e80e381afe42c1f899ccd7b594', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: '6a009d133e3dd998aade68bd5e21e6e5144e0307', class: "active-within:border-active-dark transition[background-color,color,box-shadow] relative flex h-[36px] flex-row items-center justify-center rounded-md border border-med bg-surface-0 duration-300 ease-in-out focus-within:border-active-dark focus-within:ring-2 focus-within:ring-active-foreground/30" }, index.h("span", { key: 'bd7f60e38f80ff25cb029c9429bfd53e4cc87b47', class: "px-8" }, index.h("i", { key: 'c85ce3e9871df41b0eda63dbff65c91914ba3033', class: "material-icons !text-[16px] !leading-[30px] text-light" }, "search")), index.h("input", { key: 'ac913d7d15d4aaa3e5881bfa2bef4253101aa238', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '27789aebbb2e33fd107b51570add48b6e26664aa', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("atui-button", { key: '96dad67fd11dbaea7353fa64b2dc42da73c45243', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), index.h("span", { key: 'f501549a35b9a67d8d6d5057c86e99c6c23755c2', class: "mt-4 truncate text-xs font-normal !leading-normal text-med", "data-name": "search-hint" }, this.hint_text)));
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
        return (index.h("atui-menu", { key: 'ce73f9d409bbab38ffe391467088f907016cbcd5', width: 'auto', align: "end" }, index.h("atui-tooltip", { key: '64ab1841d484c28483d723c8031f2234c837e016', slot: "menu-trigger", position: "top" }, index.h("atui-button", { key: '6708b7747c84ac1d4e8d08abe7033ee8b809a6e7', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: '381e2a1944325adb8d249fdbcceef36cbdd8caca', slot: "tooltip-content" }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: 'f5e9d74db805c230fe3e2804a11a75ef2959c6c4', slot: "menu-content" }, index.h("atui-button", { key: '949f8d030bd563a53fb4ff0045011b0ac987ba4e', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), index.h("atui-button", { key: '3cde9999b2346d381a7090c7b25d6d808183989a', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
        return (index.h(index.Host, { key: 'bb481946394e723d7c4466ba8346c3bc36ddd86f' }, index.h("atui-menu", { key: 'af3c16995b3b63c98fe363cbceec53bc8b18e099', autoclose: false, width: "auto", class: "self-start" }, index.h("atui-tooltip", { key: '9f357747c3efa4da3fd79e88d7c6a923865196aa', slot: "menu-trigger", position: "top" }, index.h("atui-button", { key: '702f28a5da199d15cdfec51f3f8eb328cc4598ed', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '31a4cc7d08d6e8b9395b01be29f48acdb760bfef', slot: "tooltip-content" }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: 'a2fd296eaccc8de1b2de0f1b6bfa9e29c33afb60', slot: "menu-content", class: "flex flex-col" }, index.h("atui-checkbox-group", { key: 'e2690f3f808e74779102785b968c525c692af44c', slot: "menu-content", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (index.h(index.Host, { key: '78c3c6f157a38e018b25cd9736f238d5a0a5ae9a', class: "flex items-start gap-8" }, index.h("div", { key: 'a5083957e7dc1eb84dce205ff38cf2605f603ec3', class: "flex min-h-[36px] flex-wrap items-end gap-8 rounded-md bg-surface-0 p-8" }, !this.selected.length && (index.h("p", { key: 'db27a9d2132d967ccde463592b2134e6f19c5395', class: "text-light" }, "0 Filters")), this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (index.h("atui-button", { key: '8e5b789cd79e0b6495b440143ef0e7d9d2fd3cd8', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_search = AtuiSearch;
exports.atui_table_export_menu = AtuiTableExportMenu;
exports.atui_table_filter_menu = AtuiTableFilterMenu;
exports.atui_table_filters = AtuiTableFilters;
//# sourceMappingURL=atui-search.atui-table-export-menu.atui-table-filter-menu.atui-table-filters.entry.cjs.js.map

//# sourceMappingURL=atui-search_4.cjs.entry.js.map