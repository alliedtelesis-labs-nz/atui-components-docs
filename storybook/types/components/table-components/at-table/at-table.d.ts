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
     * Initialises the grid automatically. On by default; turn it off when the
     * table is controlled by a parent component, which must then call
     * createGrid() itself.
     */
    can_auto_init: boolean;
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
    /**
     * Emits the fields of every column AG Grid currently has hidden, whenever that set
     * changes - including when a column is dragged off the grid, which no host control
     * goes through.
     */
    atColumnVisibilityChange: EventEmitter<string[]>;
    activeFilters: {
        [key: string]: string;
    };
    private agGrid;
    tableCreated: boolean;
    private hasDisplayedRows;
    handleTableDataChange(newData: {
        items: any[];
        total: number;
    }): Promise<void>;
    /**
     * `paginationPageSize` is only read when the grid is constructed, so without
     * this a `page_size` change after creation was silently ignored — the grid
     * kept whatever value was current at construction time.
     */
    handlePageSizeChange(newPageSize: number): void;
    /**
     * Makes each column searchable by the text its cell renderer displays rather than by the
     * raw field value. A consumer-supplied getQuickFilterText always takes precedence,
     * except on a column flagged `excludeFromGlobalSearch`, which contributes nothing -
     * the same precedence `at-search-table`'s own matcher applies.
     */
    private withSearchText;
    handleColDefsChange(newColDefs: ColDef[]): void;
    /**
     * Re-applies the column defs so ag-grid's own sorting is neutralised, or
     * restored, when the prop arrives after the grid has been created - the
     * same late-binding case as `use_custom_pagination`. Without this a
     * server-driven table sorts its current page client-side while the
     * consumer also re-sorts server-side.
     */
    handleUseCustomSortingChange(): void;
    /**
     * Stubs out each column's comparator when the consumer sorts externally,
     * leaving the defs untouched otherwise.
     */
    private resolveColumnDefs;
    /**
     * Keeps ag-grid's built-in paging panel in sync with the prop.
     *
     * The prop can arrive after the grid has already been created - e.g. a
     * consumer binding it a tick late, or `at-search-table` forwarding
     * `server_side_mode` that Angular applies after the element's first render.
     * `createGrid` reads the prop once, so without this the grid keeps the
     * paging panel it was built with and the consumer's own pagination footer
     * renders alongside it, giving two footers.
     */
    handleUseCustomPaginationChange(): void;
    /**
     * `paginationPageSizeSelector` is an initial-only ag-grid option, so it is
     * set once in `createGrid` rather than here.
     */
    private applyPaginationOptions;
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    private initGrid;
    private updateDisplayedRowsState;
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
