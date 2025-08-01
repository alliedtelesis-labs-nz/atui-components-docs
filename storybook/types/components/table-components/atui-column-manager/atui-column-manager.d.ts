import { EventEmitter } from '../../../stencil-public-runtime';
import { ColDef } from 'ag-grid-community';
export interface ColumnManagerChangeEvent {
    id: string;
    checked: boolean;
}
export declare class AtuiColumnManagerComponent {
    /**
     * Column definitions used in your atui-table
     */
    col_defs: ColDef[];
    el: HTMLElement;
    translations: any;
    checkedColumns: string[];
    componentWillLoad(): Promise<void>;
    colDefsChanged(): void;
    private initializeCheckedColumns;
    /**
     * Custom event used by atui-table-actions to perform ag-grid logic
     *
     * Emitted when checkbox is clicked
     */
    atuiChange: EventEmitter<ColumnManagerChangeEvent>;
    changeHandler(event: CustomEvent<string[]>): void;
    render(): any;
}
