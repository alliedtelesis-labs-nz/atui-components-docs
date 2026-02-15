import { ITableColumnDef } from '../models/searchTableModel';
/** tableColumnTypes: an object for generic column types that can be re-used throughout
 * the table implementations. If you find you're reusing the same (multiple) settings,
 * consider making a type for that here. */
export declare const tableColumnTypes: {
    [key: string]: ITableColumnDef;
};
export declare enum ColumnHeader {
    DELETE = "DELETE",
    ACTION = "ACTION"
}
export declare enum ColumnField {
    DELETE = "delete",
    ACTION = "action"
}
export interface AtIColumnCreatorProperties extends ITableColumnDef {
    headerKey: string;
}
