// Grid Options
export const defaultGridOptions = {
    enableCellTextSelection: true,
    suppressColumnVirtualisation: false,
    rowModelType: 'infinite',
    defaultColDef: {
        sortable: true,
        resizable: true,
        filter: false,
    },
    pagination: true,
    maxBlocksInCache: 1,
    suppressRowClickSelection: true,
    headerHeight: 48,
    // replace default ag-grid icons:
    icons: {
        // column header items
        sortAscending: '<i class="material-icons icon--large">arrow_drop_up</i>',
        sortDescending: '<i class="material-icons icon--large">arrow_drop_down</i>',
        // icon for moving columns out of the grid
        columnMoveHide: '<i class="material-icons icon--large">delete</i>',
        // paging toolbar
        first: '<i class="material-icons icon--large">first_page</i>',
        previous: '<i class="material-icons icon--large">chevron_left</i>',
        next: '<i class="material-icons icon--large">chevron_right</i>',
        last: '<i class="material-icons icon--large">last_page</i>',
    },
};
//# sourceMappingURL=searchTableModel.js.map
