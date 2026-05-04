import { ICellRendererComp, ICellRendererParams } from 'ag-grid-community';
export interface AtIRelativeDateTimeCellParams extends ICellRendererParams {
    getDateTime?: (data: any) => string;
}
/**
 * @category Data Tables
 * @description A cell component for displaying relative time since a datetime with the source datetime shown below.
 */
export declare class AtRelativeDateTimeCell implements ICellRendererComp {
    el: HTMLElement;
    relativeLabel: string;
    dateTimeLabel: string;
    init(params: AtIRelativeDateTimeCellParams): void;
    refresh(params: AtIRelativeDateTimeCellParams): boolean;
    getGui(): HTMLElement;
    private setValues;
    private parseDateTime;
    private getRelativeLabel;
    private formatSingleUnit;
    private formatUnit;
    render(): any;
}
