import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DTcI15Wk.js';
import { c as countFilterConditions, f as flattenSingleChildAndRemoveEmptyGroups, a as flattenSingleChildGroup, e as everyConditionValid, i as isFilterGroup } from './filter-tree.util-CYRBwQ7z.js';
import { f as filterOperatorLabel, a as filterLogicalOperatorLabel } from './filter-labels.util-C5HKVTiD.js';
import { f as fetchTranslations } from './translation-DNQTZ_VC.js';

const AtFilterForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atCancel = createEvent(this, "atCancel", 7);
        this.atSearch = createEvent(this, "atSearch", 7);
    }
    /**
     * Configuration for the available filters
     */
    filter_config = [];
    /**
     * Currently active filters to initialize the form with
     */
    active_filters;
    filter_ids = [];
    operator_options = [
        { value: 'is' },
        { value: 'is not' },
        { value: 'contains' },
    ];
    translations;
    get el() { return getElement(this); }
    root = {
        id: 'root',
        logical_operator: 'And',
        children: [],
    };
    isFormValid = false;
    /**
     * Used to force re-rendering of the component when filters change
     */
    renderKey = 0;
    nextGroupId = 1;
    /**
     * Event emitted when the user cancels a filter search
     */
    atCancel;
    /**
     * Event emitted with the current filters when the user initiates a filter search
     */
    atSearch;
    async componentWillLoad() {
        this.onFilterConfigChange();
        this.translations = await fetchTranslations(this.el);
    }
    onFilterConfigChange() {
        this.filter_ids = this.filter_config.map((config) => ({
            value: config.id,
            label: config.label || config.id,
        }));
        if (this.active_filters &&
            countFilterConditions(this.active_filters) > 0) {
            this.root = JSON.parse(JSON.stringify(this.active_filters));
        }
        else {
            this.setDefaultFilters();
        }
        this.validateFilters();
    }
    setDefaultFilters() {
        if (!this.filter_ids.length) {
            return;
        }
        this.root = {
            id: 'root',
            logical_operator: 'And',
            children: [this.createFilter()],
        };
    }
    createFilter() {
        const defaultConfig = this.filter_config[0];
        return {
            id: defaultConfig?.id ?? '',
            operator: defaultConfig?.filter_options ? 'is' : 'contains',
            value: '',
            ...(defaultConfig?.filter_options && {
                filter_options: defaultConfig.filter_options,
            }),
        };
    }
    refresh() {
        this.root = { ...this.root };
        this.validateFilters();
    }
    addSibling(parent, index, operator) {
        if (parent.children.length === 1) {
            parent.logical_operator = operator;
            parent.children.push(this.createFilter());
        }
        else if (parent.logical_operator === operator) {
            parent.children.push(this.createFilter());
        }
        else {
            const existing = parent.children[index];
            parent.children[index] = {
                id: `group-${this.nextGroupId++}`,
                logical_operator: operator,
                children: [existing, this.createFilter()],
            };
        }
        this.refresh();
    }
    addOr(parent, index) {
        this.addSibling(parent, index, 'Or');
    }
    addAnd(parent, index) {
        this.addSibling(parent, index, 'And');
    }
    remove(parent, index) {
        parent.children.splice(index, 1);
        flattenSingleChildAndRemoveEmptyGroups(this.root);
        flattenSingleChildGroup(this.root);
        if (countFilterConditions(this.root) === 0) {
            this.setDefaultFilters();
        }
        else {
            this.refresh();
        }
    }
    getOperatorOptions(filterOptions) {
        const operators = filterOptions
            ? this.operator_options.filter((option) => option.value !== 'contains')
            : this.operator_options;
        return operators.map((option) => ({
            ...option,
            label: filterOperatorLabel(this.translations, option.value),
        }));
    }
    handleFilterIdChange(group, index, event) {
        const filter = group.children[index];
        const selectedFilter = this.filter_config.find((config) => config.id === event.detail);
        const validOperators = this.getOperatorOptions(selectedFilter?.filter_options).map((option) => option.value);
        const currentOperator = filter.operator;
        group.children[index] = {
            ...filter,
            id: event.detail,
            value: '',
            operator: validOperators.includes(currentOperator)
                ? currentOperator
                : validOperators[0],
            filter_options: selectedFilter?.filter_options,
        };
        this.refresh();
    }
    handleOperatorChange(group, index, event) {
        group.children[index].operator = event.detail;
        this.refresh();
    }
    handleValueChange(group, index, event) {
        group.children[index].value = event.detail;
        this.refresh();
    }
    validateFilters() {
        this.isFormValid = everyConditionValid(this.root);
    }
    onCancel() {
        if (this.active_filters &&
            countFilterConditions(this.active_filters) > 0) {
            this.root = JSON.parse(JSON.stringify(this.active_filters));
        }
        else {
            this.setDefaultFilters();
        }
        this.renderKey++;
        this.atCancel.emit();
    }
    attachLabels(node) {
        if (isFilterGroup(node)) {
            return {
                ...node,
                children: node.children.map((child) => this.attachLabels(child)),
            };
        }
        const label = this.filter_ids.find((id) => id.value === node.id)?.label;
        return { ...node, ...(label && { label }) };
    }
    onSearch() {
        const result = this.attachLabels(this.root);
        this.atSearch.emit(result);
    }
    get filterText() {
        return this.translations?.ATUI?.TABLE?.FILTER ?? {};
    }
    renderCondition(group, filter, index) {
        return (h("div", { class: "mb-4 flex flex-row items-end gap-4", "data-name": "filter-condition" }, h("at-select", { placeholder: this.filterText.SELECT_FILTER, value: filter.id, options: this.filter_ids, onAtuiChange: (event) => this.handleFilterIdChange(group, index, event) }), h("at-select", { key: `${index}-${this.renderKey}`, value: filter.operator, placeholder: this.filterText.SELECT_OPERATOR, class: "w-[100px]", options: this.getOperatorOptions(filter.filter_options), onAtuiChange: (event) => this.handleOperatorChange(group, index, event) }), filter.filter_options ? (h("at-select", { class: "w-input-sm", key: `${index}-${this.renderKey}`, placeholder: this.filterText.SELECT_VALUE, value: filter.value, options: filter.filter_options, onAtuiChange: (event) => this.handleValueChange(group, index, event) })) : (h("at-input", { key: `${index}-${this.renderKey}`, placeholder: this.filterText.ENTER_VALUE, value: filter.value, onAtuiChange: (event) => this.handleValueChange(group, index, event) })), h("at-button", { type: "secondaryOutline", disabled: countFilterConditions(this.root) === 1, onAtuiClick: () => this.remove(group, index), "data-name": "filter-remove" }, h("at-icon", { slot: "icon", name: "delete" })), h("at-button", { type: "primaryText", onAtuiClick: () => this.addOr(group, index), "data-name": "filter-add-or" }, h("at-icon", { slot: "icon", name: "add" }), h("span", null, filterLogicalOperatorLabel(this.translations, 'Or'))), h("at-button", { type: "primaryText", onAtuiClick: () => this.addAnd(group, index), "data-name": "filter-add-and" }, h("at-icon", { slot: "icon", name: "add" }), h("span", null, filterLogicalOperatorLabel(this.translations, 'And')))));
    }
    renderGroup(group, isRoot = false, depth = 0) {
        const bgClass = depth % 2 === 1 ? 'bg-surface-foreground' : 'bg-surface-2';
        return (h("div", { class: isRoot
                ? 'flex flex-col'
                : `border-muted ${bgClass} ml-6 flex flex-col rounded-lg border p-4`, "data-name": isRoot ? undefined : 'filter-group' }, group.children.flatMap((child, index) => {
            const items = [];
            if (index > 0) {
                items.push(h("div", { class: "text-muted mb-2 ml-1 text-xs font-semibold", "data-name": "filter-group-label" }, filterLogicalOperatorLabel(this.translations, group.logical_operator)));
            }
            items.push(isFilterGroup(child)
                ? this.renderGroup(child, false, depth + 1)
                : this.renderCondition(group, child, index));
            return items;
        })));
    }
    render() {
        return (h(Host, { key: '8475f1f73b506fca8f833b2c82af2a00c5b48dc2', class: "flex flex-col gap-4 p-8" }, this.renderGroup(this.root, true), h("div", { key: 'd76316b7b065262104b16cd00aad27aaa0e1a46a', class: "flex justify-end gap-4" }, h("at-button", { key: '45fc0fa2d8a94aedbdcc63fab7829da21b803064', label: this.translations?.ATUI?.CANCEL, type: "secondaryOutline", onAtuiClick: () => this.onCancel() }), h("at-button", { key: '896dfb6aa4b08136b52f3a3a0637465513aa3ae2', label: this.translations?.ATUI?.SEARCH, type: "primary", disabled: !this.isFormValid, onAtuiClick: () => this.onSearch() }))));
    }
    static get watchers() { return {
        "filter_config": [{
                "onFilterConfigChange": 0
            }],
        "active_filters": [{
                "onFilterConfigChange": 0
            }]
    }; }
};

export { AtFilterForm as at_filter_form };
