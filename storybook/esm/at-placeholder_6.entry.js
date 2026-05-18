import { r as registerInstance, g as getElement, h, c as createEvent, H as Host } from './index-BAAX2Der.js';
import { f as fetchTranslations } from './translation-B5XBUsvV.js';

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
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
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
        return (h("div", { key: '21b45dc92d5e9b9ed0c869ab20c0e745c1fe8420', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: 'e830b50bb9601b8f6d2fed4aaa1be801bc2a1c32', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: 'ffba4988eeb0a812f4ed03601f2aad41b2daa532', name: "icon" })), h("div", { key: '15945bfb08311d731f2611adac4db5867d2d49c2', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: '1cbae76d584aa08ec295cc201dc23060c26e7b91', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '41e439f94b93bf1aea4337485c3695718baab9b5', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: '76165df2fda138ea4f25312ad0b194c1d699c9bd', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'd8b37df3a7f7391a3e35d2ae04885582bd18be58', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: '1a2eb311120248fb07aabce65711e761850407e4' }))));
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
        return (h("div", { key: '07f21397f2dc425acf36dba0acdce64e44e4412d' }, (this.label || this.info_text) && (h("at-form-label", { key: 'c4e1a139cbcec17600f74888e61a34b2ef846784', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: 'fac922a7d9586301f39393e84edf0f99c018fa39', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input relative flex h-[36px] flex-row items-center justify-center border duration-300 ease-in-out focus-within:ring" }, h("span", { key: '7aed2806b36cf6ac704aee05ca3106d93a5d7a46', class: "px-8" }, h("at-icon", { key: 'faa7a7b77260c091b5eb9e92cb1e271f12da0fda', class: "fill-foreground", name: "search" })), h("input", { key: '8d533400ee3bd316cab8a084805191815e4596ae', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: 'fd9e614bb507df531d794a1a91e3d875d2a7b76e', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '61c5bd48ad85faaeef62637ec251afc688f8542c', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: 'df439fca3d89934f1b6d9c4ed76a865735d7f7a4', slot: "icon", name: "backspace" })))), h("span", { key: 'df88b209cebbe5939d55e9b0f7cbff03432e77f7', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (h(Host, { key: 'fa5baa7c181ceb7052ff12e542ad4b1c1a36aa36' }, h("at-menu", { key: 'c62b049e8201bf2b896aed575f4fa42b617f855f', autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("at-tooltip", { key: '9b9d4d22488f798a22b07dc67ba8d523f9ea7528', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'da54cca41d81a996e5bbff9629486345c8c765d5', slot: "tooltip-trigger", type: "secondaryOutline" }, h("at-icon", { key: '498ea8bcf393cd1a8606b250ce6029f406dd35ac', class: "rotate-180", slot: "icon", name: "filter_list" })), h("span", { key: '180083395754aee33b53854fcf16f46335783476' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '709224bb44e8b8ecda6c43e2192f662fc96bf59a', class: "flex flex-col" }, h("at-checkbox-group", { key: 'b77bc0158f3e858fb968443b75e2392c1d96e8c8', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: '5ef62fe27306791f491ee00659281e413bc3d1c2', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: 'dd6e5992760e0542eaf448dd4bf1bddb27aa066f', class: "bg-surface-foreground rounded-input flex min-h-[36px] flex-wrap items-end gap-8 p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: this.getHeaderName(column.id), prefix: this.getHeaderName(column.id) + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` }, h("at-icon", { slot: "icon", name: "cancel" }))))))), h("at-button", { key: 'a095624b00950d203f97cd921606f89adc7b0787', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
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
        return (h(Host, { key: '8edfadb1999bafb1cc28f71cc614a1d20bb8158b', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '4e54954833bf94aaa6f0e3ca8107a1756e4544cb' }, "Page Size: "), h("at-select", { key: '8b575c5ac7b2d70954cf367d3a73bdfbe4823d9e', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '03d505b014569794559e74cb91f27bb154d21e23', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: 'e5cf53a1c34a90353d4444cf398c9dd786f301ed', slot: "icon", name: "first_page" })), h("at-button", { key: '133bdbf4afbbaa61e4de7f78e2077df9c78af66c', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: '051b2b5781d3b2a69a546624137c3c6c5b79e3ca', slot: "icon", name: "chevron_left" })), h("span", { key: '2e5dc5a4124db30bfdfa1553819391ad830e382f' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: 'ac8e009a03df01bbfe15fea283112acf7842c938', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: 'd29232aaf1c03137ee85a68e393945a9b66feea5', slot: "icon", name: "chevron_right" })), h("at-button", { key: '21bfa35d055ec4663f8491ece2a7409e5885ffcf', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: 'f394b56f7365e5f3439671843e7cb187dd367703', slot: "icon", name: "last_page" }))));
    }
};

export { AtPlaceholderComponent as at_placeholder, AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters, AtTablePagination as at_table_pagination };
