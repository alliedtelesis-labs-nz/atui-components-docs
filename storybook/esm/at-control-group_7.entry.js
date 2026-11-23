import { r as registerInstance, h, H as Host, c as createEvent, a as getElement } from './index-CNjTRhUr.js';
import { f as fetchTranslations, i as interpolate } from './translation-Bmdl6o2j.js';
import { A as AvailableCells } from './index-CXLyuXhr.js';
import { c as countFilterConditions, i as isFilterGroup, d as removeFilterCondition, b as flattenFilterConditions } from './filter-tree.util-CYRBwQ7z.js';
import { b as filterConditionLabel, a as filterLogicalOperatorLabel } from './filter-labels.util-BJ2mdMHf.js';

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
        return (h(Host, { key: '4c270bd7e76ab24684a357a64a916956be2c1145', class: `at-control-group at-control-group--${this.direction}` }, h("slot", { key: '40c0f7d223f835f891491b4d5d26a0d3a72e73d3' })));
    }
};
AtControlGroup.style = atControlGroupCss();

const INDICATOR_COLOR = {
    info: '!bg-active-foreground',
    warning: '!bg-warning-foreground',
    error: '!bg-error-foreground',
};
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
    /**
     * Colours the updates indicator to signal how urgent the pending
     * update is. Only visible while `has_updates` is true.
     */
    updates_severity = 'info';
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emitted when the reload button is clicked.
     */
    atuiReload;
    render() {
        return (h("at-tooltip", { key: 'd30f54bd28377cbb7ec51f67a6049e8420ca287e', position: "top" }, h("div", { key: '3e53399866ff3bfbd415da2c0a0ce8a84a8d8c1b', slot: "tooltip-trigger", class: "relative" }, this.has_updates && (h("span", { key: '01e826f7db5afd07a787a85e8384b50412893f83', class: `${INDICATOR_COLOR[this.updates_severity] ?? INDICATOR_COLOR.info} pointer-events-none absolute top-[2px] right-[2px] z-10 h-[8px] w-[8px] rounded-full`, "data-name": "reload-updates-indicator" })), h("at-button", { key: '26e8b7a2988862b09c71622d7581f7a362844c40', type: "secondaryText", onAtuiClick: () => this.atuiReload.emit() }, h("at-icon", { key: '778dd8f6466cfadeb67adb3ddca5297398995f73', slot: "icon", name: "retry" }))), h("span", { key: '5d2bbbafc43cfa2d795f83d8bcf8e6013b91954e' }, this.has_updates
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
        return (h(Host, { key: '9742d30524c92ab20f4f467853d0e93f1fe17edb' }, this.label && (h("at-form-label", { key: '582255b52ed5ddab58274ebaba5b008d7dfc921a', label: this.label, for: this.inputId })), h("div", { key: '5830946a4c83c7bccd31a24347566c9a688a989e', class: "border-input bg-input-background focus-within:border-active-accent focus-within:ring-active-glow rounded-input h-input min-h-input relative flex flex-row items-center justify-center border transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus-within:z-10 focus-within:ring" }, h("at-icon", { key: '983497f37c0b0aa30073d149f09b235a08098360', class: "fill-foreground px-8", name: "search" }), h("input", { key: '44f971d9e83d351da02fa6b66c9b83470d1d2ccf', id: this.inputId, role: "searchbox", "aria-label": this.label
                ? undefined
                : this.placeholder || 'Search', tabindex: "0", class: "mr-4 h-full w-full min-w-0 bg-transparent p-0 leading-[30px] text-ellipsis focus:border-none focus:outline-none", placeholder: this.placeholder, value: this.model, autocomplete: "off", name: "search", onInput: () => this.onChangeFn(), ref: (el) => (this.searchEl = el) }), h("div", { key: '50bd557b945f5c154bcb42286c6fcd0dd328d4d3', class: `mt-2 transition-[opacity] duration-150 ease-in-out ${this.model !== '' && this.model !== undefined
                ? 'pr-4 opacity-100'
                : 'pointer-events-none pr-0 opacity-0'}` }, h("at-button", { key: '6fb24875f8f9d31afb613941df961940effabeb1', size: "sm", type: "secondaryText", "aria-label": "Clear search", onAtuiClick: () => this.clearFn(), "data-name": "search-clear", tabindex: this.model !== '' && this.model !== undefined
                ? '0'
                : '-1' }, h("at-icon", { key: '8e5153dd8004feb513dc1162032cf5ae3bfcff7d', slot: "icon", name: "cancel" }))), this.info_text && (h("div", { key: 'dd29fd5fcda81d3261fb3367eb19f2b54a737598', class: "flex items-center pr-8", "data-name": "search-info" }, h("at-tooltip", { key: 'e60a02b65f0d2f466f45976ceaeb735c10db1ebb', position: "top" }, h("at-icon", { key: 'f7f35f648408b987276a37f5892cf0dcd6e70561', slot: "tooltip-trigger", class: "fill-muted cursor-pointer", name: "info", size: "1rem" }), h("span", { key: '4efd62f59c6ecf48f1d0eae932d0d6355a95a009' }, this.info_text))))), this.hint_text && (h("span", { key: '32551408d66df4c7a57f614c62c5221dff62febd', class: "text-secondary mt-4 truncate text-xs !leading-normal font-normal empty:hidden", "data-name": "search-hint" }, this.hint_text))));
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
     * @deprecated PDF export is being removed. Set it to false and offer CSV export.
     */
    show_pdf = true;
    get el() { return getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    /**
     * Emits the chosen format, either 'CSV' or 'PDF'.
     */
    atChange;
    renderTrigger(tooltip, slot, onClick) {
        return (h("at-tooltip", { slot: slot, position: "top" }, h("at-button", { slot: "tooltip-trigger", type: "secondaryText", "data-name": "export-trigger", onAtuiClick: onClick }, h("at-icon", { slot: "icon", name: "download" })), h("span", null, tooltip)));
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
        return (h("at-menu", { width: "fit-content", position: "left", align: "end" }, this.renderTrigger(labels.EXPORT_TO_FILE, 'menu-trigger'), h("div", null, h("at-menu-item", { label: labels.EXPORT_AS_CSV, id: "CSV", onAtuiClick: () => this.atChange.emit('CSV') }), h("at-menu-item", { label: labels.EXPORT_AS_PDF, id: "PDF", onAtuiClick: () => this.atChange.emit('PDF') }))));
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
        return (h(Host, { key: 'a5a39e5a106d5b48373910580cd850adb3c4d758' }, h("at-menu", { key: '7baf509069c335f8bead147077d616ddf3ba9cb4', ref: (el) => (this.menuEl = el), autoclose: false, width: "fit-content", class: "self-start", align: "start" }, h("div", { key: 'e374f033a2d876ee2a31f878c4fdddeaefde4fd8', class: "relative", slot: "menu-trigger", "data-tooltip": "table-filter-menu" }, this.filters &&
            countFilterConditions(this.filters) > 0 && (h("at-badge", { key: '08dde07f852b1c2142ec8030ac9096e28c0aa647', class: "absolute top-[-8px] left-[-6px] z-50", type: "info", size: "sm", label: countFilterConditions(this.filters).toString() })), h("at-button", { key: 'd3f5991c5d9f35228b2ca769e15489fb433ef5df', slot: "tooltip-trigger", type: "secondaryOutline", class: "h-input", "data-name": "filter-menu-trigger" }, h("at-icon", { key: 'c2bf6890b2a6bc328e4ac6649e64eec32eb1af61', slot: "icon", name: "edit_filters" }))), h("at-tooltip", { key: 'ce2f11db058cdd2f653ba4525220c3cbafe95a98', "trigger-id": "table-filter-menu", position: "top" }, this.translations.ATUI.TABLE.FILTER_DATA), h("at-filter-form", { key: '509548efb3c942e6a615688ebefe9f7dccd740be', filter_config: this.filterConfig, active_filters: this.filters, onAtSearch: this.handleSearch, onAtCancel: this.handleCancel }))));
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
    translations;
    get el() { return getElement(this); }
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
    chipLabel(filter) {
        return filterConditionLabel(this.translations, filter);
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
            } }, h("button", { type: "button", class: "text-foreground/40 hover:text-foreground inline-flex h-16 w-16 cursor-pointer items-center justify-center border-0 bg-transparent p-0 transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out", "data-name": "filter-chip-remove", "aria-label": `Remove ${label}`, onClick: (event) => {
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
                items.push(h("span", { class: "text-muted text-xs font-semibold", "data-name": "filter-chip-operator" }, filterLogicalOperatorLabel(this.translations, group.logical_operator)));
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
    get el() { return getElement(this); }
    translations;
    async componentWillLoad() {
        this.translations = await fetchTranslations(this.el);
    }
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
        const labels = this.translations.ATUI.TABLE.PAGINATION;
        return (h(Host, { key: 'fc6513e73e7e6c242aebfa6d94a74808df7af5a0', class: "mt-8 flex items-center justify-end gap-8" }, h("span", { key: '5f14f01a5e15d98cddf93135d3796e9416b8a53d', "data-name": "pagination-page-size-label" }, labels.PAGE_SIZE), h("at-select", { key: '10883be86c3a2f8f85f9119eac8113771fb184b3', options: this.resolvedPageSizeOptions, value: String(this.page_size), clearable: false, onAtuiChange: (event) => this.atPageSizeChange.emit(parseInt(event.detail)) }), h("at-button", { key: 'c56d19d14631857d02f6d5e251c973b8027cffbc', "data-name": "pagination-first", "aria-label": labels.FIRST_PAGE, disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(1) }, h("at-icon", { key: '18dcf08f2e972e14ea8c06f2fe45f1a7afac85e8', slot: "icon", name: "first_page" })), h("at-button", { key: 'dc54eaa4a19ad703d3be3678870c6b19adfaac7b', "data-name": "pagination-previous", "aria-label": labels.PREVIOUS_PAGE, disabled: this.current_page === 1, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page - 1) }, h("at-icon", { key: 'e5af2491efc6cab0d3bcc58054073e47096f8377', slot: "icon", name: "chevron_left" })), h("span", { key: 'f3092408edd67a5358e1504942e0258624e1e06a', "data-name": "pagination-page-status" }, interpolate(labels.PAGE_OF, {
            current: this.current_page,
            total: this.num_pages,
        })), h("at-button", { key: 'ee814e520a2002798e2a8b0ffc3113522d5525b0', "data-name": "pagination-next", "aria-label": labels.NEXT_PAGE, disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.current_page + 1) }, h("at-icon", { key: '643128fab5483b3ace6b48a2e29887fcdd23be8b', slot: "icon", name: "chevron_right" })), h("at-button", { key: 'c1db4b9384751f8e8c442dc391f791cb64b93235', "data-name": "pagination-last", "aria-label": labels.LAST_PAGE, disabled: this.current_page === this.num_pages, type: "secondaryText", onAtuiClick: () => this.atChange.emit(this.num_pages) }, h("at-icon", { key: '7cd61fb364ca617c13380fba7a75eb76f2870aae', slot: "icon", name: "last_page" }))));
    }
};

export { AtControlGroup as at_control_group, AtReloadButton as at_reload_button, AtSearch as at_search, AtTableExportMenu as at_table_export_menu, AtTableFilterMenu as at_table_filter_menu, AtTableFilters as at_table_filters, AtTablePagination as at_table_pagination };
