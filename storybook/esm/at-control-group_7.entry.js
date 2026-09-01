import { r as registerInstance, h, H as Host, c as createEvent, a as getElement } from './index-m_dTEvgo.js';
import { f as fetchTranslations } from './translation-DJgkls7W.js';
import { A as AvailableCells } from './index-D2ly98i_.js';
import { c as countFilterConditions, i as isFilterGroup, d as removeFilterCondition, b as flattenFilterConditions } from './filter-tree.util-CYRBwQ7z.js';

const atControlGroupCss = () => `at-control-group{display:inline-flex;justify-content:center}at-control-group.at-control-group--horizontal{flex-direction:row;align-items:stretch}at-control-group.at-control-group--horizontal>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:last-child){border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-button:not(:first-child){border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:last-child)>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--horizontal>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:last-child)>div{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:last-child)>div>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:last-child)>div>div:last-child{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--horizontal>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}at-control-group.at-control-group--horizontal>*:not(:first-child){margin-left:-1px}at-control-group.at-control-group--vertical{flex-direction:column}at-control-group.at-control-group--vertical>at-button:not(:first-child):not(:last-child){border-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:last-child){border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-button:not(:first-child){border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child):not(:last-child)>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:last-child)>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input:not(:first-child)>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child):not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child):not(:last-child) [data-name=multi-select-input-container]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:last-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:last-child) [data-name=multi-select-input-container]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-select:not(:first-child) [data-name=select-input],at-control-group.at-control-group--vertical>at-multi-select:not(:first-child) [data-name=multi-select-input-container]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child):not(:last-child)>div{border-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:last-child)>div{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-search:not(:first-child)>div{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child):not(:last-child)>div>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:last-child)>div>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-date:not(:first-child)>div>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child):not(:last-child)>div>div:last-child{border-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:last-child)>div>div:last-child{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-input-time:not(:first-child)>div>div:last-child{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child):not(:last-child) at-button[slot=menu-trigger]{border-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:last-child) at-button[slot=menu-trigger]{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important}at-control-group.at-control-group--vertical>at-menu:not(:first-child) at-button[slot=menu-trigger]{border-top-left-radius:0 !important;border-top-right-radius:0 !important}at-control-group.at-control-group--vertical>*:not(:first-child){margin-top:-1px}`;

const AtControlGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Layout direction of the grouped elements.
     */
    direction = 'horizontal';
    render() {
        return (h(Host, { key: 'bc5de31f0253c4d5941a1695704ab1d23cc828af', class: `at-control-group at-control-group--${this.direction}` }, h("slot", { key: 'd34d62820bf600f5b4190c968b0baa775b0d4e05' })));
    }
};
AtControlGroup.style = atControlGroupCss();

const AtReloadButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiReload = createEvent(this, "atuiReload", 7);
    }
    get el() { return getElement(this); }
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
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emitted when the reload button is clicked.
     */
    atuiReload;
    render() {
        return (h("at-tooltip", { key: '37f2a3b202b93211a6267f6d97381ef570412349', position: "top" }, h("div", { key: '0b84dc1025289bede457859403e6902e93f79699', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (h("span", { key: 'fa8cd0270812798659578fa94c33791953e9243e', class: "!bg-active-foreground pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full", "data-name": "reload-updates-indicator" })), h("at-button", { key: '0462b649d9c9cab3837d6c1497695a4277b7ae9a', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, h("at-icon", { key: '82a29e3de988a4502f99a9d74b7de9fb5d8f0cb6', slot: "icon", name: "retry" }))), h("span", { key: '352ca1d3880bb8cc3548a1020b66d06b8e5d93f0' }, this.has_updates
            ? this.translations.ATUI.TABLE.RELOAD_UPDATES_AVAILABLE
            : this.translations.ATUI.TABLE.RELOAD)));
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
        return (h(Host, { key: '7e5f26da4b69e0c55a4cc785376284bb5734d312' }, this.label && (h("at-form-label", { key: 'e3ca7cefa44f0b493833b80ef3194c92f406e651', label: this.label, for: this.inputId })), h("div", { key: 'b17ac26c48c2c6a4e71c84279d42db535f7baed0', class: "transition[background-color,color,box-shadow] border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border duration-300 ease-in-out focus-within:z-10 focus-within:ring" }, h("at-icon", { key: '9dc5d7d9a318a85c699a0a83d0b38b925b983bdf', class: "fill-foreground px-8", name: "search" }), h("input", { key: '73cc1a97f6335eaf3faa09e649f336935f4d8c19', id: this.inputId, role: "searchbox", "aria-label": this.label
                ? undefined
                : this.placeholder || 'Search', tabindex: "0", class: "mr-4 h-full w-full min-w-0 bg-transparent p-0 leading-[30px] text-ellipsis focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: 'c0826d4d936be2a9fe6971970fb0f841be0c75b7', class: `mt-2 transition-all duration-300 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: 'b319cca400b9e894db833749b81857c75044b350', size: "sm", type: "secondaryText", "aria-label": "Clear search", onClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: '7c6901d2d03a53f8d1a978ca3d2309a9ffbcf62c', slot: "icon", name: "cancel" }))), this.info_text && (h("div", { key: 'a987cb8bf6d8aeabb1dc41988dc3a39709a1dd08', class: "flex items-center pr-8", "data-name": "search-info" }, h("at-tooltip", { key: '23ec678a47dee5471d17d7f626c77020ad5548cf', position: "top" }, h("at-icon", { key: 'da6d25e3baed07583e369f7d7553addf255a8cde', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: 'a30c08d5c11e5cabb86a5003e488cf1221a8a91e' }, this.info_text))))), this.hint_text && (h("span", { key: '8550f56b3178ca6cafbf79fcd3b424e94c934c62', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
    }
};

const AtTableExportMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
    }
    /**
     * Offers the CSV export option in the export menu. On by default.
     */
    show_csv = true;
    /**
     * Offers the PDF export option in the export menu. On by default.
     */
    show_pdf = true;
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
        if (!this.show_csv && !this.show_pdf) {
            return null;
        }
        return (h("at-menu", { width: "fit-content", position: "left", align: "end" }, h("at-tooltip", { slot: "menu-trigger", position: "top" }, h("at-button", { slot: "tooltip-trigger", type: "secondaryText" }, h("at-icon", { slot: "icon", name: "download" })), h("span", null, this.translations.ATUI.TABLE.EXPORT_TO_FILE)), h("div", null, this.show_csv && (h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') })), this.show_pdf && (h("at-menu-item", { label: this.translations.ATUI.TABLE.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') })))));
    }
};

const INTERACTION_ONLY_CELL_RENDERERS = [
    AvailableCells.CHECKBOX_CELL,
    AvailableCells.MENU_CELL,
    AvailableCells.MULTI_BTN_CELL,
];
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
     * Currently active filters, used to seed the form when the menu is opened
     */
    filters;
    translations;
    get el() { return getElement(this); }
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
        this.translations = await fetchTranslations(this.el);
    }
    handleSearch = async (event) => {
        this.atChange.emit(event.detail);
        await this.menuEl?.closeMenu();
    };
    handleCancel = async () => {
        await this.menuEl?.closeMenu();
    };
    render() {
        return (h(Host, { key: '7df5efcc7a021d2b1995354dcfce7320a9477a3b' }, h("at-menu", { key: '0709e503152adcaff4859a016fbafb96a8266038', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("div", { key: '383ce25985d64b37e77058ce273a82ca06457765', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            countFilterConditions(this.filters) > 0 && (h("at-badge", { key: '2f377812848ce373c0d72bbe06694d6f9e660b01', class: "absolute top-[-8px] left-[-6px] z-50", type: "info", size: "sm", label: countFilterConditions(this.filters).toString() })), h("at-button", { key: '86da0346f7abdd9ac2a70848c8db075a20ac1215', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, h("at-icon", { key: '35e80513c073646353be83f854303e566295a841', slot: "icon", name: "edit_filters" }))), h("at-tooltip", { key: 'd4761a2cfe449404e60e6a747ab1d676a18cdcdf', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), h("at-filter-form", { key: 'fbad025c7f015cd69130fa99213311eed84cd9c9', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
    }
};

const AtTableFilters = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atChange = createEvent(this, "atChange", 7);
        this.atFilterClick = createEvent(this, "atFilterClick", 7);
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
        return isFilterGroup(node)
            ? node.children.some((child) => this.hasValidCondition(child))
            : !!(node.id && node.value);
    }
    removeCondition(condition) {
        const filters = this.filters;
        removeFilterCondition(filters, condition);
        this.filters = { ...filters };
        this.atChange.emit(this.filters);
    }
    clearAll = () => {
        const filters = this.filters;
        flattenFilterConditions(filters)
            .filter((condition) => condition.id && condition.value)
            .forEach((condition) => removeFilterCondition(filters, condition));
        this.filters = { ...filters };
        this.atChange.emit(this.filters);
    };
    renderConditionChip(filter) {
        const label = this.chipLabel(filter);
        return (h("at-badge", { class: "border-active-accent flex cursor-pointer items-center gap-4 text-center", rounded: true, "data-name": "filter-chip", label: label, role: "button", tabindex: "0", "aria-label": `Edit ${label}`, onClick: () => this.atFilterClick.emit(filter), onKeyDown: (event) => {
                if (event.target !== event.currentTarget)
                    return;
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.atFilterClick.emit(filter);
                }
            } }, h("button", { type: "button", class: "fill-foreground/40 hover:fill-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[fill] duration-150", "data-name": "filter-chip-remove", "aria-label": `Remove ${label}`, onClick: (event) => {
                event.stopPropagation();
                this.removeCondition(filter);
            } }, h("at-icon", { name: "cancel" }))));
    }
    renderGroupChips(group, depth = 0) {
        const children = group.children.filter((child) => this.hasValidCondition(child));
        const bgClass = this.groupBackground(depth);
        return children.flatMap((child, index) => {
            const items = [];
            if (index > 0) {
                items.push(h("span", { class: "text-muted text-xs font-semibold", "data-name": "filter-chip-operator" }, group.logical_operator));
            }
            items.push(isFilterGroup(child) ? (h("span", { class: `flex items-center gap-4 rounded-full p-2 ${bgClass}`, "data-name": "filter-chip-group" }, this.renderGroupChips(child, depth + 1))) : (this.renderConditionChip(child)));
            return items;
        });
    }
    render() {
        if (!this.filters || !this.hasValidCondition(this.filters)) {
            return h(Host, null);
        }
        const conditionCount = flattenFilterConditions(this.filters).filter((condition) => condition.id && condition.value).length;
        return (h(Host, { class: "flex items-start gap-8" }, h("div", { class: "flex h-full flex-wrap items-center gap-4", "data-name": "filter-chip-list" }, this.renderGroupChips(this.filters), conditionCount > 1 && (h("at-button", { size: "sm", type: "secondaryText", "data-name": "clear-all", "aria-label": "Clear all chips", onAtuiClick: () => this.clearAll() }, h("at-icon", { slot: "icon", name: "backspace" }))))));
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
        return (h(Host, { key: '7db3c0ea1d096dd0e8123f494cde616c8ff6f1f7', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '4acb72238314e1c996e4763fd2f1132bdadef731' }, "Page Size: "), h("at-select", { key: '12e47bfb254d8ab5feb84835c9a8d750507374ec', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'fa672297ad583100a1ca742b37181f85dd7c24e2', "data-name": "pagination-first", "aria-label": "First page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: '9bdf0f95836417ab73535f59fcdc89cda15d805f', slot: "icon", name: "first_page" })), h("at-button", { key: '9f955c9b4a5a8456d9293978359a95ca1d449083', "data-name": "pagination-previous", "aria-label": "Previous page", disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: 'cba6833e27b776761e1f8768ada63b6c8b99938d', slot: "icon", name: "chevron_left" })), h("span", { key: 'cf50118c4b49a675fa9f2a50ed87f3f8dbf16254' }, "Page ", this.current_page, " of ", this.num_pages), h("at-button", { key: '99a9d63e2f0d4763135ebabeddeb22a16f72be7c', "data-name": "pagination-next", "aria-label": "Next page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: '5c4e568144cc2d929f6ddc7299c3def192e86049', slot: "icon", name: "chevron_right" })), h("at-button", { key: '70b2724927a5a5f9e8fc556eb0d72a353a929ebe', "data-name": "pagination-last", "aria-label": "Last page", disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: 'af8d2501c87ae8e46c3c2e9e9bdb44f5ec422f9e', slot: "icon", name: "last_page" }))));
    }
};

export { AtControlGroup as at_control_group, AtReloadButton as at_reload_button, AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters, AtTablePagination as at_table_pagination };
