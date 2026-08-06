import { ColDef } from 'ag-grid-community';
/**
 * Returns the searchable text for a cell: the renderer's displayed text plus the raw value.
 *
 * The two are combined rather than substituted so this is strictly additive - a column that
 * was searchable by its underlying code or ISO date stays searchable by it, and becomes
 * searchable by what the user can actually see. Object and array values contribute nothing,
 * which is what stops them matching "[object Object]".
 */
export declare function resolveCellSearchText(colDef: ColDef, value: any, data: any): string;
