'use strict';

var index = require('./index-BRms7T38.js');
var translation = require('./translation-C7aG_Jvq.js');

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
        return (index.h("div", { key: '8ee87ca3d703e695fcc3ad56cd2e4e77c5b4b265', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (index.h("span", { key: '3d245e54cfbfc8b374124e23f543d575b2c90154', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), index.h("div", { key: '5dd20ef6225ae7c41fbf748574e10be2c74f7549', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: 'ce7b9cd0349769c2ae2ebac1eb5ae36c1754a03b', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '9022b1fb908bd97106076ea2bbb895ff6cab6cb7', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '999393b99bbe2f78473dc7c013fe94b0acbaf114', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '689ce2680901bb700b8d0db2c6a62d296fe58052', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '9589a6decdc9900bd295955ee456b74ed7802ea9' }))));
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
        return (index.h("div", { key: 'a4240bc1e33873a9d687e80a62e72c88f77f2b6a' }, (this.label || this.info_text) && (index.h("at-form-label", { key: 'f35416c450024567327d2b1d9acb9bc60995c9b9', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: 'acad380972e8b75a94cacaafd49fc0efb68b42bf', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, index.h("span", { key: '4d24c613ecdd2637b31dcb553cda0e644cd926a1', class: "px-8" }, index.h("at-icon", { key: 'b19d337159c7d91c1d0aaf4cab01f28e29963a89', class: "fill-light", name: "search" })), index.h("input", { key: 'ed62907bd13f1997a3f57c8dbdcc3fd3e85281b1', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '6b9611aadf0c1b6bbe0e9e4bbccf4b04a1cc1e79', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '9dba02ddbbd75ccc4ca11d429d4a6ce97194fbd6', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, index.h("at-icon", { key: '8c3112de53460231376a0165412c6cb5e22d85a4', slot: "icon", name: "backspace" })))), index.h("span", { key: '2dc5d348c2674ecfa64647c4e866d19c9ffbb4ed', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (index.h(index.Host, { key: '0081e3add10b241a48865c4fa70cf229effefcba' }, index.h("at-menu", { key: '96d6102f4d6b503ac2f2d767297ee90444f8de4d', autoclose: false, width: "fit-content", class: "self-start", align: "start" }, index.h("at-tooltip", { key: '591a61e2128209c93294864f9fe9e0b5b90ce2f6', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'e9bfc8c10dcf69e7a186e2e4553ea05f8d80228b', slot: "tooltip-trigger", type: "secondaryOutline" }, index.h("at-icon", { key: '839aeb9268c5f0166f8c81f25d875a28210bf729', class: "rotate-180", slot: "icon", name: "filter_list" })), index.h("span", { key: '7c9d349c353f9c18188c265f6245d2d9d3448599' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: '36964925c6b8f0d82f03bfb07c7c2cf58cbecb9c', class: "flex flex-col" }, index.h("at-checkbox-group", { key: 'dca5e4735fc6220cb9fc4880ee966bea60d45d9f', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (index.h(index.Host, { key: 'c346db680f385b8c2a99d1c32b722b318de8d4e7', class: "flex items-start gap-8" }, this.selected.length > 0 && (index.h("div", { key: 'e48209e7f0fbdaafb6d0b8c47af15e606f1c4f6c', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` }, index.h("at-icon", { slot: "icon", name: "cancel" }))))))), index.h("at-button", { key: '9f63ed6f45ef1c4981d7256cde44f2f5e7ec2aee', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
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
        return (index.h(index.Host, { key: '6b2a01b56b4aa3824ba428cdf88b57f801670f74', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'c2e52e0707163d9f49ae213eafe6ffcfc893b994' }, "Page Size: "), index.h("at-select", { key: '3fc8a774afe8ea16e697d2163a36defd46046a02', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: 'bee2069047b8ca0b677bc1a0869d7279534ea483', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, index.h("at-icon", { key: '763ff66557d41ab22c759c32a75617afd078f57a', slot: "icon", name: "first_page" })), index.h("at-button", { key: 'b7f12505badf5d6a40ec3da0c7fb303ac7d557c4', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, index.h("at-icon", { key: 'f1a7722c07848bc5549b4e990fade4091c94d59b', slot: "icon", name: "chevron_left" })), index.h("span", { key: '471c0326e5a1b4edbf884bef425992b20d54499d' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '10d5dfec057dae68c1909fd9fa3ae43ade5b964c', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, index.h("at-icon", { key: 'f6060661369e6e23f41db642efc40ff2efad056a', slot: "icon", name: "chevron_right" })), index.h("at-button", { key: '8bae4b3619c8573270c541bd876b3466e48b8366', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, index.h("at-icon", { key: 'c1b7e1d891eef1a126b2a9658d6c8f5531e9cb63', slot: "icon", name: "last_page" }))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
exports.at_table_pagination = AtTablePagination;
