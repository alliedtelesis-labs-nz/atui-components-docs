import { AtIFilter, AtIFilterGroup } from '../types/filter';
/** Checks whether a filter node is a group containing children. */
export declare function isFilterGroup(node: AtIFilter | AtIFilterGroup): node is AtIFilterGroup;
/** flattens the filter tree into an array of conditions. */
export declare function flattenFilterConditions(node: AtIFilter | AtIFilterGroup): AtIFilter[];
/** Counts how many conditions exist anywhere in the tree. */
export declare function countFilterConditions(node: AtIFilter | AtIFilterGroup): number;
/** Checks if every condition in the tree has both an `id` and a `value` set. */
export declare function everyConditionValid(node: AtIFilter | AtIFilterGroup): boolean;
/**
 * Removes empty subgroups and flattens subgroups that has only one child.
 */
export declare function flattenSingleChildAndRemoveEmptyGroups(group: AtIFilterGroup): void;
/**
 * Removes an unnecessary nested group when a group has only one child group.
 *
 * This is mainly used for the root group, as nested groups are already
 * flattened by `flattenSingleChildAndRemoveEmptyGroups()`.
 */
export declare function flattenSingleChildGroup(group: AtIFilterGroup): void;
/**
 * Removes a condition from the filter tree and simplifies the remaining group structure
 * by removing empty groups and flattening unnecessary nesting.
 */
export declare function removeFilterCondition(root: AtIFilterGroup, condition: AtIFilter): void;
/**
 * Checks whether a row satisfies a filter group by evaluating its child filters
 * and applying the group's logical operator ('And' | 'Or').
 */
export declare function rowMatchesFilterGroup(group: AtIFilterGroup, getFieldValue: (fieldId: string) => unknown): boolean;
