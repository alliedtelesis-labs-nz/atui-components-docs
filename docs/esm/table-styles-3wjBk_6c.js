/**
 * NEW AvailableCells also need to be added to getFrameworkComponents()
 * so that ag-grid can import and render the cell components
 */
var AvailableCells;
(function (AvailableCells) {
    AvailableCells["CHECKBOX_CELL"] = "AtuiCheckboxCell";
    AvailableCells["TEXT_CELL"] = "AtuiTextCell";
    AvailableCells["TEXT_STATUS_CELL"] = "AtuiTextStatusCell";
    AvailableCells["TEXT_WITH_BADGE_CELL"] = "AtuiTextBadgeCell";
    AvailableCells["TEXT_WITH_ICON_CELL"] = "AtuiTextIconCell";
    AvailableCells["TITLE_SUBTITLE_CELL"] = "AtuiTitleSubtitleCell";
    AvailableCells["TITLE_SUBTITLE_DATE_CELL"] = "AtuiTitleSubtitleDateCell";
    AvailableCells["EDIT_TEXT_CELL"] = "AtuiEditTextCell";
    AvailableCells["CHIP_LIST_CELL"] = "AtuiChipListCell";
    AvailableCells["TOGGLE_CELL"] = "AtuiToggleCell";
    AvailableCells["MULTI_BTN_CELL"] = "AtuiMultiBtnCell";
    AvailableCells["COLOR_STATUS_CELL"] = "AtuiColorStatusCell";
    AvailableCells["TEXT_WITH_IMAGE_CELL"] = "AtuiTextImageCell";
    AvailableCells["MENU_CELL"] = "AtuiMenuCell";
})(AvailableCells || (AvailableCells = {}));
var AvailableHeaders;
(function (AvailableHeaders) {
    AvailableHeaders["CHECKBOX_HEADER"] = "checkboxHeader";
    AvailableHeaders["ICON_HEADER"] = "iconHeader";
})(AvailableHeaders || (AvailableHeaders = {}));

// TODO: VCOMPLIB-1153 Support dark theme table colors.
// Type for colours that map to TableColorTokens (tokens have hex colour value)
var TableColor;
(function (TableColor) {
    TableColor["GREEN"] = "GREEN";
    TableColor["ORANGE"] = "ORANGE";
    TableColor["RED"] = "RED";
    TableColor["BLUE"] = "BLUE";
    TableColor["BASE_BLUE_100"] = "BASE_BLUE_100";
    TableColor["GREY"] = "GREY";
    TableColor["YELLOW"] = "YELLOW";
    TableColor["PRIMARY_BLUE"] = "PRIMARY_BLUE";
    TableColor["WHITE"] = "WHITE";
    TableColor["LIGHTER_GREY"] = "LIGHT_GREYER";
    TableColor["FONT_COLOUR"] = "FONT_COLOUR";
})(TableColor || (TableColor = {}));
const TableColorTokens = {
    RED: '#F44336', // TOKEN_STATE_ERROR_BASE
    PRIMARY_BLUE: '#066AFF'};
class TableStyles {
}
TableStyles.linkStyles = {
    'font-weight': '500',
    'color': TableColorTokens.PRIMARY_BLUE,
};
TableStyles.iconLinkStyles = Object.assign(Object.assign({}, TableStyles.linkStyles), { cursor: 'pointer' });
TableStyles.warningStyles = {
    'font-weight': '500',
    'color': TableColorTokens.RED,
};
TableStyles.infoIconStyle = {
    'cursor': 'pointer',
    'color': TableColorTokens.PRIMARY_BLUE,
    'font-size': '16px',
    'height': 'auto',
    'width': 'auto',
    'padding-left': '5px',
    'align-self': 'center',
};
TableStyles.actionBtnStyle = {
    color: TableColorTokens.PRIMARY_BLUE,
    background: '#FAFBFC',
    borderRadius: '2px',
    padding: '10px',
    cursor: 'pointer',
};

export { AvailableCells as A, AvailableHeaders as a };
//# sourceMappingURL=table-styles-3wjBk_6c.js.map

//# sourceMappingURL=table-styles-3wjBk_6c.js.map