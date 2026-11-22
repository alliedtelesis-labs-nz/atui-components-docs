import { AtFilterLogicalOperator, AtIFilter } from '../types';
/**
 * Display text for a condition's operator. The stored value travels in the
 * filter tree a host reads back, so it is never translated itself. Operators a
 * host supplies beyond ATUI's own (`=`, `!=`) are symbols and show unchanged.
 */
export declare function filterOperatorLabel(translations: any, operator: string): string;
export declare function filterLogicalOperatorLabel(translations: any, operator: AtFilterLogicalOperator): string;
/**
 * One condition as a phrase. A template rather than concatenation because
 * Japanese puts the operator after the value.
 */
export declare function filterConditionLabel(translations: any, filter: AtIFilter): string;
