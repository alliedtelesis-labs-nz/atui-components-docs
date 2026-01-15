import { AvailableCells, AvailableHeaders } from "../../types/table-cells";
import { AtCheckboxCellComponent } from "./cell-components/at-checkbox-cell/at-checkbox-cell";
import { AtTextBadgeCell } from "./cell-components/at-text-badge-cell/at-text-badge-cell";
import { AtTextCellComponent } from "./cell-components/at-text-cell/at-text-cell";
import { AtTextStatusCellComponent } from "./cell-components/at-text-status-cell/at-text-status-cell";
import { AtCheckboxHeaderComponent } from "./header-components/at-checkbox-header/at-checkbox-header";
import { AtTextIconCell } from "./cell-components/at-text-icon-cell/at-text-icon-cell";
import { AtTitleSubtitleDateCell } from "./cell-components/at-title-subtitle-date-cell/at-title-subtitle-date-cell";
import { AtTitleSubtitleCell } from "./cell-components/at-title-subtitle-cell/at-title-subtitle-cell";
import { AtEditTextCell } from "./cell-components/at-edit-text-cell/at-edit-text-cell";
import { AtChipListCell } from "./cell-components/at-chip-list-cell/at-chip-list-cell";
import { AtToggleCell } from "./cell-components/at-toggle-cell/at-toggle-cell";
import { AtMultiBtnCell } from "./cell-components/at-multi-btn-cell/at-multi-btn-cell";
import { AtColorStatusCell } from "./cell-components/at-color-status-cell/at-color-status-cell";
import { AtTextImageCell } from "./cell-components/at-text-image-cell/at-text-image-cell";
import { AtMenuCell } from "./cell-components/at-menu-cell/at-menu-cell";
export class AtTableComponentsConfigs {
    static defaultPageSize = 10;
    static cellComponentsLoaded = false;
    /**
     * Ensures all table cell components are registered as custom elements.
     * This is crucial for production builds where tree-shaking might remove
     * seemingly unused components.
     */
    static ensureCellComponentsLoaded() {
        if (this.cellComponentsLoaded)
            return;
        try {
            // Prevent tree-shaking by referencing all components
            const cellComponents = [
                AtCheckboxCellComponent,
                AtTextCellComponent,
                AtTextStatusCellComponent,
                AtTextBadgeCell,
                AtTextIconCell,
                AtTitleSubtitleCell,
                AtTitleSubtitleDateCell,
                AtEditTextCell,
                AtChipListCell,
                AtToggleCell,
                AtMultiBtnCell,
                AtColorStatusCell,
                AtTextImageCell,
                AtMenuCell,
                AtCheckboxHeaderComponent,
            ];
            // Force reference to prevent tree-shaking
            cellComponents.forEach((component) => {
                if (typeof component !== 'function') {
                    throw new Error(`Invalid component: ${component}`);
                }
            });
            this.cellComponentsLoaded = true;
        }
        catch (error) {
            console.error('Error preserving table cell components:', error);
        }
    }
    /**
     * Returns the framework components for AG Grid.
     * Automatically ensures all cell components are loaded before returning.
     */
    static getFrameworkComponents() {
        this.ensureCellComponentsLoaded();
        return {
            [AvailableCells.TEXT_CELL]: AtTextCellComponent,
            [AvailableCells.TEXT_STATUS_CELL]: AtTextStatusCellComponent,
            [AvailableCells.TEXT_WITH_BADGE_CELL]: AtTextBadgeCell,
            [AvailableCells.TEXT_WITH_ICON_CELL]: AtTextIconCell,
            [AvailableCells.TITLE_SUBTITLE_CELL]: AtTitleSubtitleCell,
            [AvailableCells.TITLE_SUBTITLE_DATE_CELL]: AtTitleSubtitleDateCell,
            [AvailableCells.EDIT_TEXT_CELL]: AtEditTextCell,
            [AvailableCells.CHIP_LIST_CELL]: AtChipListCell,
            [AvailableCells.CHECKBOX_CELL]: AtCheckboxCellComponent,
            [AvailableHeaders.CHECKBOX_HEADER]: AtCheckboxHeaderComponent,
            [AvailableCells.TOGGLE_CELL]: AtToggleCell,
            [AvailableCells.MULTI_BTN_CELL]: AtMultiBtnCell,
            [AvailableCells.COLOR_STATUS_CELL]: AtColorStatusCell,
            [AvailableCells.TEXT_WITH_IMAGE_CELL]: AtTextImageCell,
            [AvailableCells.MENU_CELL]: AtMenuCell,
        };
    }
    /**
     * Force reset the loading state (useful for testing)
     */
    static reset() {
        this.cellComponentsLoaded = false;
    }
}
//# sourceMappingURL=at-table-components-configs.js.map
