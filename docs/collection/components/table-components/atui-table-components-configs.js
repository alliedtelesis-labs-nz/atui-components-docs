import { AvailableCells, AvailableHeaders } from "../../types/table-cells";
import { AtuiCheckboxCellComponent } from "./cell-components/atui-checkbox-cell/atui-checkbox-cell";
import { AtuiTextBadgeCell } from "./cell-components/atui-text-badge-cell/atui-text-badge-cell";
import { AtuiTextCellComponent } from "./cell-components/atui-text-cell/atui-text-cell";
import { AtuiTextStatusCellComponent } from "./cell-components/atui-text-status-cell/atui-text-status-cell";
import { AtuiCheckboxHeaderComponent } from "./header-components/atui-checkbox-header/atui-checkbox-header";
import { AtuiTextIconCell } from "./cell-components/atui-text-icon-cell/atui-text-icon-cell";
import { AtuiTitleSubtitleDateCell } from "./cell-components/atui-title-subtitle-date-cell/atui-title-subtitle-date-cell";
import { AtuiTitleSubtitleCell } from "./cell-components/atui-title-subtitle-cell/atui-title-subtitle-cell";
import { AtuiEditTextCell } from "./cell-components/atui-edit-text-cell/atui-edit-text-cell";
import { AtuiChipListCell } from "./cell-components/atui-chip-list-cell/atui-chip-list-cell";
import { AtuiIconCell } from "./cell-components/atui-icon-cell/atui-icon-cell";
import { AtuiToggleCell } from "./cell-components/atui-toggle-cell/atui-toggle-cell";
import { AtuiMultiBtnCell } from "./cell-components/atui-multi-btn-cell/atui-multi-btn-cell";
import { AtuiColorStatusCell } from "./cell-components/atui-color-status-cell/atui-color-status-cell";
import { AtuiImageCell } from "./cell-components/atui-image-cell/atui-image-cell";
import { AtuiTextImageCell } from "./cell-components/atui-text-image-cell/atui-text-image-cell";
export class AtuiTableComponentsConfigs {
    static getFrameworkComponents() {
        return {
            [AvailableCells.TEXT_CELL]: AtuiTextCellComponent,
            [AvailableCells.TEXT_STATUS_CELL]: AtuiTextStatusCellComponent,
            [AvailableCells.TEXT_WITH_BADGE_CELL]: AtuiTextBadgeCell,
            [AvailableCells.TEXT_WITH_ICON_CELL]: AtuiTextIconCell,
            [AvailableCells.TITLE_SUBTITLE_CELL]: AtuiTitleSubtitleCell,
            [AvailableCells.TITLE_SUBTITLE_DATE_CELL]: AtuiTitleSubtitleDateCell,
            [AvailableCells.EDIT_TEXT_CELL]: AtuiEditTextCell,
            [AvailableCells.CHIP_LIST_CELL]: AtuiChipListCell,
            [AvailableCells.CHECKBOX_CELL]: AtuiCheckboxCellComponent,
            [AvailableHeaders.CHECKBOX_HEADER]: AtuiCheckboxHeaderComponent,
            [AvailableCells.ICON_CELL]: AtuiIconCell,
            [AvailableCells.TOGGLE_CELL]: AtuiToggleCell,
            [AvailableCells.MULTI_BTN_CELL]: AtuiMultiBtnCell,
            [AvailableCells.COLOR_STATUS_CELL]: AtuiColorStatusCell,
            [AvailableCells.TEXT_WITH_IMAGE_CELL]: AtuiTextImageCell,
            [AvailableCells.IMAGE_CELL]: AtuiImageCell,
        };
    }
}
AtuiTableComponentsConfigs.defaultPageSize = 10;
//# sourceMappingURL=atui-table-components-configs.js.map
