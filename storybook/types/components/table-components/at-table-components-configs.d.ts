import { AtCheckboxCellComponent } from './cell-components/at-checkbox-cell/at-checkbox-cell';
import { AtTextBadgeCell } from './cell-components/at-text-badge-cell/at-text-badge-cell';
import { AtTextCellComponent } from './cell-components/at-text-cell/at-text-cell';
import { AtTextStatusCellComponent } from './cell-components/at-text-status-cell/at-text-status-cell';
import { AtCheckboxHeaderComponent } from './header-components/at-checkbox-header/at-checkbox-header';
import { AtTextIconCell } from './cell-components/at-text-icon-cell/at-text-icon-cell';
import { AtTitleSubtitleDateCell } from './cell-components/at-title-subtitle-date-cell/at-title-subtitle-date-cell';
import { AtTitleSubtitleCell } from './cell-components/at-title-subtitle-cell/at-title-subtitle-cell';
import { AtEditTextCell } from './cell-components/at-edit-text-cell/at-edit-text-cell';
import { AtChipListCell } from './cell-components/at-chip-list-cell/at-chip-list-cell';
import { AtToggleCell } from './cell-components/at-toggle-cell/at-toggle-cell';
import { AtMultiBtnCell } from './cell-components/at-multi-btn-cell/at-multi-btn-cell';
import { AtColorStatusCell } from './cell-components/at-color-status-cell/at-color-status-cell';
import { AtTextImageCell } from './cell-components/at-text-image-cell/at-text-image-cell';
import { AtMenuCell } from './cell-components/at-menu-cell/at-menu-cell';
export declare class AtTableComponentsConfigs {
    static readonly defaultPageSize = 10;
    private static cellComponentsLoaded;
    /**
     * Ensures all table cell components are registered as custom elements.
     * This is crucial for production builds where tree-shaking might remove
     * seemingly unused components.
     */
    private static ensureCellComponentsLoaded;
    /**
     * Returns the framework components for AG Grid.
     * Automatically ensures all cell components are loaded before returning.
     */
    static getFrameworkComponents(): {
        AtTextCell: typeof AtTextCellComponent;
        AtTextStatusCell: typeof AtTextStatusCellComponent;
        AtTextBadgeCell: typeof AtTextBadgeCell;
        AtTextIconCell: typeof AtTextIconCell;
        AtTitleSubtitleCell: typeof AtTitleSubtitleCell;
        AtTitleSubtitleDateCell: typeof AtTitleSubtitleDateCell;
        AtEditTextCell: typeof AtEditTextCell;
        AtChipListCell: typeof AtChipListCell;
        AtCheckboxCell: typeof AtCheckboxCellComponent;
        checkboxHeader: typeof AtCheckboxHeaderComponent;
        AtToggleCell: typeof AtToggleCell;
        AtMultiBtnCell: typeof AtMultiBtnCell;
        AtColorStatusCell: typeof AtColorStatusCell;
        AtTextImageCell: typeof AtTextImageCell;
        AtMenuCell: typeof AtMenuCell;
    };
    /**
     * Force reset the loading state (useful for testing)
     */
    static reset(): void;
}
