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
        return (h("div", { key: 'b2cff02213df441e3beb7829d4229e31682337c0' }, (this.label || this.info_text) && (h("atui-form-label", { key: '5a54d253887dd6017946a2f98bd0539d57542888', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '38dbfb4b98488c8d8c889e30e87991abd91b8c93', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/30 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '703492fe78ca81513ed298246c12fcb5f3caa526', class: "px-8" }, h("i", { key: '8dd59516e809b320a9304fa2cb280000fdd36249', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: '821a2d3aca6d129a3cd9d2b4a55d58b10f2284d0', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: 'cbc202c0c30b954e10b63aeab4c598d2f2c6a339', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("atui-button", { key: '0171d34d09c7f4e785e8dbae5610a877ddefcc0f', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: '2898208d6c9ae7e48b8a5dafef842b5872563f77', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (h("atui-menu", { key: 'f48579b701c1f0edbff730af90a0a23ea02ca4de', width: 'auto', align: "end" }, h("atui-tooltip", { key: '5782ab6770f7130d50f68974a129791221edcb61', slot: "menu-trigger", position: "top" }, h("atui-button", { key: 'a78a2ba87f082124aeb0bad8b5988bb44764edfa', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'b1e243e7fc4362e22a6dfdf6cb6589d4ab97cfa2' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '53315683d8f51f25edc6b75d48a2c7e2fbecca47' }, h("atui-button", { key: 'b436a00e3eb3c591e9469025ca7bf0676bcf975f', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("atui-button", { key: '1f1f5af1fc55d50733eeb3afd529d4cd783e4cda', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
        return (h(Host, { key: 'af85093d06745ef3a292e35800c6be9188cc24ec' }, h("atui-menu", { key: 'cc5df41a04472c07e7773e1dbace21c91cd2710f', autoclose: false, width: "fit-content", class: "self-start" }, h("atui-tooltip", { key: 'a290556f2ffb18c340d5091a46d3fc3fb9157e76', slot: "menu-trigger", position: "top" }, h("atui-button", { key: '45cb5de34757464b99f365b477728a7ed69ff941', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: '9ed3c9f66365be2d20cd912b753fa5749905b3e6' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'baf74a350f61fc62083424a024ad304c7aaf4347', class: "flex flex-col" }, h("atui-checkbox-group", { key: 'b624a05940a6fecc2ce1b4ff14c538e477c7d6d0', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: '87b7e34a1d62e6e201f7f71ee52203aa76006541', class: "flex items-start gap-8" }, h("div", { key: 'e528e9d9f01b11e7d11c62a9aaf644320c3eced6', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, !this.selected.length && (h("p", { key: '77c5982545317a3c4cd5728db1d6716f8de59b0f', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("atui-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("atui-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("atui-button", { key: '55c3a5b3776371bb1cd2a166fb3debadb26a60fd', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return getElement(this); }
};

export { AtuiSearch as atui_search, AtuiTableExportMenu as atui_table_export_menu, AtuiTableFilterMenu as atui_table_filter_menu, AtuiTableFilters as atui_table_filters };
//# sourceMappingURL=atui-search.atui-table-export-menu.atui-table-filter-menu.atui-table-filters.entry.js.map

//# sourceMappingURL=atui-search_4.entry.js.map