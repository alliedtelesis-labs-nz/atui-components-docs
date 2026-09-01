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
export {};
