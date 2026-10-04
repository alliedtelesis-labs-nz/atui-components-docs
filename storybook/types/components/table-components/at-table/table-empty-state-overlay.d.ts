import { INoRowsOverlayComp, INoRowsOverlayParams } from 'ag-grid-community';
import { AtITableEmptyState } from '../../../models/searchTableModel';
export interface AtTableEmptyStateOverlayParams extends INoRowsOverlayParams, AtITableEmptyState {
    onHeightChange: (height: number) => void;
    onAttachedChange: (isAttached: boolean) => void;
}
export declare class AtTableEmptyStateOverlay implements INoRowsOverlayComp {
    private el;
    private placeholder;
    private resizeObserver;
    private onAttachedChange;
    init(params: AtTableEmptyStateOverlayParams): void;
    getGui(): HTMLElement;
    refresh(params: AtTableEmptyStateOverlayParams): void;
    destroy(): void;
    private applyEmptyState;
}
