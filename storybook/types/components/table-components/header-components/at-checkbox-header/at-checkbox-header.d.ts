import { ICellRendererComp } from 'ag-grid-community';
/**
 * @category Data Tables
 * @description A header component for displaying a checkbox.
 */
export declare class AtCheckboxHeaderComponent implements ICellRendererComp {
    params: any;
    disabled: boolean;
    el: HTMLAtCheckboxHeaderElement;
    init(params: any): void;
    /**
     * Resolved while rendering rather than in `init()`: ag-grid builds the header
     * component before the grid is ready to be asked about its rows, and anything thrown
     * in `init()` leaves the component without a GUI for ag-grid to attach.
     *
     * A caller that owns the selection itself supplies `checked`/`setValue` and keeps the
     * state; without them the checkbox reads and writes a boolean field on each row, which
     * is the original contract and the only one that works when nobody else is tracking.
     */
    private checkedState;
    /**
     * The rows on the current page, which is what the header checkbox acts on.
     * Not `getRenderedNodes()`: that returns the nodes the viewport has drawn, so
     * with virtualization on a tall page it silently means "the rows you happen
     * to have scrolled past" - the checkbox would tick a different number of rows
     * depending on scroll position.
     */
    private pageNodes;
    getGui(): HTMLElement;
    refresh(params: any): boolean;
    setRowsValue(checked: boolean): void;
    private setDisabled;
    render(): any;
}
