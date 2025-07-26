import { AtuiCheckboxCellComponent } from './cell-components/atui-checkbox-cell/atui-checkbox-cell';
import { AtuiTextBadgeCell } from './cell-components/atui-text-badge-cell/atui-text-badge-cell';
import { AtuiTextCellComponent } from './cell-components/atui-text-cell/atui-text-cell';
import { AtuiTextStatusCellComponent } from './cell-components/atui-text-status-cell/atui-text-status-cell';
import { AtuiCheckboxHeaderComponent } from './header-components/atui-checkbox-header/atui-checkbox-header';
import { AtuiTextIconCell } from './cell-components/atui-text-icon-cell/atui-text-icon-cell';
import { AtuiTitleSubtitleDateCell } from './cell-components/atui-title-subtitle-date-cell/atui-title-subtitle-date-cell';
import { AtuiTitleSubtitleCell } from './cell-components/atui-title-subtitle-cell/atui-title-subtitle-cell';
import { AtuiEditTextCell } from './cell-components/atui-edit-text-cell/atui-edit-text-cell';
import { AtuiChipListCell } from './cell-components/atui-chip-list-cell/atui-chip-list-cell';
import { AtuiToggleCell } from './cell-components/atui-toggle-cell/atui-toggle-cell';
import { AtuiMultiBtnCell } from './cell-components/atui-multi-btn-cell/atui-multi-btn-cell';
import { AtuiColorStatusCell } from './cell-components/atui-color-status-cell/atui-color-status-cell';
import { AtuiTextImageCell } from './cell-components/atui-text-image-cell/atui-text-image-cell';
import { AtuiMenuCell } from './cell-components/atui-menu-cell/atui-menu-cell';
export declare class AtuiTableComponentsConfigs {
    static readonly defaultPageSize = 10;
    static getFrameworkComponents(): {
        AtuiTextCell: typeof AtuiTextCellComponent;
        AtuiTextStatusCell: typeof AtuiTextStatusCellComponent;
        AtuiTextBadgeCell: typeof AtuiTextBadgeCell;
        AtuiTextIconCell: typeof AtuiTextIconCell;
        AtuiTitleSubtitleCell: typeof AtuiTitleSubtitleCell;
        AtuiTitleSubtitleDateCell: typeof AtuiTitleSubtitleDateCell;
        AtuiEditTextCell: typeof AtuiEditTextCell;
        AtuiChipListCell: typeof AtuiChipListCell;
        AtuiCheckboxCell: typeof AtuiCheckboxCellComponent;
        checkboxHeader: typeof AtuiCheckboxHeaderComponent;
        AtuiToggleCell: typeof AtuiToggleCell;
        AtuiMultiBtnCell: typeof AtuiMultiBtnCell;
        AtuiColorStatusCell: typeof AtuiColorStatusCell;
        AtuiTextImageCell: typeof AtuiTextImageCell;
        AtuiMenuCell: typeof AtuiMenuCell;
    };
}
