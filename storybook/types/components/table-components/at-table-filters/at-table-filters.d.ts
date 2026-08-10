import { EventEmitter } from '../../../stencil-public-runtime';
import { AtIFilter, AtIFilterGroup } from '../../../types';
/**
 * @category Data Tables
 * @description Displays the active table filters as a removable chip list, showing And/Or logical operators and grouping nested filters.
 * @dependency at-badge
 */
export declare class AtTableFilters {
    /**
     * The active filters to display as a removable chip list, grouped with And/Or operators and nested subgroups.
     */
    filters?: AtIFilterGroup;
    /**
     * Emits the remaining filters whenever a chip is removed or all are cleared.
     */
    atChange: EventEmitter<AtIFilterGroup>;
    /**
     * Emits the clicked filter condition when a chip is clicked (excluding its remove button).
     */
    atFilterClick: EventEmitter<AtIFilter>;
    private chipLabel;
    private groupBackground;
    private hasValidCondition;
    private removeCondition;
    private clearAll;
    private renderConditionChip;
    private renderGroupChips;
    render(): any;
}
