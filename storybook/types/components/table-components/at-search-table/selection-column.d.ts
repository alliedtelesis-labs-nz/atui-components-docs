import { ICellRendererComp, ICellRendererParams, IHeaderComp, IHeaderParams } from 'ag-grid-community';
export type AtSelectionHeaderState = boolean | 'indeterminate';
interface SelectionCellParams extends ICellRendererParams {
    isSelected: (row: any) => boolean;
    isSelectable: (row: any) => boolean;
    setSelected: (row: any, selected: boolean) => void;
    label?: string;
}
interface SelectionHeaderParams extends IHeaderParams {
    getState: () => AtSelectionHeaderState;
    setSelected: (selected: boolean) => void;
    /**
     * Hands the live instance to the table so it can call `applyState` in place.
     * `api.refreshHeader()` would rebuild the component instead, and the fresh
     * `at-checkbox` renders one frame before Stencil applies its classes - long enough
     * for the unpadded host to shift the box left and back on every select-all.
     */
    register?: (header: AtSelectionHeader | null) => void;
    label?: string;
}
export declare class AtSelectionCell implements ICellRendererComp {
    private el;
    private checkbox;
    private params;
    private onChange;
    init(params: SelectionCellParams): void;
    getGui(): HTMLElement;
    refresh(params: SelectionCellParams): boolean;
    destroy(): void;
    private applyState;
}
export declare class AtSelectionHeader implements IHeaderComp {
    private el;
    private checkbox;
    private params;
    private onChange;
    init(params: SelectionHeaderParams): void;
    getGui(): HTMLElement;
    refresh(params: SelectionHeaderParams): boolean;
    destroy(): void;
    /**
     * Called by the table after it changes the selection, since ag-grid refreshes a
     * header only when the columns change.
     */
    applyState(): void;
}
interface SelectionRadioCellParams extends ICellRendererParams {
    isSelected: (row: any) => boolean;
    isSelectable: (row: any) => boolean;
    setSelected: (row: any) => void;
    group: string;
    rowId: (row: any) => string;
    label?: string;
}
/**
 * The single-selection counterpart of `AtSelectionCell`. It reports a pick and never an
 * unpick: `at-radio` fires only on the transition into checked, matching a radio group,
 * so the selection is cleared by picking elsewhere or by the host calling
 * `clearSelection()`.
 */
export declare class AtSelectionRadioCell implements ICellRendererComp {
    private el;
    private radio;
    private params;
    private onChange;
    init(params: SelectionRadioCellParams): void;
    getGui(): HTMLElement;
    refresh(params: SelectionRadioCellParams): boolean;
    destroy(): void;
    private applyState;
}
export {};
