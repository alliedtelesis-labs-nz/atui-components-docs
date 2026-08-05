import { EventEmitter } from '../../../stencil-public-runtime';
import { AtIFilter, AtIFilterGroup } from '../../../types';
import { AtISelectOption } from '../../../types/select';
export declare class AtFilterForm {
    /**
     * Configuration for the available filters
     */
    filter_config: AtIFilter[];
    /**
     * Currently active filters to initialize the form with
     */
    active_filters?: AtIFilterGroup;
    filter_ids: AtISelectOption[];
    operator_options: AtISelectOption[];
    root: AtIFilterGroup;
    isFormValid: boolean;
    /**
     * Used to force re-rendering of the component when filters change
     */
    private renderKey;
    private nextGroupId;
    /**
     * Event emitted when the user cancels a filter search
     */
    atCancel: EventEmitter<null>;
    /**
     * Event emitted with the current filters when the user initiates a filter search
     */
    atSearch: EventEmitter<AtIFilterGroup>;
    componentWillLoad(): void;
    onFilterConfigChange(): void;
    private setDefaultFilters;
    private createFilter;
    private refresh;
    private addSibling;
    private addOr;
    private addAnd;
    private remove;
    private getOperatorOptions;
    private handleFilterIdChange;
    private handleOperatorChange;
    private handleValueChange;
    private validateFilters;
    private onCancel;
    private attachLabels;
    private onSearch;
    private renderCondition;
    private renderGroup;
    render(): any;
}
