/**
 * NEW AtAvailableCells also need to be added to getFrameworkComponents()
 * so that ag-grid can import and render the cell components
 */
export var AvailableCells;
(function (AvailableCells) {
    AvailableCells["CHECKBOX_CELL"] = "AtCheckboxCell";
    AvailableCells["TEXT_CELL"] = "AtTextCell";
    AvailableCells["TEXT_STATUS_CELL"] = "AtTextStatusCell";
    AvailableCells["TEXT_WITH_BADGE_CELL"] = "AtTextBadgeCell";
    AvailableCells["TEXT_WITH_ICON_CELL"] = "AtTextIconCell";
    AvailableCells["TITLE_SUBTITLE_CELL"] = "AtTitleSubtitleCell";
    AvailableCells["TITLE_SUBTITLE_DATE_CELL"] = "AtTitleSubtitleDateCell";
    AvailableCells["EDIT_TEXT_CELL"] = "AtEditTextCell";
    AvailableCells["CHIP_LIST_CELL"] = "AtChipListCell";
    AvailableCells["TOGGLE_CELL"] = "AtToggleCell";
    AvailableCells["MULTI_BTN_CELL"] = "AtMultiBtnCell";
    AvailableCells["COLOR_STATUS_CELL"] = "AtColorStatusCell";
    AvailableCells["TEXT_WITH_IMAGE_CELL"] = "AtTextImageCell";
    AvailableCells["MENU_CELL"] = "AtMenuCell";
})(AvailableCells || (AvailableCells = {}));
export var AvailableHeaders;
(function (AvailableHeaders) {
    AvailableHeaders["CHECKBOX_HEADER"] = "checkboxHeader";
    AvailableHeaders["ICON_HEADER"] = "iconHeader";
})(AvailableHeaders || (AvailableHeaders = {}));
