/** tableColumnTypes: an object for generic column types that can be re-used throughout
 * the table implementations. If you find you're reusing the same (multiple) settings,
 * consider making a type for that here. */
export const tableColumnTypes = {
    disableSort: {
        suppressHeaderMenuButton: true,
        sortable: false,
    },
};
// Use these for generic column fields & header translation keys (e.g. 'DELETE')
export var ColumnHeader;
(function (ColumnHeader) {
    ColumnHeader["DELETE"] = "DELETE";
    ColumnHeader["ACTION"] = "ACTION";
})(ColumnHeader || (ColumnHeader = {}));
export var ColumnField;
(function (ColumnField) {
    ColumnField["DELETE"] = "delete";
    ColumnField["ACTION"] = "action";
})(ColumnField || (ColumnField = {}));
