import { ICellRendererComp } from 'ag-grid-community';
import { InitTextCellParams } from '../../../../types/table-cells';
import { CSSProperties } from '../../../../types/styles';
/**
 * @category Table Cell
 * @description A basic text cell component for displaying simple text content in data tables. Provides consistent typography and overflow handling.
 */
export declare class AtuiTextCellComponent implements ICellRendererComp {
    el: any;
    containerStyles: CSSProperties;
    textStyles: CSSProperties;
    textClass: string;
    textValue: string;
    params: InitTextCellParams;
    init(params: InitTextCellParams): void;
    getGui(): HTMLElement;
    refresh(params: InitTextCellParams): boolean;
    private getTextValue;
    private transferArrayValueToString;
    render(): any;
}
