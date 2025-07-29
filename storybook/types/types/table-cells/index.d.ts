import { ICellRendererParams } from 'ag-grid-community';
import { TableColor } from '../table-styles';
import { CSSProperties } from '../styles';
/**
 * NEW AvailableCells also need to be added to getFrameworkComponents()
 * so that ag-grid can import and render the cell components
 */
export declare enum AvailableCells {
    CHECKBOX_CELL = "AtuiCheckboxCell",
    TEXT_CELL = "AtuiTextCell",
    TEXT_STATUS_CELL = "AtuiTextStatusCell",
    TEXT_WITH_BADGE_CELL = "AtuiTextBadgeCell",
    TEXT_WITH_ICON_CELL = "AtuiTextIconCell",
    TITLE_SUBTITLE_CELL = "AtuiTitleSubtitleCell",
    TITLE_SUBTITLE_DATE_CELL = "AtuiTitleSubtitleDateCell",
    EDIT_TEXT_CELL = "AtuiEditTextCell",
    CHIP_LIST_CELL = "AtuiChipListCell",
    TOGGLE_CELL = "AtuiToggleCell",
    MULTI_BTN_CELL = "AtuiMultiBtnCell",
    COLOR_STATUS_CELL = "AtuiColorStatusCell",
    TEXT_WITH_IMAGE_CELL = "AtuiTextImageCell",
    MENU_CELL = "AtuiMenuCell"
}
export declare enum AvailableHeaders {
    CHECKBOX_HEADER = "checkboxHeader",
    ICON_HEADER = "iconHeader"
}
export interface DefaultInitCellParams extends ICellRendererParams {
    writePermission?: boolean;
}
/** Icon cell parameters */
export interface IIconCellParams extends DefaultInitCellParams {
    value: IIconCell[];
}
export interface IIconCell extends ITooltipCell, IClickCell {
    iconName: string;
    iconStyles?: CSSProperties;
    iconClass?: string;
    disabled?: boolean;
    tooltipText?: string;
}
/** Icon cell with text parameters */
export interface IconTextCellParams extends DefaultInitCellParams {
    value: ITextWithIconCell;
    containerStyles?: CSSProperties;
}
export interface ITextWithIconCell extends IClickCell {
    icons: IIconCell[];
    text: ITextCell;
    reverseLayout?: boolean;
}
export interface ITextCell {
    textValue: string;
    textStyles?: CSSProperties;
    shouldNotTranslate?: boolean;
}
/**
 * Cells that provide extra abilities.
 * Useful to extend to provide standard cells with extra functionality,
 * e.g. the ability to be clicked or show a tooltip
 */
export interface ITooltipCell {
    tooltipClass?: string;
    generateTooltip?: (params: ICellRendererParams) => HTMLElement | string;
}
export interface IClickCell {
    click?: (params: ICellRendererParams) => any;
    iconClick?: (params: ICellRendererParams) => any;
}
export interface ColorCell {
    mapValueToColor: (value: any) => {
        backgroundColor: TableColor;
        fontColor: TableColor;
    };
}
export interface ITitleSubtitle {
    title: string;
    subtitle: string;
}
export interface ITextCellParams extends IClickCell {
    size?: string;
    color?: string;
    textStyles?: CSSProperties | ((params: ICellRendererParams) => CSSProperties);
    containerStyles?: CSSProperties;
    click?: (params: ICellRendererParams) => void;
    textClass?: string;
    rowIndex: any;
    textTransform?: (data: any, value: any) => string;
    useIconHeaderTooltip?: boolean;
    shouldNotTranslate?: boolean;
}
export interface StateInfo {
    text: string;
    status: string;
}
export interface UIStates {
    uiState: StateInfo;
    engineUiState: StateInfo;
    role: string;
}
export interface AppFullWidthCellData {
    type: string;
    counters: number;
    fullWidth: boolean;
    description: string;
    provider?: string;
    warning?: string;
    uiStates?: UIStates;
}
export interface InitTextCellParams extends ITooltipCell, ITextCellParams, ICellRendererParams {
}
export type GetImageSourceFunction = (data: any) => string;
export type PopoverClickedFunction = (allData: any, itemClicked: any) => any;
