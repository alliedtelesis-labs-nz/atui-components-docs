'use strict';

var index = require('./index-CjCsBbN_.js');
var translation = require('./translation-NP6A4XKu.js');
var index$1 = require('./index-CmXMuEr6.js');
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
        return (index.h(index.Host, { key: '3964917416ea79c0e7b4cd38e4ef3ada41d0a469', class: `at-control-group at-control-group--${this.direction}` }, index.h("slot", { key: '31bff7703e4a3429b870cc9ec648189eee165518' })));
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
        return (index.h("at-tooltip", { key: '93d53831f020f41da9a76ef08c6bc22019030c05', position: "top" }, index.h("div", { key: 'a12d029aafb8ba5bd96162b32ca29faed4729786', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (index.h("span", { key: 'd3baaa3575d2c6fc3bf1335639a3db8810b10c0a', class: "!bg-active-foreground pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full", "data-name": "reload-updates-indicator" })), index.h("at-button", { key: 'ba3936594223b1c8e9a87fdc92d0e54fc7f63d5e', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, index.h("at-icon", { key: 'be0818f93a980c331ada4cd9b3ce24b304989a81', slot: "icon", name: "retry" }))), index.h("span", { key: 'fc6bbd0ed2f1893b0a34980572556094a9e7d199' }, this.has_updates
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
        return (index.h(index.Host, { key: 'ff500c5e11bcfc27540c837e37b3c0c6da94d1eb' }, this.label && (index.h("at-form-label", { key: 'fba2ddc4493cb0001808b6d6b3fa82fce3aa3c97', label: this.label, for: this.inputId })), index.h("div", { key: '4580c13f3cc9148d1ef3519926c6f864072ee2ba', class: "border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus-within:z-10 focus-within:ring" }, index.h("at-icon", { key: '20175488b53f10e4397b7aaa825c0e4643d43072', class: "fill-foreground px-8", name: "search" }), index.h("input", { key: 'd597a147f8ba468aeb6872db7452358925220177', id: this.inputId, role: "searchbox", "aria-label": this.label
                ? undefined
                : this.placeholder || 'Search', tabindex: "0", class: "mr-4 h-full w-full min-w-0 bg-transparent p-0 leading-[30px] text-ellipsis focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), index.h("div", { key: 'bd79ac716978f77a471dcd179872fdce670ca2e8', class: `mt-2 transition-[opacity] duration-150 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, index.h("at-button", { key: '39da3711e0fd49adfc5a1b615e1df3dc1122b24b', size: "sm", type: "secondaryText", "aria-label": "Clear search", onAtuiClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, index.h("at-icon", { key: 'c5a074d4f2716fc13738915a462f311e5bf6592d', slot: "icon", name: "cancel" }))), this.info_text && (index.h("div", { key: 'dbdd44e9378ce805bd43f15e7dba3af838d87d6e', class: "flex items-center pr-8", "data-name": "search-info" }, index.h("at-tooltip", { key: '7f0e204b1230d525ff79652b42b5e2916e82abc6', position: "top" }, index.h("at-icon", { key: 'eaab618ce895f87583a023ab0cfd7054037466d2', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), index.h("span", { key: '893d97b99d5c7abda325744a599b0d73dba8ecdf' }, this.info_text))))), this.hint_text && (index.h("span", { key: '81915339b6eb336c4b3b56e91478d18cacd13512', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
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
     * @deprecated PDF export is being removed. Set it to false and offer CSV export.
     */
    show_pdf = true;
    get el() { return index.getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await translation.fetchTranslations(this.el);
    }
    /**
     * Emits the chosen format, either 'CSV' or 'PDF'.
     */
    atChange;
    renderTrigger(tooltip, slot, onClick) {
        return (index.h("at-tooltip", { slot: slot, position: "top" }, index.h("at-button", { slot: "tooltip-trigger", type: "secondaryText", "data-name": "export-trigger", onAtuiClick: onClick }, index.h("at-icon", { slot: "icon", name: "download" })), index.h("span", null, tooltip)));
    }
    render() {
        if (!this.show_csv && !this.show_pdf) {
            return null;
        }
        const labels = this.translations.ATUI.TABLE;
        if (this.show_csv !== this.show_pdf) {
            const format = this.show_csv ? 'CSV' : 'PDF';
            return this.renderTrigger(this.show_csv ? labels.EXPORT_AS_CSV : labels.EXPORT_AS_PDF, undefined, () => this.atChange.emit(format));
        }
        return (index.h("at-menu", { width: "fit-content", position: "left", align: "end" }, this.renderTrigger(labels.EXPORT_TO_FILE, 'menu-trigger'), index.h("div", null, index.h("at-menu-item", { label: labels.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), index.h("at-menu-item", { label: labels.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (index.h(index.Host, { key: 'b787d5a95cf8e2d778cfdbd7ff47cabf046aa004' }, index.h("at-menu", { key: '9ad87779507dd72f8ad69b70583923ad9d51ec36', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, index.h("div", { key: 'a7f758996be9968d722177e058a15719c6253010', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            filterTree_util.countFilterConditions(this.filters) > 0 && (index.h("at-badge", { key: 'e63ad085e7b0061e168055b2d4aad3113bdcee5e', class: "absolute top-[-8px] left-[-6px] z-50", type: "info", size: "sm", label: filterTree_util.countFilterConditions(this.filters).toString() })), index.h("at-button", { key: 'cb178efacc688441afe564728e849ba53e21f819', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, index.h("at-icon", { key: '510b51b636730aef13ab5e10f77dbcfa381ab7ec', slot: "icon", name: "edit_filters" }))), index.h("at-tooltip", { key: '83efd75e9d82790ce5cbbcc14e81b1cc29061f84', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), index.h("at-filter-form", { key: '2ea456526689104c893ee31b724056dc0b3a8f61', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
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
        return (index.h(index.Host, { key: '6554e33d8cd11bd2b3d306b8049dcec93079f1e3', class: "mt-8 flex items-center justify-end gap-8" }, index.h("span", { key: '52204e08d075193a86e90a4525c495ce05f7c6f1' }, "Page Size: "), index.h("at-select", { key: '446a6b1dc99f09078beee2ef2f8cae708f38ce56', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), index.h("at-button", { key: '0a4ce69b3b1496b8a02fb566d586e4123d6b630e', "data-name": "pagination-first", "aria-label": "First page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, index.h("at-icon", { key: '453ac80ffcad539b3bb0188cca2432b7afc57d52', slot: "icon", name: "first_page" })), index.h("at-button", { key: '3a59a040facfb7e17551dcb1c6fc8aa6eb588db5', "data-name": "pagination-previous", "aria-label": "Previous page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, index.h("at-icon", { key: '19c0ad437878584da43c050adfffd59e0a80005b', slot: "icon", name: "chevron_left" })), index.h("span", { key: '6608bd02ae391d9dabbafd9996b67e0f099af861' }, "Page ", this.current_page, " of ", this.num_pages), index.h("at-button", { key: '9db7b39c690c646c86fe19f8d4f0b69482c1ebaf', "data-name": "pagination-next", "aria-label": "Next page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, index.h("at-icon", { key: '0d7318c8deed91edef9db6275642c1742703b9e9', slot: "icon", name: "chevron_right" })), index.h("at-button", { key: 'd144446b921e4d2d7dbcad4eb32372b6137f0406', "data-name": "pagination-last", "aria-label": "Last page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, index.h("at-icon", { key: 'b5740ceeaedf9e2027c64e00b6292bb5fe8c2bbf', slot: "icon", name: "last_page" }))));
    }
};

exports.at_control_group = AtControlGroup;
exports.at_reload_button = AtReloadButton;
exports.at_search = AtSearch;
exports.at_table_export_menu = AtTableExportMenu;
exports.at_table_filter_menu = AtTableFilterMenu;
exports.at_table_filters = AtTableFilters;
exports.at_table_pagination = AtTablePagination;
