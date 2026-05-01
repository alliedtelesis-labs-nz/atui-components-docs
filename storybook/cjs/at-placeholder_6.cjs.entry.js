'use strict';

var index = require('./index--r5sCsiV.js');
var translation = require('./translation-D6fmqwsI.js');

const placeholderVariants = {
    sizes: {
        xs: 'p-16 flex-row gap-8',
        sm: 'p-[5vh] flex-col justify-center',
        md: 'p-[10vh] flex-col justify-center',
        lg: 'p-[15vh] flex-col justify-center',
    },
};
const AtPlaceholderComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Size of the placeholder
     */
    size = 'md';
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
    get el() { return index.getElement(this); }
    componentDidLoad() {
        const iconEl = this.el.querySelector('[slot="icon"]');
        if (iconEl) {
            iconEl.size = this.size;
        }
    }
    get placeholderSizeClass() {
        return placeholderVariants.sizes[this.size];
    }
    render() {
        return (index.h("div", { key: '49097a5681a90825b9e0cdda17db22211fbb7598', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, index.h("span", { key: '9521369ab5317123870b5504275d93257b1803d2', class: "fill-slate-300", "data-name": "placeholder-icon" }, index.h("slot", { key: '10fe3bf6a1ffc012a2557fbf7d2afa6166f31ea8', name: "icon" })), index.h("div", { key: 'eca44f15b6404db1cdc5dec205f50c1b0ddb209e', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '9d8a0c1cda0993ea0768700a7ee1dc8dca10d064', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '37d57963ecb5e0dffa3a9842165d3d9ad9105bf0', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: 'fd6b35f6e40428423118f08b568726f625a8e80d', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '5f19b1aa7d41fe61a2086e4d7894d5fae5db692e', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: 'f8e7d6f869336819654a1c5776bd9a6c6f4c6e1b' }))));
    }
};

const AtSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atChange", 7);
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
        return (index.h("div", { key: '01f04b5e4ef6003139409b62e63233dcc317834a' }, (this.label || this.info_text) && (index.h("at-form-label", { key: 'b28a9178ba218b9e999023293a3f94e31842c031', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: '0a9eb7bc7eebf6659f6a00660f7e0175a24bb7e5', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input relative flex h-[36px] flex-row items-center justify-center border duration-300 ease-in-out focus-within:ring" }, index.h("span", { key: '2bcf907275d5d16b45a7f5d461f3f4b26de989a0', class: "px-8" }, index.h("at-icon", { key: 'b6f44f31f249fa7d1a61e7be24483cd47cb79c27', class: "fill-foreground", name: "search" })), index.h("input", { key: 'b70e640fb91daaeef593b10e5cb6ba520dcb183e', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '08bd8b70a598bcb2a73fe0633e77edf4d886745a', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '794f2f93337ff917e15c9c7e33cbbd15e79d33f6', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, index.h("at-icon", { key: '39189c755a2a153aa8e37c3be9784c5e3eaf4e9d', slot: "icon", name: "backspace" })))), index.h("span", { key: 'e014f111293689bdc8f7ae89034435e19dfc4da0', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
    }
    /**
     * If true, hides the CSV export option in the export menu.
     */
    hide_csv = false;
    /**
     * If true, hides the PDF export option in the export menu.
     */
    hide_pdf = false;
    get el() { return index.getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    /**
     * Emits id of the clicked menu item, either 'CSV' or 'PDF'.
     */
    atChange;
    render() {
        if (this.hide_csv && this.hide_pdf) {
            return null;
        }
        return (index.h("at-menu", { width: "fit-content", position: "left", align: "end" }, index.h("at-tooltip", { slot: "menu-trigger", position: "top" }, index.h("at-button", { slot: "tooltip-trigger", type: "secondaryText" }, index.h("at-icon", { slot: "icon", name: "download" })), index.h("span", null, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", null, !this.hide_csv && (index.h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') })), !this.hide_pdf && (index.h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') })))));
    }
};

const AtTableFilterMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
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
    get el() { return index.getElement(this); }
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
        this.translations = await translation.fetchTranslations(this.el);
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
        return (index.h(index.Host, { key: '973c26e49279f8b2ce8e6a55d802a6f6486d09a1' }, index.h("at-menu", { key: '8f09c31d6535e06a5eeb2f65bf9dfd5485e4282d', autoclose: false, width: "fit-content", class: "self-start", align: "start" }, index.h("at-tooltip", { key: 'bd02367d80d59ef1658d2e68d4d3b34caf457fcc', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'b1f18e3723e53681becedc98b8809d0fe24135e5', slot: "tooltip-trigger", type: "secondaryOutline" }, index.h("at-icon", { key: 'fffa34af6ebdc5e8c602a9efc6d65b2f910f5b38', class: "rotate-180", slot: "icon", name: "filter_list" })), index.h("span", { key: '33e54d15764a3b5f0acac249c0663c39001fad1c' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: '10d709eae3ecd87e0e47566d90452d1b8dca28f0', class: "flex flex-col" }, index.h("at-checkbox-group", { key: '64e7b69b4101bca1f648b8403546990ecd1b79cb', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get watchers() { return {
        "selected": [{
                "handleSelectedChange": 0
            }]
    }; }
};

const AtTableFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
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
    get el() { return index.getElement(this); }
    /**
     * Emits id of column and filter value on change.
     */
    atChange;
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
        return (this.col_defs && (index.h(index.Host, { key: '37f262b277b59b79c27326fa7ed21a63e041e5cd', class: "flex items-start gap-8" }, this.selected.length > 0 && (index.h("div", { key: '2009edb8e4f99be819d50e242d8d456804ee2ab9', class: "bg-surface-foreground rounded-input flex min-h-[36px] flex-wrap items-end gap-8 p-8" }, this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: this.getHeaderName(column.id), prefix: this.getHeaderName(column.id) + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` }, index.h("at-icon", { slot: "icon", name: "cancel" }))))))), index.h("at-button", { key: '368439c9f7368de2a0b7e84d14d850cbca41ee56', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

const AtTablePagination = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
        this.atPageSizeChange = index.createEvent(this, "atPageSizeChange", 7);
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
        return (index.h(index.Host, { key: '63ee14de1e85a4d2af8e686f9f117957df49b7b9', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '25b8a0b2b960eba79687ac40f8fe8a943e91453c' }, "Page Size: "), index.h("at-select", { key: '593be750b053ccfab043dc95d534ed8c1f9f831c', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '103deb1c5fda234514b0d496952006ef33883ee4', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, index.h("at-icon", { key: '4c59e3c6840d9fe639e87d1bd9a618dda8924576', slot: "icon", name: "first_page" })), index.h("at-button", { key: 'a49973412a08734e65619a7bfee64ee53f62038d', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, index.h("at-icon", { key: '29c20799ad5a8a0a913c565a6c560d2499551e3e', slot: "icon", name: "chevron_left" })), index.h("span", { key: '8152e207de7adb223a9c9459c88c97c239c5801e' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: 'e63cfa6cf632663315bea57691d6bb86c56eb521', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, index.h("at-icon", { key: 'fcedc3ea4defb057eb63227556dfc813d84e735a', slot: "icon", name: "chevron_right" })), index.h("at-button", { key: '45eeeb527c29f56a26bdfea33aa0448b1249d3b8', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, index.h("at-icon", { key: 'b8ea2210a4ab60608c1efc5c4fd4ad7fafcaf1c0', slot: "icon", name: "last_page" }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
exports.at_table_pagination = AtTablePagination;
