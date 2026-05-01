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
        return (h("div", { key: '098891c92ea563e5da55a1fc45fd15290aae7491', class: `${this.placeholderSizeClass} bg-surface-foreground text-muted rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, h("span", { key: '7c4481f8d7d62c3a808c43dabb85026fc5742266', class: "fill-slate-300", "data-name": "placeholder-icon" }, h("slot", { key: '58572295b340c38df8ae0af233d25da585858bc4', name: "icon" })), h("div", { key: '7c68b2a3979962af3148bc35cba0f9cfd84230c0', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, h("div", { key: 'e65df83e618e1c0083f1a0a7404e396fd905ab00', class: "flex items-center" }, this.show_loading_spinner && (h("at-loading", { key: '56a493efc7abe0594ab36edf3c30774cda8b6fcd', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (h("h5", { key: 'e2f4c086f199fa1d3e158d82ba0a488c8e3bac2e', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), h("p", { key: 'de24788a6cea6bf9d80e352ae84c084dfb66ff65', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), h("slot", { key: 'f303321b42b4e57dbfd4a80f46b9c7b582d09ad6' }))));
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
        return (h("div", { key: 'f4a46059e6403180ae8c8f5ed75181dcb1169378' }, (this.label || this.info_text) && (h("at-form-label", { key: '8e0b2a42370bf4a49423fa1017a6ab6e236ee392', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), h("div", { key: '2f9248aa117b08ae8f04815cf865d02d0d8689bf', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input relative flex h-[36px] flex-row items-center justify-center border duration-300 ease-in-out focus-within:ring" }, h("span", { key: 'caf4a279ccad90d4f8d792eece42d2c9026df49c', class: "px-8" }, h("at-icon", { key: 'c1a4297848090e94579bc0238570669218b16f0f', class: "fill-foreground", name: "search" })), h("input", { key: '585eede17020c9df972d865cbb87995c3e54c643', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: 'f0ed82d94a45c64357e21d864cd970c0c7837c1f', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: 'd6d93f3af3b6f56924db1ec97d27e45e487474c5', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: 'ab19aba44ddca54df01b14fec72a1ff658c365cb', slot: "icon", name: "backspace" })))), h("span", { key: '05e5847fea8303b6c28b45b8dae1349f37c4a9d9', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (h(Host, { key: '7bdd8a27c84657b228a286dd5824b7685efae3ed' }, h("at-menu", { key: '4a2244b4625d527449de1b830ca1a545796f721b', autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("at-tooltip", { key: '2deb2d126f5eccbbaaaff5044684b383a780ff0f', slot: "menu-trigger", position: "top" }, h("at-button", { key: 'b6b1c91895f485de1d3ac839fa26df09a3d60c3b', slot: "tooltip-trigger", type: "secondaryOutline" }, h("at-icon", { key: '46ab1cd21d57b4b165780356ca0f7f128da3e21f', class: "rotate-180", slot: "icon", name: "filter_list" })), h("span", { key: '452726b25a878c4a0f2bee4283dcc1c1fec084fb' }, this.translations.ATUI.TABLE.FILTER_DATA)), h("div", { key: '8954c872633eb3e7c90bdf7f2030ede0a7c17469', class: "flex flex-col" }, h("at-checkbox-group", { key: '4be05b9a4a344d4ccb69c8dc4a261a0c7e4e22ba', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (h(Host, { key: '96c6278e8ae87d1a844e091a1eb31b6f04c34b30', class: "flex items-start gap-8" }, this.selected.length > 0 && (h("div", { key: '4aea0e7da4f2b953c3b9584c0e28bc9a875210a0', class: "bg-surface-foreground rounded-input flex min-h-[36px] flex-wrap items-end gap-8 p-8" }, this.selected.map((column) => (h("div", { class: "flex items-center gap-2" }, h("at-input", { class: "w-input-sm", label: this.getHeaderName(column.id), prefix: this.getHeaderName(column.id) + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, h("div", { slot: "input-actions" }, h("at-button", { type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` }, h("at-icon", { slot: "icon", name: "cancel" }))))))), h("at-button", { key: 'a5702e6565e8da0c57696f4356b62470c383e8e5', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
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
        return (h(Host, { key: '0fcfd3f3e3281acd6c4e42bcd697138bb4797193', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '10e51e08a3cb09719f3300ac991f1e40170152ea' }, "Page Size: "), h("at-select", { key: 'c593f9376fce5b8d16c040e8e750d433f7bac04f', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: '8a47f4a345370d25e94ef30ff8f2b2e4ae53cca6', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: 'c18a430304653dac4405fb57b4370c234b4fc4ae', slot: "icon", name: "first_page" })), h("at-button", { key: '6934787974c86a17bac0ef208156782bb7521ca2', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: '02dc89a3c740d6413c1edefa8b723d51bef6786d', slot: "icon", name: "chevron_left" })), h("span", { key: 'c86ed9bd3074323e2bbf877e20a5d075ad26a424' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '687ca2191956c7a70bbaed475d51304a899c060d', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: 'fefde4a466e39fa1c3aaf7021580074bd6d75860', slot: "icon", name: "chevron_right" })), h("at-button", { key: 'd1c409249e142e96919af61d7f3035ca813862b5', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: 'aece251e151b9687bd33584962f711e96fbd3959', slot: "icon", name: "last_page" }))));
    }
};

export { AtPlaceholderComponent as at_placeholder, AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters, AtTablePagination as at_table_pagination };
