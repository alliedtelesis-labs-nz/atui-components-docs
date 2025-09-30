import { r as registerInstance, c as createEvent, h, a as getElement, H as Host } from './index-C3PSGxNR.js';
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
        return (h("at-menu", { key: 'b7ca749f0da767dedd8c40c415ff06345db93ca4', width: 'auto', align: "end" }, h("at-tooltip", { key: '01d43e72f58aab6eec98c33d3714f4cde93a6625', slot: "menu-trigger", position: "top" }, h("at-button", { key: '2376f8accd88d361943b403f7132c15c47f4bfba', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", { key: 'ad1101b918860e6d24853c48e55db89f4caed4ce' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", { key: '1bf7b05a2a3438e07d5979d98ba30cc593a6f542' }, h("at-button", { key: '56c37fb1bc0ef2fb14cd2c3216ff1b17df9b328f', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV" }), h("at-button", { key: '9a6e9f6192819d54b3cb61adc50b950e15e1811c', type: "secondaryText", label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF" }))));
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
        return (h(Host, { key: '7633c9d7e00b401dbbe0a65c882db9ec0653ba69' }, h("at-menu", { key: 'd6cb04b7ad4aa97a60089a6f611eddb83ad54a2b', autoclose: false, width: "fit-content", class: "self-start" }, h("at-tooltip", { key: 'fc17ee2d4cb5b15879666a4b083b4b32335a0e72', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'f6feaae96d2de0d2c4fa9b2a8603c3df5136f566', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'e3464ae959d2796b9704cf56f564141b95c2674d' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '638e68349da73bad3dd0d7eea971e9d710fd9fbe', class: "flex flex-col" }, h("at-checkbox-group", { key: '9f313b4b875e3d861a06f78b640cb2341170f813', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: 'd4112402a81d0e4243c94db2912ce6cd00332f06', class: "flex items-start gap-8" }, h("div", { key: 'bb6deb7639a2ea124921f49a7cb912190b440de0', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, !this.selected.length && (h("p", { key: '00e198f1c999a45016919004ecdbbe9355130134', class: "text-light" }, "0 Filters")), this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), this.selected.length > 0 && (h("at-button", { key: '75d72bf1eb9353da4681d02a0fbdd6550cd8da3e', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
    get el() { return getElement(this); }
};

export { AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters };
//# sourceMappingURL=at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.js.map
