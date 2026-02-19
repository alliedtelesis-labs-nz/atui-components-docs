import { r as registerInstance, h, c as createEvent, g as getElement, H as Host } from './index-jvbUuQtg.js';
import { f as fetchTranslations } from './translation-DuLooPsr.js';

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
        return (h("div", { key: '99304a756301d6519bdd7413aa784181ba1f791c', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (h("span", { key: 'c5f9ec845801199c8700427e1fa7127ebeaf7cfc', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), h("div", { key: 'c6ddae710e9aca4dec5c5f9ecab57d9d2c590e86', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '36826ba3ca6f874efd0d8f6ba34b869dfd7d3582', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '41220b771932600b05088565e86140c33ea39274', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '0276404e5f7063699f69038eb1fa3fa08f136147', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: '1c27e8da7bdcf2d8201110127724c5d9abbb620f', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'ab5d19a5cc789cd10c3f8528701280e43f8c978e' }))));
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
        return (h("div", { key: 'dc6e629d3190eb3781d4295c4e7df9edad461a87' }, (this.label || this.info_text) && (h("at-form-label", { key: 'befd05d28ced04aaecad147a4d9e43f316a69dd9', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'd84f08a78c01137d0492090225826910aed801d4', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, h("span", { key: '951f6f8ae94bc9b59cce45c0609dea188be615c2', class: "px-8" }, h("i", { key: 'ce92ac294bcc73a9786ce431b838f3ceeb18873d', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), h("input", { key: 'd5336177e63e8ceecfe23fe3487ab9b16477b167', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '44c3bf2c94e728f3d01afd56ff10905b66d1bd43', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: 'b436d53ffd2ed9f99c093b2d6f9a80a7134928e2', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), h("span", { key: 'ff3eaa49a2e5052fdd75a4d7fb93b1e809d99764', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (h("at-menu", { width: "fit-content", position: "left", align: "end" }, h("at-tooltip", { slot: "menu-trigger", position: "top" }, h("at-button", { slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), h("span", null, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", null, !this.hide_csv && (h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') })), !this.hide_pdf && (h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') })))));
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
            .filter((colDef) => colDef.field !== 'Checkbox')
            .map((colDef) => ({
            value: colDef.field,
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
        return (h(Host, { key: '67cdfa0f7d2de2ca28a5d9187304a9d81006509d' }, h("at-menu", { key: '029793cec086cbf73fedb387d586ed5c7e5a899a', autoclose: false, width: "fit-content", class: "self-start", align: "end" }, h("at-tooltip", { key: '1ff72df45e23922e4a70f0b8ce66ee1f81ce8173', slot: "menu-trigger", position: "top" }, h("at-button", { key: '63697676f32964aad0d00a0d9fddadce50a6b6d8', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), h("span", { key: 'd223d9ac541542e492f4c8f7f11f412ddd18b188' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: 'e40f0e6c78509f6bf8839cae2377ec58d76b25e9', class: "flex flex-col" }, h("at-checkbox-group", { key: '7e2f90262bb866fffdfef0196121a5e1cfbbaa8c', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
    render() {
        return (this.col_defs && (h(Host, { key: '22d6329fd5239a615b3bcf3aa6f004599fc79029', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: '7084ab3f84deef2f03de0ba80be3dd53e0c73b13', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), h("at-button", { key: 'a01b44d0a3209dc1313dda91e8882fe2f05edfab', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
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
        return (h(Host, { key: '80c45c3b9ff0543512223bb273419a86235d94e0', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: 'b4dc358e91ce088db0c3b9e8b1904db441d224a2' }, "Page Size: "), h("at-select", { key: '8475f722ea5069fa3dd588211c47ecda2922f45b', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '677bc485780210cdf3abe730dfeedfb747cc312a', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), h("at-button", { key: '783c94d6f313b09b3543e4a0d6c14870cf857a54', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), h("span", { key: 'af8c2df635b4c59041b306d8544b57063bdbee15' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '9c9e80ca79250b10c448872109992d2e79c9ba61', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), h("at-button", { key: '0eeff0c7a61d908c691637598d8e87908c062008', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

export { AtPlaceholderComponent as at_placeholder, AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters, AtTablePagination as at_table_pagination };
