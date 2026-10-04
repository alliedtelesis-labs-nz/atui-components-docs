'use strict';

var index = require('./index-Dzqi4iVM.js');
var translation = require('./translation-NP6A4XKu.js');
var index$1 = require('./index-BwjM_pke.js');
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
        return (index.h(index.Host, { key: '4c270bd7e76ab24684a357a64a916956be2c1145', class: `at-control-group at-control-group--${this.direction}` }, index.h("slot", { key: '40c0f7d223f835f891491b4d5d26a0d3a72e73d3' })));
    }
};
AtControlGroup.style = atControlGroupCss();

const AtReloadButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiReload = index.createEvent(this, "atuiReload", 7);
    }
    get el() { return index.getElement(this); }
    translations;
    /**
     * Shows an indicator on the button when the underlying data has changed
     * since it was last loaded. This component does not detect changes
     * itself — the consumer sets this to true once it knows of an update
     * (e.g. from a websocket or poll) and back to false once the user
     * reloads.
     */
    has_updates = false;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    /**
     * Emitted when the reload button is clicked.
     */
    atuiReload;
    render() {
        return (index.h("at-tooltip", { key: 'a466de269a00fa6fe79dd16d3dfb2c1aaccf546c', position: "top" }, index.h("div", { key: '9156db7ff9f3c5dc33bdeb00458d650819452c4c', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (index.h("span", { key: '00914e8a0f8396af80d6326f52dfdbdce0adc7c6', class: "!bg-active-foreground pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full", "data-name": "reload-updates-indicator" })), index.h("at-button", { key: '8416b81ef6eb91ed7cc752695642c06a7bfe034e', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, index.h("at-icon", { key: '1ffadbc7e386bf3f26275b38a6c3dcb56bf399f3', slot: "icon", name: "retry" }))), index.h("span", { key: 'f5cceafeac951e6034538f880dfbb5b1eb928895' }, this.has_updates
            ? this.translations.ATUI.TABLE.RELOAD_UPDATES_AVAILABLE
            : this.translations.ATUI.TABLE.RELOAD)));
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
     * Tooltip description, shown as an info icon at the right of the search box.
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
    inputId = `search-${Math.random().toString(36).substring(2, 11)}`;
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
        return (index.h(index.Host, { key: '829038f0d248d41e1dee3c7ce14fdb2dea3536c2' }, this.label && (index.h("at-form-label", { key: 'd3339b53be3e6e927edf02f4434620afbeb09faa', label: this.label, for: this.inputId })), index.h("div", { key: '009cce9e277b3d300ce95a75f253a2a7b4f428f6', class: "border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus-within:z-10 focus-within:ring" }, index.h("at-icon", { key: '4341e879ffd5b03027a3706d693e9af3895008e6', class: "fill-foreground px-8", name: "search" }), index.h("input", { key: '1ce60a9facf91826229315ad896b56c3261b4727', id: this.inputId, role: "searchbox", "aria-label": this.label
                ? undefined
                : this.placeholder || 'Search', tabindex: "0", class: "mr-4 h-full w-full min-w-0 bg-transparent p-0 leading-[30px] text-ellipsis focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: '3a0418ac6b17785095c6d0e2b90313d33966f450', class: `mt-2 transition-[opacity] duration-150 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '7e5da73fef2dd6602ca2f5d1a4507e591cc79e9a', size: "sm", type: "secondaryText", "aria-label": "Clear search", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, index.h("at-icon", { key: '80b7a48aedd76bc14a36ea9c4e55a4cc4f677fee', slot: "icon", name: "cancel" }))), this.info_text && (index.h("div", { key: '42abfbef8bc175c9181dfda83ca727c715e2660a', class: "flex items-center pr-8", "data-name": "search-info" }, index.h("at-tooltip", { key: 'dbafe820275c43ab993efaf6a0ceca7d922ba5d1', position: "top" }, index.h("at-icon", { key: 'f7d23e7697337a281615a9fb01df889ca0897b76', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '6271bb1693ab78605d6f3c5e97f57b631cb25e31' }, this.info_text))))), this.hint_text && (index.h("span", { key: '65a806c12e6c7623bc56bee8b83c657473ce6d6b', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
    }
    /**
     * Offers the CSV export option in the export menu. On by default.
     */
    show_csv = true;
    /**
     * Offers the PDF export option in the export menu. On by default.
     */
    show_pdf = true;
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
        if (!this.show_csv && !this.show_pdf) {
            return null;
        }
        return (index.h("at-menu", { width: "fit-content", position: "left", align: "end" }, index.h("at-tooltip", { slot: "menu-trigger", position: "top" }, index.h("at-button", { slot: "tooltip-trigger", type: "secondaryText" }, index.h("at-icon", { slot: "icon", name: "download" })), index.h("span", null, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), index.h("div", null, this.show_csv && (index.h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') })), this.show_pdf && (index.h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') })))));
    }
};

const INTERACTION_ONLY_CELL_RENDERERS = [
    index$1.AvailableCells.CHECKBOX_CELL,
    index$1.AvailableCells.MENU_CELL,
    index$1.AvailableCells.MULTI_BTN_CELL,
];
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
    /**
     * Opens the filter menu, showing the filter form seeded with the active filters.
     */
    async openMenu() {
        await this.menuEl?.openMenu();
    }
    get filterConfig() {
        return (this.col_defs || [])
            .filter((colDef) => this.isFilterableColumn(colDef))
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
    isFilterableColumn(colDef) {
        return (!!colDef.field &&
            colDef.filterOptions?.exclude !== true &&
            !INTERACTION_ONLY_CELL_RENDERERS.includes(colDef.cellRenderer));
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
        return (index.h(index.Host, { key: '382680c8d22baebff41420dd0d153d63b9b0bfae' }, index.h("at-menu", { key: '2fa4af3763feb4d04b4de014a7e50716c1e74617', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, index.h("div", { key: 'd22603f56db10fecb19978b7c584bb0c49d6e91b', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            filterTree_util.countFilterConditions(this.filters) > 0 && (index.h("at-badge", { key: 'f26db97a115c475be887b4f9967c7e4f3bf06c67', class: "absolute top-[-8px] left-[-6px] z-50", type: "info", size: "sm", label: filterTree_util.countFilterConditions(this.filters).toString() })), index.h("at-button", { key: 'b0b79bac9b58b9b81ac247b1ac609ab08419d6eb', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, index.h("at-icon", { key: 'cc9bba387f919ac86fde42bef796e9d9d2e7b9b9', slot: "icon", name: "edit_filters" }))), index.h("at-tooltip", { key: 'b72cdc80c5d0e091ab50f5c6b92294bcc9a5a1a4', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), index.h("at-filter-form", { key: 'f0d6fd98c7710043b96b1df39cefbfbc2b5c0bcc', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
    }
};

const AtTableFilters = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atChange = index.createEvent(this, "atChange", 7);
        this.atFilterClick = index.createEvent(this, "atFilterClick", 7);
    }
    /**
     * The active filters to display as a removable chip list, grouped with And/Or operators and nested subgroups.
     */
    filters;
    /**
     * Emits the remaining filters whenever a chip is removed or all are cleared.
     */
    atChange;
    /**
     * Emits the clicked filter condition when a chip is clicked (excluding its remove button).
     */
    atFilterClick;
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
        return (index.h("at-badge", { class: "border-active-accent flex cursor-pointer items-center gap-4 text-center", rounded: true, "data-name": "filter-chip", label: label, role: "button", tabindex: "0", "aria-label": `Edit ${label}`, onClick: () => this.atFilterClick.emit(filter), onKeyDown: (event) => {
                if (event.target !== event.currentTarget)
                    return;
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.atFilterClick.emit(filter);
                }
            } }, index.h("button", { type: "button", class: "text-foreground/40 hover:text-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out", "data-name": "filter-chip-remove", "aria-label": `Remove ${label}`, onClick: (event) => {
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
        return (index.h(index.Host, { key: '54413acf018fdccdfebb2af9a1631dadd56742cc', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '83c667cc8cf2c8b23e3d0171ca24fed81f8995c2' }, "Page Size: "), index.h("at-select", { key: '7b56da1012067a9000508173a51fc43bd03a5989', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '8a8299c524f5ce476ad219e507b85305ffc9bbd8', "data-name": "pagination-first", "aria-label": "First page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, index.h("at-icon", { key: '129388a53e5959184618756a1a77fc13b9ad8907', slot: "icon", name: "first_page" })), index.h("at-button", { key: 'fd7bdc64369a263208b78ea5471bb711fd9409de', "data-name": "pagination-previous", "aria-label": "Previous page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, index.h("at-icon", { key: '36b3ac741d1a7f54747b621c31f6fc95551b22dc', slot: "icon", name: "chevron_left" })), index.h("span", { key: '9edd4aad342126da18ec0215bdfb2ae93aec7a6b' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: 'b633236c611e4beead6bdb58e804bf1c3b13b6d5', "data-name": "pagination-next", "aria-label": "Next page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, index.h("at-icon", { key: '75888333daff8847a7729190daeb464cd3c376ff', slot: "icon", name: "chevron_right" })), index.h("at-button", { key: '29642ce652dcadf58969adb01953280c7c27ae71', "data-name": "pagination-last", "aria-label": "Last page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, index.h("at-icon", { key: '3e0f4acba523c3ad2c8f6aee910c4f43574b1074', slot: "icon", name: "last_page" }))));
    }
};

exports.at_control_group = AtControlGroup;
exports.at_reload_button = AtReloadButton;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
exports.at_table_pagination = AtTablePagination;
