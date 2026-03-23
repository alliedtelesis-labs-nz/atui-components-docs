'use strict';

var index = require('./index-CdUivN1V.js');
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
        return (index.h("div", { key: '6e2ce1f0b330eec6476f3f5ad26814a9376d5742', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (index.h("span", { key: '3b8e537887b7ffeef5c9c615889c6abd7ee7f2d6', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), index.h("div", { key: 'fa3dc93a23729fcf758a21772baefa6b88931572', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '81dd2643d54dd148358d1af099857bfdb7837d4e', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: 'ad6aa65f327b0afc067120092e37282c1b6306e5', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '35a7df74b99b2d5207f2e2b23a2704092c27e221', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: 'ae204cd24a57a49429431ef6138fb2b8e16144d0', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: '3a8f52024d811dc66115a5c5786f9f570ff00757' }))));
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
        return (index.h("div", { key: '2d2a74d7aa3b72921b0fcb6e56f34573cc051b81' }, (this.label || this.info_text) && (index.h("at-form-label", { key: '68add527533ad1b5aa0c14f91655ac6cfab8a896', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: '755f389501f1788b0c9f8036e0ca36f0e962792e', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, index.h("span", { key: '4abb13e03349deb492a6b0ad40a5102345b4f4af', class: "px-8" }, index.h("i", { key: '5615bfa0a3585055d06e770a130867caaf95aea5', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), index.h("input", { key: '2c4db6001cc45a61967357cc1fbd34b1b42e9692', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '6e915df562bfa73ac35497f1569a5c0727c3d803', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '3f34dcf1dc346b26f307b67f82cdc1142a53a99d', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), index.h("span", { key: 'b71e5e0c670f27f28035947057b9935e8ece4fd0', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
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
        return (index.h("at-menu", { width: "fit-content", position: "left", align: "end" }, index.h("at-tooltip", { slot: "menu-trigger", position: "top" }, index.h("at-button", { slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", null, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", null, !this.hide_csv && (index.h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') })), !this.hide_pdf && (index.h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') })))));
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
            .filter((colDef) => colDef.field !== 'Checkbox')
            .map((colDef) => ({
            value: colDef.field,
            label: colDef.field,
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
        return (index.h(index.Host, { key: '3c4449a21b3cf1def0b8643cf5d00035384747ec' }, index.h("at-menu", { key: '20f028bcf05bfe63eb0039616e2a81ba7600222f', autoclose: false, width: "fit-content", class: "self-start", align: "end" }, index.h("at-tooltip", { key: '2a078907a34d87bbfbd2694341cb3c41655796b8', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: '09c48d86b8a25bbab1a1c308eba4722cf2e9441f', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '6ab9f32c3cb0a9af403c44645b0508248e236b89' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: '2b906ad59672140cb58fb49762a7ea6b8ae1bac7', class: "flex flex-col" }, index.h("at-checkbox-group", { key: 'ddef8be861827ada658c4e1ac57ea939a380d65c', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
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
        return (this.col_defs && (index.h(index.Host, { key: '0e9cf78308796683db85f6cd33f7894f2f257531', class: "flex items-start gap-8" }, this.selected.length > 0 && (index.h("div", { key: '95361f14a6f95e10e561681e834c6d36d5657eb4', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), index.h("at-button", { key: 'f8bb46c2dc4f69ebc0f24b0e1ce3074fa31bf56e', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
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
        return (index.h(index.Host, { key: 'a6b981abdda5117f553ab9269d6e3357948dac47', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'c5ecaecc57a8db1d25a46d81ed444de1a86f901d' }, "Page Size: "), index.h("at-select", { key: '55b1bdde88f989eb4aded0b44ed7264728c15628', options: this.page_size_options, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '7e9acd1b57bc3fda292e430c342ba309f02d68fc', disabled: this.current_page === 1, type: "secondaryText", icon: "first_page", onAtuiClick: () => this.atChange.emit(1) }), index.h("at-button", { key: 'bb2b577a3b54ea0b7e7811c871c94fdf98605a5d', disabled: this.current_page === 1, type: "secondaryText", icon: "chevron_left", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }), index.h("span", { key: '7e522ff3facf2d070988c655fa27fe80f5c1d90d' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '26e33a6ec035168ac578a880ed1b36cda0a22724', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "chevron_right", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }), index.h("at-button", { key: '4965556c2d1775477ebccf1a4205dc92538c60aa', disabled: this.current_page === this.num_pages, type: "secondaryText", icon: "last_page", onAtuiClick: () => this.atChange.emit(this.num_pages) })));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
exports.at_table_pagination = AtTablePagination;
