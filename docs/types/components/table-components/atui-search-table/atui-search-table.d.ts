import { ColDef, GridApi } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A searchable data table component that combines table functionality with integrated search capabilities. Provides real-time filtering and search result highlighting.
 * @slot actions - Used to place actions related to table content
 * @slot multi-select-actions - Used to place actions related to row selection
 */
export declare class AtuiSearchTable {
    /**
     * Table data passed to atui-table component.
     */
    table_data: {
        items: any[];
        total: number;
    };
    /**
     * Label for the table, appears above the search input.
     */
    label: string;
    /**
     * Label for the search input.
     */
    search_label: string;
    /**
     * Hint text displayed below the search label.
     */
    search_hint: string;
    /**
     * Info text displayed in the search info tooltip.
     */
    search_info_tooltip: string;
    /**
     * Column definitions passed to atui-table component.
     */
    col_defs: ColDef[];
    /**
     * Default page size of the table
     */
    page_size?: number;
    /**
     * If true the table dropdown filters will not be added
     */
    hide_dropdown_filters?: boolean;
    /**
     * If true the column manager will not be added
     */
    hide_column_manager?: boolean;
    /**
     * If true the table export menu will not be added
     */
    hide_export_menu?: boolean;
    /**
     * If true, disables pagination on the table and shows all data at once.
     * Useful for server-side pagination where you want to control pagination externally.
     */
    use_custom_pagination?: boolean;
    el: HTMLElement;
    translations: any;
    agGrid: GridApi;
    tableCreated: boolean;
    activeFilters: {
        [key: string]: string;
    };
    selectedFilters: {
        id: string;
        value: string;
    }[];
    menuSelectedIds: string[];
    searchValue: string;
    tableEl: HTMLAtuiTableElement;
    handleSelectedFiltersChange(newValue: {
        id: string;
        value: string;
    }[]): void;
    componentWillLoad(): Promise<void>;
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    private initGrid;
    private setupExternalFilters;
    handleColumnChange(event: CustomEvent): void;
    handleFilterChange(event: CustomEvent): void;
    private handleMenuFilterChange;
    private handleFilterListChange;
    private updateActiveFilters;
    handleSearchChange(event: CustomEvent): void;
    render(): any;
}
