import { i as interpolate } from './translation-Bmdl6o2j.js';

const OPERATOR_KEYS = {
    'is': 'IS',
    'is not': 'IS_NOT',
    'contains': 'CONTAINS',
};
/**
 * Display text for a condition's operator. The stored value travels in the
 * filter tree a host reads back, so it is never translated itself. Operators a
 * host supplies beyond ATUI's own (`=`, `!=`) are symbols and show unchanged.
 */
function filterOperatorLabel(translations, operator) {
    const key = OPERATOR_KEYS[operator];
    return ((key && translations?.ATUI?.TABLE?.FILTER?.OPERATORS?.[key]) ?? operator);
}
function filterLogicalOperatorLabel(translations, operator) {
    const key = operator === 'Or' ? 'OR' : 'AND';
    return translations?.ATUI?.TABLE?.FILTER?.[key] ?? operator.toUpperCase();
}
/**
 * One condition as a phrase. A template rather than concatenation because
 * Japanese puts the operator after the value.
 */
function filterConditionLabel(translations, filter) {
    const template = translations?.ATUI?.TABLE?.FILTER?.CONDITION ??
        '{field} {operator} {value}';
    return interpolate(template, {
        field: filter.label ?? filter.id,
        operator: filter.operator
            ? filterOperatorLabel(translations, filter.operator)
            : '',
        value: filter.value,
    })
        .replace(/\s+/g, ' ')
        .trim();
}

export { filterLogicalOperatorLabel as a, filterConditionLabel as b, filterOperatorLabel as f };
