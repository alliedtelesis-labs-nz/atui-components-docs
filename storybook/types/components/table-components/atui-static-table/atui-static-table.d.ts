import { ColDef, GridApi } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A static data table component for displaying read-only tabular data without interactive features. Ideal for simple data presentation and reports.
 */
export declare class AtuiStaticTable {
    /**
     * Data to go into the table
     */
    table_data: {
        items: any[];
        total: number;
    };
    /**
     * Column definitions for the table
     */
    col_defs: ColDef[];
    /**
     * Max number of items per page
     */
    page_size: number;
    /**
     * If true the column manager will not be added
     */
    hide_column_manager: boolean;
    /**
     * If true, disables pagination on the table and shows all data at once.
     * Useful for server-side pagination where you want to control pagination externally.
     */
    use_custom_pagination?: boolean;
    agGrid: GridApi;
    tableEl: HTMLAtuiTableElement;
    tableCreated: boolean;
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    render(): any;
}
