import { r as registerInstance, h, H as Host, c as createEvent, a as getElement } from './index-m1WDiP3i.js';
import { f as fetchTranslations } from './translation-CxDdWBmt.js';

const atControlGroupCss = () => `at-control-group{display:inline-flex;justify-content:center}at-control-group.at-control-group--horizontal{flex-direction:row;align-items:stretch}at-control-group.at-control-group--horizontal>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:last-child){border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:first-child){border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:last-child)>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:last-child)>div{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:last-child)>div>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:last-child)>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>*:not(:first-child){margin-left:-1px}at-control-group.at-control-group--vertical{flex-direction:column}at-control-group.at-control-group--vertical>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:last-child){border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:first-child){border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:last-child)>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:last-child)>div{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:last-child)>div>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:last-child)>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>*:not(:first-child){margin-top:-1px}`;

const AtControlGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Layout direction of the grouped elements.
     */
    direction = 'horizontal';
    render() {
        return (h(Host, { key: '2cad52c4cabb5f603994c3986ef0e2040c67406e', class: `at-control-group at-control-group--${this.direction}` }, h("slot", { key: 'ab2412b9b66b004ce136fc96c997d995cadd6651' })));
    }
};
AtControlGroup.style = atControlGroupCss();

const AtSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atChange", 7);
    }
    /**
     * Label text above the search bar.
     */
    label;
    /**
     * Hint text for the input, appears below the search bar.
     */
    hint_text;
    /**
     * Tooltip description.
     */
    info_text;
    /**
     * Placeholder text inside the search component.
     */
    placeholder;
    /**
     * String content of the search.
     */
    model;
    searchEl;
    /**
     * Emits an event when the input is changed. Used by atui-table.
     */
    atuiChange;
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
        return (h(Host, { key: '5a92e26c3d0ee5b0f913d4f6019ee6612100e01d' }, (this.label || this.info_text) && (h("at-form-label", { key: 'af6ce6fc0eda56804452141d8c565e1f1abb9154', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '8fb209cfe082f7e67e5225e9a2d729c979d065d8', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border duration-300 ease-in-out focus-within:z-10 focus-within:ring" }, h("at-icon", { key: 'bb690888437073cfb0e15970846b7d870da644f0', class: "fill-foreground px-8", name: "search" }), h("input", { key: '4ab9da04eb3670c4f434d8f90b7b0f0aa5130af2', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-full w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '0cc14b855cd8d6f0a75c4c4ccde543cf2839cdae', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '85b00d21b0241481829ddcbcb086a97cb479dedc', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: 'cc0e9192b0c3c286e9e47b68a21e632c7d2661b3', slot: "icon", name: "backspace" })))), this.hint_text && (h("span", { key: 'e7569bc7fa9319294b8737d267f094f4c3331d4b', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * If true, hides the CSV export option in the export menu.
     */
    hide_csv = false;
    /**
     * If true, hides the PDF export option in the export menu.
     */
    hide_pdf = false;
    get el() { return getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        if (this.hide_csv && this.hide_pdf) {
            return null;
        }
        return (h("at-menu", { width: "fit-content", position: "left", align: "end" }, h("at-tooltip", { slot: "menu-trigger", position: "top" }, h("at-button", { slot: "tooltip-trigger", type: "secondaryText" }, h("at-icon", { slot: "icon", name: "download" })), h("span", null, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", null, !this.hide_csv && (h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') })), !this.hide_pdf && (h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') })))));
    }
};

const AtTableFilterMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently selected filter columns
     */
    selected = [];
    translations;
    get el() { return getElement(this); }
    /**
     * Emits selected columns when checkbox selection changes
     */
    atChange;
    get filteredColumns() {
        return this.col_defs
            .filter((colDef) => !(colDef.filterOptions &&
            colDef.filterOptions.exclude === true))
            .map((colDef) => ({
            value: colDef.field,
            label: colDef.headerName,
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
        return (h(Host, { key: '4697ec9e9a7ad0287e45bab6631b43a5306f4d97' }, h("at-menu", { key: '52b8b749e072c1210fcafe4e8e0dba0f334ce046', autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("at-tooltip", { key: 'ac3551892c6ff5e493644e13d091122a68de3281', slot: "menu-trigger", position: "top" }, h("at-button", { key: '2146c85c6c5eed2475a23a9c22643cfaf96c04cc', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input" }, h("at-icon", { key: '226b05af3387bc0b71eb3766a030468321fb14fc', slot: "icon", name: "edit_filters" })), h("span", { key: 'b0d4475ca1b1850ef4a59f6690f7651fa4f0fc0c' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '4f6dd7c721375f930aab8e66ae14a1677f3cf7be', class: "flex flex-col" }, h("at-checkbox-group", { key: '3b06991fd4a257d00460671568a6d83773eb2959', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get watchers() { return {
        "selected": [{
                "handleSelectedChange": 0
            }]
    }; }
};

const AtTableFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * Column definitions used in your at-table
     */
    col_defs;
    /**
     * Currently selected columns and filter values
     */
    selected = [];
    translations;
    get el() { return getElement(this); }
    /**
     * Emits id of column and filter value on change.
     */
    atChange;
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
    clearFilters = () => {
        this.selected = [];
        this.atChange.emit([]);
    };
    clearSingleFilter = (columnId) => {
        this.selected = this.selected.filter((column) => column.id !== columnId);
        this.atChange.emit(this.selected.length ? this.selected : []);
    };
    getHeaderName(columnId) {
        const col = this.col_defs?.find((c) => c.field === columnId || c.colId === columnId);
        return col?.headerName ?? columnId;
    }
    render() {
        return (this.col_defs && (h(Host, { key: 'd739c8fff86b1b2e66a919b4a1bcb0f444d7c87d', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: '3fd2aef3f7a429455ecbad0002025374c25b75a5', class: "bg-surface-foreground rounded-input flex min-h-[36px] flex-wrap items-end gap-8 p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: this.getHeaderName(column.id), prefix: this.getHeaderName(column.id) + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` }, h("at-icon", { slot: "icon", name: "cancel" }))))))), h("at-button", { key: '69953fcb49f64909427f7b55ff00ff259013c0d0', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

const DEFAULT_PAGE_SIZE_OPTIONS = [
    { value: '5' },
    { value: '10' },
    { value: '20' },
    { value: '50' },
    { value: '100' },
];
const AtTablePagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        this.atPageSizeChange = createEvent(this, "atPageSizeChange", 7);
    }
    /**
     * Current page number
     */
    current_page = 1;
    /**
     * Total number of pages
     */
    num_pages = 1;
    /**
     * Options provided in dropdown for page sizes. When omitted a standard set
     * is used.
     */
    page_size_options;
    /**
     * The number of table rows displayed per page
     */
    page_size = 20;
    /**
     * The options actually rendered in the selector: the provided (or default)
     * options, with the active `page_size` guaranteed to be present so the
     * selected value always matches the number of rows loaded — even when it
     * isn't one of the listed steps.
     */
    get resolvedPageSizeOptions() {
        const base = this.page_size_options && this.page_size_options.length > 0
            ? this.page_size_options
            : DEFAULT_PAGE_SIZE_OPTIONS;
        return base.some((option) => Number(option.value) === this.page_size)
            ? base
            : [...base, { value: String(this.page_size) }].sort((a, b) => Number(a.value) - Number(b.value));
    }
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (h(Host, { key: '12aec4dce5f32ad96496609c67257c3baba59520', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '5ae693d51371da2c1ff592cf7df512fbb2eccb2d' }, "Page Size: "), h("at-select", { key: '7c70ec586678135a282710c00033cf5d89dd1cfe', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '13c7c8de385a8799a43e90ccef313a2a3c85fa80', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: '32b78fba449f8b2792eae97ad96027d8b49c927b', slot: "icon", name: "first_page" })), h("at-button", { key: 'd0e4de2afb93b41e3f0d56d9581f17d939ad7366', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: '677ecb1724e042b1e26c4d3819f797432f1436b3', slot: "icon", name: "chevron_left" })), h("span", { key: 'c291d6347b70aa71d4ef24897f137d83685837ab' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'f29bca42079a31b4e1de0249ef3016b3267fec82', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: '2bb4e133ddb96639425eb84610b2bbd9b06cff42', slot: "icon", name: "chevron_right" })), h("at-button", { key: '5052cbfca81b50bfba4986710ccde3658437e25e', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: '10de325705b793f1544efb65095f729ad1a31331', slot: "icon", name: "last_page" }))));
    }
};

export { AtControlGroup as at_control_group, AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters, AtTablePagination as at_table_pagination };
