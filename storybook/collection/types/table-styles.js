// TODO: VCOMPLIB-1153 Support dark theme table colors.
// Type for colours that map to TableColorTokens (tokens have hex colour value)
export var TableColor;
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
export const TableColorTokens = {
    GREEN: '#4CAF50', // TOKEN_STATE_SUCCESS_BASE
    ORANGE: '#FF8F00', // TOKEN_STATE_WARNING_DARK
    RED: '#F44336', // TOKEN_STATE_ERROR_BASE
    BLUE: '#2196F3', // TOKEN_STATE_INFO_BASE
    BASE_BLUE_100: '#BBDEFB', // TOKEN_COLOR_BASE_BLUE_100
    GREY: '#6c757d', // TOKEN_TEXT_MED
    YELLOW: '#FFC107', // TOKEN_STATE_WARNING_BASE
    PRIMARY_BLUE: '#066AFF', // TOKEN_COLOR_PRIMARY_BLUE
    WHITE: '#ffffff', // TOKEN_COLOR_BASE_WHITE
    FONT_COLOUR: '#6c757d', // TOKEN_TEXT_MED
    LIGHT_GREYER: '#f8f9fa', // TOKEN_COLOR_GRAY_LIGHTER
};
export class TableStyles {
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
//# sourceMappingURL=table-styles.js.map
