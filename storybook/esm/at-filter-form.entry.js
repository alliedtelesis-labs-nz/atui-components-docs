import { r as registerInstance, c as createEvent, h, H as Host } from './index-DgqokAJi.js';
import { c as countFilterConditions, f as flattenSingleChildAndRemoveEmptyGroups, a as flattenSingleChildGroup, e as everyConditionValid, i as isFilterGroup } from './filter-tree.util-CYRBwQ7z.js';

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
    componentWillLoad() {
        this.onFilterConfigChange();
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
        return filterOptions
            ? this.operator_options.filter((option) => option.value !== 'contains')
            : this.operator_options;
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
    renderCondition(group, filter, index) {
        return (h("div", { class: "mb-4 flex flex-row items-end gap-4", "data-name": "filter-condition" }, h("at-select", { placeholder: "Select Filter", value: filter.id, options: this.filter_ids, onAtuiChange: (event) => this.handleFilterIdChange(group, index, event) }), h("at-select", { key: `${index}-${this.renderKey}`, value: filter.operator, placeholder: "Select Operator", class: "w-[100px]", options: this.getOperatorOptions(filter.filter_options), onAtuiChange: (event) => this.handleOperatorChange(group, index, event) }), filter.filter_options ? (h("at-select", { class: "w-input-sm", key: `${index}-${this.renderKey}`, placeholder: "Select Value", value: filter.value, options: filter.filter_options, onAtuiChange: (event) => this.handleValueChange(group, index, event) })) : (h("at-input", { key: `${index}-${this.renderKey}`, placeholder: "Enter Value", value: filter.value, onAtuiChange: (event) => this.handleValueChange(group, index, event) })), h("at-button", { type: "secondaryOutline", disabled: countFilterConditions(this.root) === 1, onAtuiClick: () => this.remove(group, index), "data-name": "filter-remove" }, h("at-icon", { slot: "icon", name: "delete" })), h("at-button", { type: "primaryText", onAtuiClick: () => this.addOr(group, index), "data-name": "filter-add-or" }, h("at-icon", { slot: "icon", name: "add" }), h("span", null, "OR")), h("at-button", { type: "primaryText", onAtuiClick: () => this.addAnd(group, index), "data-name": "filter-add-and" }, h("at-icon", { slot: "icon", name: "add" }), h("span", null, "AND"))));
    }
    renderGroup(group, isRoot = false, depth = 0) {
        const bgClass = depth % 2 === 1 ? 'bg-surface-foreground' : 'bg-surface-2';
        return (h("div", { class: isRoot
                ? 'flex flex-col'
                : `border-muted ${bgClass} ml-6 flex flex-col rounded-lg border p-4`, "data-name": isRoot ? undefined : 'filter-group' }, group.children.flatMap((child, index) => {
            const items = [];
            if (index > 0) {
                items.push(h("div", { class: "text-muted mb-2 ml-1 text-xs font-semibold", "data-name": "filter-group-label" }, group.logical_operator));
            }
            items.push(isFilterGroup(child)
                ? this.renderGroup(child, false, depth + 1)
                : this.renderCondition(group, child, index));
            return items;
        })));
    }
    render() {
        return (h(Host, { key: 'fd98efe0f4f1ea91c1e04de1cb29b98c387e99d6', class: "flex flex-col gap-4 p-8" }, this.renderGroup(this.root, true), h("div", { key: '772121094c99990828811ef6257e71988a43c046', class: "flex justify-end gap-4" }, h("at-button", { key: '7790bebf708e07cfbc1d733a0ae34930aa767393', label: "Cancel", type: "secondaryOutline", onAtuiClick: () => this.onCancel() }), h("at-button", { key: 'e13279fa32c23f2cc9dea2a726806e761811e2b1', label: "Search", type: "primary", disabled: !this.isFormValid, onAtuiClick: () => this.onSearch() }))));
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
