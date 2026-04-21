import { r as registerInstance, h, c as createEvent, g as getElement, H as Host } from './index-BAAX2Der.js';
import { f as fetchTranslations } from './translation-B5XBUsvV.js';

const placeholderVariants = {
    iconSizes: {
        xs: '!text-[24px] w-24 h-24',
        sm: '!text-[48px] w-48 h-48',
        md: '!text-[64px] w-64 h-64',
        lg: '!text-[72px] w-72 h-72',
    },
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtPlaceholderComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Size of the placeholder
     */
    size = 'md';
    /**
     * Material icon to be displayed in the center of the placeholder
     */
    icon;
    /**
     * Title to be displayed below the icon
     */
    placeholder_title;
    /**
     * Content to be displayed below the title
     */
    content;
    /**
     * Will show a loading spinner when set
     */
    show_loading_spinner;
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    get iconSizeClass() {
        return placeholderVariants.iconSizes[this.size];
    }
    render() {
        return (h("div", { key: '20e2a389eb34687b50765a2592b8115b694be555', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: 'b9cf64604c623322ba379e90d7ad51040c478f53', class: `material-icons text-muted ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: '7bc082993a91cb24ecb113edc7cca7e277f11e84', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'b43920966ee6cb8014a630b2dc9740f872d97e5d', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: 'a79c1ef7c860a6defe58c236d71434ab8b593bf7', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'b238b55a7b2146c604d7314400e06e3508d4df65', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '80c85c36b2bdeea058421b5dd65c1682f1198c10', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'd25fb768d5a6d8661f02b24cf3778b9cd5b8b1e3' }))));
    }
};

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
        return (h("div", { key: 'c07be93db801a2b885ab90b3e5675b26ac58e0ca' }, (this.label || this.info_text) && (h("at-form-label", { key: '7d1541e5f5144dd85fb97dae7e064b80a397a305', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'abe0fc6fedd15395645f7fedbce1839f18059cf4', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input relative flex h-[36px] flex-row items-center justify-center border duration-300 ease-in-out focus-within:ring" }, h("span", { key: '5e81a2c2bc01b3d281e9143cd73967c74a1590a6', class: "px-8" }, h("at-icon", { key: '9f258ffcff83707b7ae3e7242075e309a131e1a4', class: "fill-foreground", name: "search" })), h("input", { key: '24cdb36a4bb0a2eb272acb67737fa084d537a079', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '1b15122729ddf8e3813b8b63d29f963184f655a0', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '14045bd83304ecd40fe58d8dd3be132d701bd4ab', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: '1d779c2d5f2434a6f54d15f985f476eb00e061f5', slot: "icon", name: "backspace" })))), h("span", { key: '9e3c955bc70659b863273dfca639bf6a4452f5b9', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (h(Host, { key: '63966bb33a35e1e62aee360d28896e8819899514' }, h("at-menu", { key: '42c2c69fdbcadc8a540385ad2e0cef6c03a70ea6', autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("at-tooltip", { key: 'af48331e9d3854b4e4f1a9e9f3fd7be30d89ba8e', slot: "menu-trigger", position: "top" }, h("at-button", { key: '0cb534e7f4bb8dfe1a695739407ade095578a72b', slot: "tooltip-trigger", type: "secondaryOutline" }, h("at-icon", { key: '5b31850601a99aa7c7c8a735c39d7dacedc9dc5e', class: "rotate-180", slot: "icon", name: "filter_list" })), h("span", { key: '89935077ab4a06c7bf347823b9bf6747cb6f4d72' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'abe7d2c91388e9872f110517104b435988fca6b9', class: "flex flex-col" }, h("at-checkbox-group", { key: 'c1e698817073bea897e2738c05f70f95f8b71cf3', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: '61d81f1bc23a5b470895a54178a87388da89b843', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: 'd2ecc44219a60b536d6ae7e3514baa34624285af', class: "bg-surface-foreground rounded-input flex min-h-[36px] flex-wrap items-end gap-8 p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: this.getHeaderName(column.id), prefix: this.getHeaderName(column.id) + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` }, h("at-icon", { slot: "icon", name: "cancel" }))))))), h("at-button", { key: '8b6a392bca19699c718b98bbdd990158b041ceb1', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

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
     * Options provided in dropdown for page sizes.
     */
    page_size_options = [
        { value: '5' },
        { value: '10' },
        { value: '20' },
        { value: '50' },
        { value: '100' },
    ];
    /**
     * The number of table rows displayed per page
     */
    page_size = 10;
    /**
     * Emits event with ```event.detail``` as the new page number
     */
    atChange;
    /**
     * Emits event with ```event.detail``` as the new page size
     */
    atPageSizeChange;
    render() {
        return (h(Host, { key: '0a238b10fbc8f35c5bd28c0b87ceeacd49e15a0c', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '05a4b1f70813dd3f0f465d69193ac52f58895b8e' }, "Page Size: "), h("at-select", { key: 'e557ed71a6761b3bed59c752811966bc8374a147', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'd515dc854210bc1fd939cc520170458f9f0a45c0', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: 'a85e5d9ed22129c813c72fc0c1802ba6893b1845', slot: "icon", name: "first_page" })), h("at-button", { key: '8a529f89cfd407ec6087b570f410737aacc115ec', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: '991ce0197931f591a64cf327e552be6f561328a5', slot: "icon", name: "chevron_left" })), h("span", { key: '1d18556d98e40d41e14ea6a47f31d360de30e631' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'ece26cea4896354c7eceeb6b1aa868b6c5559004', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: '4840d98658c66c6a120f789019ab3c54f5213868', slot: "icon", name: "chevron_right" })), h("at-button", { key: 'a3a88829df2d2d75fdba64a6cd9f840100645da7', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: '13bded04e477ed8cba8bc80693cda7a24ee47e28', slot: "icon", name: "last_page" }))));
    }
};

export { AtPlaceholderComponent as at_placeholder, AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters, AtTablePagination as at_table_pagination };
