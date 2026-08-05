'use strict';

/** Checks whether a filter node is a group containing children. */
function isFilterGroup(node) {
    return Array.isArray(node.children);
}
/** flattens the filter tree into an array of conditions. */
function flattenFilterConditions(node) {
    if (!isFilterGroup(node)) {
        return [node];
    }
    return node.children.flatMap((child) => flattenFilterConditions(child));
}
/** Counts how many conditions exist anywhere in the tree. */
function countFilterConditions(node) {
    return flattenFilterConditions(node).length;
}
/** Checks if every condition in the tree has both an `id` and a `value` set. */
function everyConditionValid(node) {
    if (!isFilterGroup(node)) {
        return !!node.id && !!node.value;
    }
    return node.children.every((child) => everyConditionValid(child));
}
/**
 * Removes empty subgroups and flattens subgroups that has only one child.
 */
function flattenSingleChildAndRemoveEmptyGroups(group) {
    for (let i = group.children.length - 1; i >= 0; i--) {
        const child = group.children[i];
        if (isFilterGroup(child)) {
            flattenSingleChildAndRemoveEmptyGroups(child);
            if (child.children.length === 1) {
                group.children[i] = child.children[0];
            }
            else if (child.children.length === 0) {
                group.children.splice(i, 1);
            }
        }
    }
}
/**
 * Removes an unnecessary nested group when a group has only one child group.
 *
 * This is mainly used for the root group, as nested groups are already
 * flattened by `flattenSingleChildAndRemoveEmptyGroups()`.
 */
function flattenSingleChildGroup(group) {
    while (group.children.length === 1 && isFilterGroup(group.children[0])) {
        const onlyChild = group.children[0];
        group.logical_operator = onlyChild.logical_operator;
        group.children = onlyChild.children;
    }
}
/**
 * Removes a condition from the filter tree and simplifies the remaining group structure
 * by removing empty groups and flattening unnecessary nesting.
 */
function removeFilterCondition(root, condition) {
    const removeFrom = (group) => {
        for (let i = 0; i < group.children.length; i++) {
            const child = group.children[i];
            if (child === condition) {
                group.children.splice(i, 1);
                return true;
            }
            if (isFilterGroup(child) && removeFrom(child)) {
                return true;
            }
        }
        return false;
    };
    removeFrom(root);
    flattenSingleChildAndRemoveEmptyGroups(root);
    flattenSingleChildGroup(root);
}
/**
 * Checks whether a row satisfies a filter group by evaluating its child filters
 * and applying the group's logical operator ('And' | 'Or').
 */
function rowMatchesFilterGroup(group, getFieldValue) {
    const results = group.children.map((child) => isFilterGroup(child)
        ? rowMatchesFilterGroup(child, getFieldValue)
        : rowMatchesFilterCondition(child, getFieldValue));
    return group.logical_operator === 'Or'
        ? results.some(Boolean)
        : results.every(Boolean);
}
/**
 * Checks whether a row matches a single condition, using its operator
 * ('is' | 'is not' | 'contains'). A condition with no value always matches.
 */
function rowMatchesFilterCondition(filter, getFieldValue) {
    if (!filter.value) {
        return true;
    }
    const value = String(getFieldValue(filter.id) ?? '').toLowerCase();
    const filterValue = String(filter.value).toLowerCase();
    if (filter.operator === 'is') {
        return value === filterValue;
    }
    if (filter.operator === 'is not') {
        return value !== filterValue;
    }
    return value.includes(filterValue);
}

exports.countFilterConditions = countFilterConditions;
exports.everyConditionValid = everyConditionValid;
exports.flattenFilterConditions = flattenFilterConditions;
exports.flattenSingleChildAndRemoveEmptyGroups = flattenSingleChildAndRemoveEmptyGroups;
exports.flattenSingleChildGroup = flattenSingleChildGroup;
exports.isFilterGroup = isFilterGroup;
exports.removeFilterCondition = removeFilterCondition;
exports.rowMatchesFilterGroup = rowMatchesFilterGroup;
