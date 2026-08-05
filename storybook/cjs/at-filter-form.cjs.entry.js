'use strict';

var index = require('./index-D7uTOurQ.js');
var filterTree_util = require('./filter-tree.util-DfYwq3Yg.js');

const AtFilterForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atCancel = index.createEvent(this, "atCancel", 7);
        this.atSearch = index.createEvent(this, "atSearch", 7);
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
            filterTree_util.countFilterConditions(this.active_filters) > 0) {
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
        return { id: '', operator: 'is', value: '' };
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
        filterTree_util.flattenSingleChildAndRemoveEmptyGroups(this.root);
        filterTree_util.flattenSingleChildGroup(this.root);
        if (filterTree_util.countFilterConditions(this.root) === 0) {
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
        this.isFormValid = filterTree_util.everyConditionValid(this.root);
    }
    onCancel() {
        if (this.active_filters &&
            filterTree_util.countFilterConditions(this.active_filters) > 0) {
            this.root = JSON.parse(JSON.stringify(this.active_filters));
        }
        else {
            this.setDefaultFilters();
        }
        this.renderKey++;
        this.atCancel.emit();
    }
    attachLabels(node) {
        if (filterTree_util.isFilterGroup(node)) {
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
    renderCondition(group, filter, index$1) {
        return (index.h("div", { class: "mb-4 flex flex-row items-end gap-4", "data-name": "filter-condition" }, index.h("at-select", { placeholder: "Select Filter", value: filter.id, options: this.filter_ids, onAtuiChange: (event) => this.handleFilterIdChange(group, index$1, event) }), index.h("at-select", { key: `${index$1}-${this.renderKey}`, value: filter.operator, placeholder: "Select Operator", class: "w-[100px]", options: this.getOperatorOptions(filter.filter_options), onAtuiChange: (event) => this.handleOperatorChange(group, index$1, event) }), filter.filter_options ? (index.h("at-select", { class: "w-input-sm", key: `${index$1}-${this.renderKey}`, placeholder: "Select Value", value: filter.value, options: filter.filter_options, onAtuiChange: (event) => this.handleValueChange(group, index$1, event) })) : (index.h("at-input", { key: `${index$1}-${this.renderKey}`, placeholder: "Enter Value", value: filter.value, onAtuiChange: (event) => this.handleValueChange(group, index$1, event) })), index.h("at-button", { type: "secondaryOutline", disabled: filterTree_util.countFilterConditions(this.root) === 1, onAtuiClick: () => this.remove(group, index$1), "data-name": "filter-remove" }, index.h("at-icon", { slot: "icon", name: "delete" })), index.h("at-button", { type: "primaryText", onAtuiClick: () => this.addOr(group, index$1), "data-name": "filter-add-or" }, index.h("at-icon", { slot: "icon", name: "add" }), index.h("span", null, "OR")), index.h("at-button", { type: "primaryText", onAtuiClick: () => this.addAnd(group, index$1), "data-name": "filter-add-and" }, index.h("at-icon", { slot: "icon", name: "add" }), index.h("span", null, "AND"))));
    }
    renderGroup(group, isRoot = false, depth = 0) {
        const bgClass = depth % 2 === 1 ? 'bg-surface-foreground' : 'bg-surface-2';
        return (index.h("div", { class: isRoot
                ? 'flex flex-col'
                : `border-muted ${bgClass} ml-6 flex flex-col rounded-lg border p-4`, "data-name": isRoot ? undefined : 'filter-group' }, group.children.flatMap((child, index$1) => {
            const items = [];
            if (index$1 > 0) {
                items.push(index.h("div", { class: "text-muted mb-2 ml-1 text-xs font-semibold", "data-name": "filter-group-label" }, group.logical_operator));
            }
            items.push(filterTree_util.isFilterGroup(child)
                ? this.renderGroup(child, false, depth + 1)
                : this.renderCondition(group, child, index$1));
            return items;
        })));
    }
    render() {
        return (index.h(index.Host, { key: 'e60b604cbafadb2096ddfd3012738e86c4988c6b', class: "flex flex-col gap-4 p-8" }, this.renderGroup(this.root, true), index.h("div", { key: 'e91578bb228ff98113a824f7397ce2973cffe4d0', class: "flex justify-end gap-4" }, index.h("at-button", { key: '6da286d8980e5977b98ad55204ed7d4cb54b352d', label: "Cancel", type: "secondaryOutline", onAtuiClick: () => this.onCancel() }), index.h("at-button", { key: 'd5217f603eb8fa0e0b0cc945bd43084e317a583c', label: "Search", type: "primary", disabled: !this.isFormValid, onAtuiClick: () => this.onSearch() }))));
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

exports.at_filter_form = AtFilterForm;
