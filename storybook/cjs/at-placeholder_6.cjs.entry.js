'use strict';

var index = require('./index--r5sCsiV.js');
var translation = require('./translation-D6fmqwsI.js');

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
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '1c68b47d2863fe516524e8599402e5623c881e7a', class: `${this.placeholderSizeClass} bg-surface-foreground text-subtle rounded-placeholder flex w-full items-center gap-16 text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (index.h("span", { key: 'd82c3e6fcc4f77aa864ef9ed92c91fc5fb6bb8fc', class: `material-icons text-subtle ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), index.h("div", { key: '4446a8c2fe27ec4a250df3bdff0f6ee9476b61cb', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '98fe7c8c1f3cd363be0f551b85a45e558d2ce95d', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '28d2d7e92f2fd3acfaa3ad0e6534c4055ef35732', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '779e53692b3c7bd58628975cb33c5e8e3565c352', class: "text-secondary text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '8b42d1da7ee0e3bfb555db5deef24b5ad43a37f7', class: "text-secondary text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: 'd5c012d9d14c1014e321b48f6bf6b722be822e88' }))));
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
        return (index.h("div", { key: 'c07be93db801a2b885ab90b3e5675b26ac58e0ca' }, (this.label || this.info_text) && (index.h("at-form-label", { key: '7d1541e5f5144dd85fb97dae7e064b80a397a305', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: '622ab0abce9987c7e81592020c1e23b3f2ff01a3', class: "transition[background-color,color,box-shadow] border-input bg-surface-0 focus-within:border-active-accent focus-within:ring-active-glow rounded-input relative flex h-[36px] flex-row items-center justify-center border duration-300 ease-in-out focus-within:ring" }, index.h("span", { key: '4ea98c7d66422261364fce2f1221b85de6999111', class: "px-8" }, index.h("at-icon", { key: '85bf52868b183574dbb66bb5ad76398f03cdff3b', class: "fill-light", name: "search" })), index.h("input", { key: '909dbb7397048660f4c5473fb6cb2dfc23ae1c89', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: 'd4c6f65efbbe5983fe3e930b6ff1a800c86f714f', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '4d185670edb8f972324e63013dd87433b3f5d8d9', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, index.h("at-icon", { key: '35697a517300cc85d0d5082edd9c17474e20bc23', slot: "icon", name: "backspace" })))), index.h("span", { key: '8b2560817367995af01019d4f2b0a893be635cd8', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (index.h(index.Host, { key: '63966bb33a35e1e62aee360d28896e8819899514' }, index.h("at-menu", { key: '42c2c69fdbcadc8a540385ad2e0cef6c03a70ea6', autoclose: false, width: "fit-content", class: "self-start", align: "start" }, index.h("at-tooltip", { key: 'af48331e9d3854b4e4f1a9e9f3fd7be30d89ba8e', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: '0cb534e7f4bb8dfe1a695739407ade095578a72b', slot: "tooltip-trigger", type: "secondaryOutline" }, index.h("at-icon", { key: '5b31850601a99aa7c7c8a735c39d7dacedc9dc5e', class: "rotate-180", slot: "icon", name: "filter_list" })), index.h("span", { key: '89935077ab4a06c7bf347823b9bf6747cb6f4d72' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: 'abe7d2c91388e9872f110517104b435988fca6b9', class: "flex flex-col" }, index.h("at-checkbox-group", { key: 'c1e698817073bea897e2738c05f70f95f8b71cf3', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
    render() {
        return (this.col_defs && (index.h(index.Host, { key: 'cc62d7c295a1dd5e41b37c75794cd0dca9710714', class: "flex items-start gap-8" }, this.selected.length > 0 && (index.h("div", { key: 'cebbd1a800accc9ccff8f9313c12487c7bfa5e8c', class: "bg-surface-foreground rounded-input flex min-h-[36px] flex-wrap items-end gap-8 p-8" }, this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` }, index.h("at-icon", { slot: "icon", name: "cancel" }))))))), index.h("at-button", { key: '0377d8218a893ca5e74a5cf86d18302b841c6367', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
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
        return (index.h(index.Host, { key: '0a238b10fbc8f35c5bd28c0b87ceeacd49e15a0c', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '05a4b1f70813dd3f0f465d69193ac52f58895b8e' }, "Page Size: "), index.h("at-select", { key: 'e557ed71a6761b3bed59c752811966bc8374a147', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: 'd515dc854210bc1fd939cc520170458f9f0a45c0', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, index.h("at-icon", { key: 'a85e5d9ed22129c813c72fc0c1802ba6893b1845', slot: "icon", name: "first_page" })), index.h("at-button", { key: '8a529f89cfd407ec6087b570f410737aacc115ec', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, index.h("at-icon", { key: '991ce0197931f591a64cf327e552be6f561328a5', slot: "icon", name: "chevron_left" })), index.h("span", { key: '1d18556d98e40d41e14ea6a47f31d360de30e631' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: 'ece26cea4896354c7eceeb6b1aa868b6c5559004', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, index.h("at-icon", { key: '4840d98658c66c6a120f789019ab3c54f5213868', slot: "icon", name: "chevron_right" })), index.h("at-button", { key: 'a3a88829df2d2d75fdba64a6cd9f840100645da7', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, index.h("at-icon", { key: '13bded04e477ed8cba8bc80693cda7a24ee47e28', slot: "icon", name: "last_page" }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
exports.at_table_pagination = AtTablePagination;
