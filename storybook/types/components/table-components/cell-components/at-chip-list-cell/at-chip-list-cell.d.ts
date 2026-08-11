import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface AtIChipCellData {
    chips: string[];
}
export interface AtIChipCellParams extends ICellRendererParams {
    chips: (data: any) => string[];
    /**
     * Collapses chips that do not fit the column behind a `+N` counter. On by
     * default, since a fixed-height row clips wrapped chips. Set it false where
     * rows grow with their content — `autoHeight` rows — so every chip stays
     * visible by wrapping instead.
     */
    show_overflow_counter?: boolean;
}
/**
 * @category Data Tables
 * @description A cell component for displaying a list of chips.
 */
export declare class AtChipListCell implements ICellRendererComp {
    el: HTMLElement;
    params: AtIChipCellParams;
    chips: string[];
    /**
     * Width available to the chips, taken from the column rather than from CSS.
     * `undefined` until the column reports one, which leaves the fallback
     * `w-full` in charge.
     */
    contentWidth?: number;
    private column?;
    private handleColumnWidthChanged;
    init(params: AtIChipCellParams): void;
    getGui(): HTMLElement;
    refresh(params: AtIChipCellParams): boolean;
    componentDidLoad(): void;
    /**
     * Rebinds after a detach. A grid moves renderer DOM without re-running
     * `init` — column reorders, pinning, row animations — and every detach runs
     * `disconnectedCallback`, so without this the cell would stop following its
     * column's width from then on.
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
    /**
     * Follows the column this cell belongs to, so dragging its edge resizes the
     * chips live. Rebinding is guarded because a grid reuses a renderer across
     * rows and would otherwise stack a listener per refresh.
     */
    private bindColumn;
    /**
     * Takes the width from the column itself instead of inheriting it through
     * CSS. A grid wraps cells in its own markup, and depending on how that
     * markup is laid out a host can end up sized to its content rather than to
     * the column — which would leave the chips measuring themselves against a
     * box far narrower than the space actually on offer.
     */
    private syncWidth;
    render(): any;
}
