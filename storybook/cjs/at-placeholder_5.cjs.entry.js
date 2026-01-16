'use strict';

var index = require('./index-COiLLAKF.js');
var translation = require('./translation-HqquF7bU.js');

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
        return (index.h("div", { key: '83a64d159f6ba77d78630f57602568560a8d88a9', class: `${this.placeholderSizeClass} bg-surface-0 text-med flex w-full items-center gap-16 rounded-sm text-center`, "data-name": "placeholder-container" }, this.icon && this.icon !== 'none' && (index.h("span", { key: 'ed1696815c6189ecc829ad8cec35f03a4d0e6649', class: `material-icons text-slate-300 ${this.iconSizeClass}`, "data-name": "placeholder-icon" }, this.icon)), index.h("div", { key: '67acfc8cb3d1b5e4b2c7a577927b170822123971', class: `border-radius-sm flex flex-col justify-center ${this.size === 'xs' ? 'items-start text-left' : 'items-center text-center'}` }, index.h("div", { key: '5c182a092866e066847c60bf8cfc5ca309a25f37', class: "flex items-center" }, this.show_loading_spinner && (index.h("at-loading", { key: '4632603cb8777b105a2052138fc524c8d6aef495', class: "relative mr-8", size: "sm", type: "secondary", "data-name": "placeholder-spinner" })), this.placeholder_title && (index.h("h5", { key: '722d15f2b8c4034389703646c006acd02c9b5fff', class: "text-med text-sm font-medium", "data-name": "placeholder-title" }, this.placeholder_title))), index.h("p", { key: '3589181fa5509db241f3f1489e31cb8d146e26c8', class: "text-med text-sm", "data-name": "placeholder-content" }, this.content), index.h("slot", { key: 'f0a43685d96d74380060a00c977c735eac085f4a' }))));
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
        return (index.h("div", { key: '7087aad8e30e41868251d5ef2e76695cd044691a' }, (this.label || this.info_text) && (index.h("at-form-label", { key: 'd0dcab91841dc3bced06d04097b2cff2d6480af0', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: 'c73314a6911bcd7b35f3e640202695c63703b200', class: "active-within:border-active-dark transition[background-color,color,box-shadow] border-med bg-surface-0 focus-within:border-active-dark focus-within:ring-active-foreground/40 relative flex h-[36px] flex-row items-center justify-center rounded-md border duration-300 ease-in-out focus-within:ring-2" }, index.h("span", { key: '0c8aa68e76d33ad056fb2810979924a2c4c86efa', class: "px-8" }, index.h("i", { key: 'd8f77ba627668075ab369f1b670a34eccd2696af', class: "material-icons text-light !text-[16px] !leading-[30px]" }, "search")), index.h("input", { key: 'cfa497dfc05ba560fe0e38333b4552ba743da659', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-30 w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '6ebe84971367dfa6dd26fa22e3185d7bd3e30c98', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: 'a5e63025721eb7309d6793eb62434f8c3a5d5640', size: "sm", type: "secondaryText", icon: "backspace", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }))), index.h("span", { key: 'bfeafe39107e30b9558b6dfeeec0f8f2a8b0fa48', class: "text-med mt-4 truncate text-xs !leading-normal font-normal", "data-name": "search-hint" }, this.hint_text)));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
    }
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
        return (index.h("at-menu", { key: 'ab456eaef718474084bce8cc04090093f05169aa', width: "fit-content", align: "end" }, index.h("at-tooltip", { key: '542c8d1b2d35ed844100f67a718c91552a25ee13', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'c276fb65c6418fe1d3cc212d321b7f502a534564', slot: "tooltip-trigger", icon: "save_alt", type: "secondaryText" }), index.h("span", { key: '6c8febc1bef3d449992a7f5b9b18e76f8f1a8c6d' }, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", { key: 'e1c7c5ba6c216c4d7d4550880116c8352de3f082' }, index.h("at-menu-item", { key: 'ab304e9ab70f97dfc913677b2553a2904962382b', label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), index.h("at-menu-item", { key: '61084621cc09e7aa504d470c5234532925bb3aee', label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
            option_id: colDef.field,
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
        return (index.h(index.Host, { key: '2cd1b800a5e751452738ceb9e1ff23014df6c9d8' }, index.h("at-menu", { key: '3431a1635e65f425a7792f02e0d4bb5f084affe4', autoclose: false, width: "fit-content", class: "self-start" }, index.h("at-tooltip", { key: 'c84639f4d2c07167fa33fdf58aff7b69e7eeea8f', slot: "menu-trigger", position: "top" }, index.h("at-button", { key: 'de5a0e6707d9e51e68444c210c99af7cbbb21c7b', slot: "tooltip-trigger", type: "secondaryOutline", icon: "filter_list" }), index.h("span", { key: '1800bb7fcee588b54784a361f815662a4a91701f' }, this.translations.ATUI.TABLE.FILTER_DATA)), index.h("div", { key: '4185d23520896be0af6b7cd513275ac59aa8a60e', class: "flex flex-col" }, index.h("at-checkbox-group", { key: '612dca62e559fb26ea05b3ed9278085086cc61a6', class: "w-fit", options: this.filteredColumns, value: this.selected, onAtuiChange: (event) => this.handleColumnSelect(event) })))));
    }
    static get watchers() { return {
        "selected": ["handleSelectedChange"]
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
        return (this.col_defs && (index.h(index.Host, { key: '5b2362f4081ff9c0e334865cdae478abf13f603e', class: "flex items-start gap-8" }, this.selected.length > 0 && (index.h("div", { key: '1bc4b9ccb803eb863555659aa23bf0872b0e1e6e', class: "bg-surface-0 flex min-h-[36px] flex-wrap items-end gap-8 rounded-md p-8" }, this.selected.map((column) => (index.h("div", { class: "flex items-center gap-2" }, index.h("at-input", { class: "w-input-sm", label: column.id, prefix: column.id + ': ', value: column.value, onAtuiChange: (event) => this.filterChangeHandler(event, column.id) }, index.h("div", { slot: "input-actions" }, index.h("at-button", { icon: "cancel_outline", type: "secondaryText", size: "sm", onClick: () => this.clearSingleFilter(column.id), "data-name": `filter-clear-${column.id}` })))))), index.h("at-button", { key: '5733728ace2f2039f38895ed01d4591196d2a79f', type: "secondaryText", label: "Clear All", onClick: this.clearFilters, "data-name": "filter-clear-all" }))))));
    }
};

exports.at_placeholder = AtPlaceholderComponent;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
//# sourceMappingURL=at-placeholder.at-search.at-table-export-menu.at-table-filter-menu.at-table-filters.entry.cjs.js.map
