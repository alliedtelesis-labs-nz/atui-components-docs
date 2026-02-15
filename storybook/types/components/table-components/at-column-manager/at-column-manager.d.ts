import { EventEmitter } from '../../../stencil-public-runtime';
import { ColDef } from 'ag-grid-community';
export interface AtIColumnManagerChangeEvent {
    id: string;
    checked: boolean;
}
export declare class AtColumnManagerComponent {
    /**
     * Column definitions used in your at-table
     */
    col_defs: ColDef[];
    el: HTMLElement;
    translations: any;
    checkedColumns: string[];
    componentWillLoad(): Promise<void>;
    colDefsChanged(): void;
    private initializeCheckedColumns;
    /**
     * Custom event used by at-table-actions to perform ag-grid logic
     *
     * Emitted when checkbox is clicked
     */
    atChange: EventEmitter<AtIColumnManagerChangeEvent>;
    changeHandler(event: CustomEvent<string[]>): void;
    render(): any;
}
