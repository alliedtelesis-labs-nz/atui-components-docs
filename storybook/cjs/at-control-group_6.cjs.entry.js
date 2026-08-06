'use strict';

var index = require('./index-C0zY2e5N.js');
var translation = require('./translation-D3uILiF8.js');
var filterTree_util = require('./filter-tree.util-DfYwq3Yg.js');

const atControlGroupCss = () => `at-control-group{display:inline-flex;justify-content:center}at-control-group.at-control-group--horizontal{flex-direction:row;align-items:stretch}at-control-group.at-control-group--horizontal>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:last-child){border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:first-child){border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:last-child)>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:last-child)>div{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:last-child)>div>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:last-child)>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>*:not(:first-child){margin-left:-1px}at-control-group.at-control-group--vertical{flex-direction:column}at-control-group.at-control-group--vertical>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:last-child){border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:first-child){border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:last-child)>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:last-child)>div{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:last-child)>div>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:last-child)>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>*:not(:first-child){margin-top:-1px}`;

const AtControlGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Layout direction of the grouped elements.
     */
    direction = 'horizontal';
    render() {
        return (index.h(index.Host, { key: 'f9acf8ce8756b53570b91205806ba66f5d148bc9', class: `at-control-group at-control-group--${this.direction}` }, index.h("slot", { key: 'e314e677ee0a7aa4f5f2579bf16bbe2026be3468' })));
    }
};
AtControlGroup.style = atControlGroupCss();

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
        return (index.h(index.Host, { key: '86e695a0204bdbf052398a46ec17bd63b05e82ea' }, (this.label || this.info_text) && (index.h("at-form-label", { key: 'f4271c0d36f5cb23751ab2aa7b89c6b61acf375d', label: this.label, for: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, info_text: this.info_text })), index.h("div", { key: '8ca7f1c1abae4c030c18da5500e3b814afb1f26c', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border duration-300 ease-in-out focus-within:z-10 focus-within:ring" }, index.h("at-icon", { key: '495fa46281bd677691db11439ae282e8c50f73e9', class: "fill-foreground px-8", name: "search" }), index.h("input", { key: '4c0e7626c5264181462baaef249f95cbea1e635d', id: this.label
                ? `search-input-${this.label.replace(/\s+/g, '-').toLowerCase()}`
                : undefined, role: "searchbox", tabindex: "0", class: "mr-24 h-full w-full bg-transparent p-0 leading-[30px] focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '173541b7da731273bafda0b482c18304fd6dbe30', class: `transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '1b833bc510672e4c9c992c95984b3e22308bebc7', size: "sm", type: "secondaryText", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, index.h("at-icon", { key: 'd1eda5d553b61bd13f5a5843d751466f336f27a9', slot: "icon", name: "backspace" })))), this.hint_text && (index.h("span", { key: 'b4d46ad6d1a6e8f128c09db9e66f8beef738d819', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
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
     * Currently active filters, used to seed the form when the menu is opened
     */
    filters;
    translations;
    get el() { return index.getElement(this); }
    menuEl;
    /**
     * Emits the active filters when the user applies a search
     */
    atChange;
    get filterConfig() {
        return (this.col_defs || [])
            .filter((colDef) => !(colDef.filterOptions &&
            colDef.filterOptions.exclude === true))
            .map((colDef) => {
            const filterOptions = this.convertDropdownKeysToSelectOptions(colDef);
            return {
                id: colDef.field ?? '',
                label: colDef.headerName ?? colDef.field ?? '',
                value: '',
                ...(filterOptions && { filter_options: filterOptions }),
            };
        });
    }
    convertDropdownKeysToSelectOptions(column) {
        if (column?.filterOptions?.dropdownKeys) {
            return column.filterOptions.dropdownKeys.map((key) => ({
                value: key.content,
                label: key.translationKey,
            }));
        }
    }
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    handleSearch = async (event) => {
        this.atChange.emit(event.detail);
        await this.menuEl?.closeMenu();
    };
    handleCancel = async () => {
        await this.menuEl?.closeMenu();
    };
    render() {
        return (index.h(index.Host, { key: '67050294b72428cf32aa32327bca3323ecb62365' }, index.h("at-menu", { key: 'fd8b2253ff28e71fc13b2695bcfa5306d87521a5', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, index.h("div", { key: 'a06452e0e31b1490003a44d8d13ae41bd9bdadf6', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            filterTree_util.countFilterConditions(this.filters) > 0 && (index.h("at-badge", { key: '1271fc6f42e7887f8b3c9495ffc30698a2e3eec1', class: "absolute top-[-8px] left-[-6px] z-10", type: "info", size: "sm", label: filterTree_util.countFilterConditions(this.filters).toString() })), index.h("at-button", { key: '5da21e70fb5bc62864c0c358bedac0d0d2059435', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, index.h("at-icon", { key: 'c7f4c360e131973e268bbe98734ccad58e809a1a', slot: "icon", name: "edit_filters" }))), index.h("at-tooltip", { key: '6bf8799c61870f7f68d15faec41c6a3e5b7edc1d', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), index.h("at-filter-form", { key: 'b66d403111fa8497d4b4762c8485bda27a865847', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
    }
};

const AtTableFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
    }
    /**
     * The active filters to display as a removable chip list, grouped with And/Or operators and nested parentheses.
     */
    filters;
    /**
     * Emits the remaining filters whenever a chip is removed or all are cleared.
     */
    atChange;
    chipLabel(filter) {
        return `${filter.label ?? filter.id} ${filter.operator ?? ''} ${filter.value}`
            .replace(/\s+/g, ' ')
            .trim();
    }
    groupBackground(depth) {
        return depth % 2 === 0 ? 'bg-surface-0' : 'bg-surface-1';
    }
    hasValidCondition(node) {
        return filterTree_util.isFilterGroup(node)
            ? node.children.some((child) => this.hasValidCondition(child))
            : !!(node.id && node.value);
    }
    removeCondition(condition) {
        const filters = this.filters;
        filterTree_util.removeFilterCondition(filters, condition);
        this.filters = { ...filters };
        this.atChange.emit(this.filters);
    }
    clearAll = () => {
        const filters = this.filters;
        filterTree_util.flattenFilterConditions(filters)
            .filter((condition) => condition.id && condition.value)
            .forEach((condition) => filterTree_util.removeFilterCondition(filters, condition));
        this.filters = { ...filters };
        this.atChange.emit(this.filters);
    };
    renderConditionChip(filter) {
        const label = this.chipLabel(filter);
        return (index.h("at-badge", { class: "flex items-center gap-4 text-center", rounded: true, "data-name": "filter-chip", label: label }, index.h("button", { type: "button", class: "fill-foreground/40 hover:fill-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[fill] duration-150", "data-name": "filter-chip-remove", "aria-label": `Remove ${label}`, onClick: (event) => {
                event.stopPropagation();
                this.removeCondition(filter);
            } }, index.h("at-icon", { name: "cancel" }))));
    }
    renderGroupChips(group, depth = 0) {
        const children = group.children.filter((child) => this.hasValidCondition(child));
        const bgClass = this.groupBackground(depth);
        return children.flatMap((child, index$1) => {
            const items = [];
            if (index$1 > 0) {
                items.push(index.h("span", { class: "text-muted text-xs font-semibold", "data-name": "filter-chip-operator" }, group.logical_operator));
            }
            items.push(filterTree_util.isFilterGroup(child) ? (index.h("span", { class: `flex items-center gap-4 rounded-full p-2 ${bgClass}`, "data-name": "filter-chip-group" }, this.renderGroupChips(child, depth + 1))) : (this.renderConditionChip(child)));
            return items;
        });
    }
    render() {
        if (!this.filters || !this.hasValidCondition(this.filters)) {
            return index.h(index.Host, null);
        }
        const conditionCount = filterTree_util.flattenFilterConditions(this.filters).filter((condition) => condition.id && condition.value).length;
        return (index.h(index.Host, { class: "flex items-start gap-8" }, index.h("div", { class: "flex h-full flex-wrap items-center gap-4", "data-name": "filter-chip-list" }, this.renderGroupChips(this.filters), conditionCount > 1 && (index.h("at-button", { size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => this.clearAll() }, index.h("at-icon", { slot: "icon", name: "backspace" }))))));
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
        return (index.h(index.Host, { key: '465a4b29a0c995046ab765a0b0ee677afc1b66a5', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: 'd1021326e73c9eb7958e7cb2291e985617d6f7de' }, "Page Size: "), index.h("at-select", { key: '9e7bbc11a32fe76b329939d45c15dc8f981b2f9b', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '3d90f28feebbbe2771c510128f53a2ad0634b979', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, index.h("at-icon", { key: '65d81273f96dd7b77a7faad757fc159d65150159', slot: "icon", name: "first_page" })), index.h("at-button", { key: 'b04453971099c51550230d9ac7e046f37b90147c', disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, index.h("at-icon", { key: 'd8d65ec09f70e1301ddaa0a1d78ee0072f076e38', slot: "icon", name: "chevron_left" })), index.h("span", { key: 'ab561f0829ec5d162edd811496836b7eeb23e780' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '9eb12fe12c316edb4db624415c576ddb747fe931', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, index.h("at-icon", { key: 'bd029397d2c4c838973c7c27be12ca23a0de6e79', slot: "icon", name: "chevron_right" })), index.h("at-button", { key: '6705d6d80542563fec77daf07d4e106771955ea0', disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, index.h("at-icon", { key: '96df74b4bf9da03f30f6c4ec9d12b5d990defc81', slot: "icon", name: "last_page" }))));
    }
};

exports.at_control_group = AtControlGroup;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
exports.at_table_pagination = AtTablePagination;
