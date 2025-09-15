import { EventEmitter } from '../../../stencil-public-runtime';
import { ColDef, GridApi } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A comprehensive data table component with sorting, filtering, pagination, and selection capabilities. Features responsive design, customizable columns, and accessibility support.
 */
export declare class AtTableComponent {
    /**
     * Data provided to the table
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
     * Default page size of the table if pagination is activated
     */
    page_size: number;
    /**
     * Disables the default sorting provided by agGrid.
     */
    use_custom_sorting: boolean;
    /**
     * Disables the default pagination provided by agGrid.
     * When using custom pagination, the default sorting
     * provided by ag grid will not work correctly.
     */
    use_custom_pagination: boolean;
    /**
     * If true, disables automatic grid initialization.
     * When disabled, you must manually call createGrid().
     * Used when the table is controlled by a parent component.
     */
    disable_auto_init: boolean;
    /**
     * If true, enables automatic column resizing to fit available space.
     * Columns will be sized proportionally based on their content and constraints. Fixed widths in column defs will be respected.
     */
    auto_size_columns: boolean;
    /**
     * The AG Grid API
     */
    ag_grid: GridApi;
    el: HTMLAtTableElement;
    private resizeListener;
    /**
     * Emits an event when a column's sorting state changes.
     * Used to perform sorting outside of agGrid, when use_custom_sorting is set.
     * Data in the table should be updated using the agGrid api:
     * ```agGrid.setGridOption("rowData", yourNewData)```
     */
    atSortChange: EventEmitter<{
        colId: string;
        sortDirection: 'asc' | 'desc' | null;
    }>;
    activeFilters: {
        [key: string]: string;
    };
    private agGrid;
    tableCreated: boolean;
    handleTableDataChange(newData: {
        items: any[];
        total: number;
    }): Promise<void>;
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    private initGrid;
    /**
     * Method used to initialize the table.
     *
     * @returns The [AG Grid API](https://www.ag-grid.com/javascript-data-grid/grid-api/)
     */
    createGrid(): Promise<GridApi>;
    /**
     * Gets the AG Grid API instance
     *
     * @returns The AG Grid API
     */
    getGridApi(): Promise<GridApi>;
    disconnectedCallback(): void;
    render(): any;
}
