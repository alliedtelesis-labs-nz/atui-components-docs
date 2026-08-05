import { EventEmitter } from '../../../stencil-public-runtime';
import { AtIFilterGroup } from '../../../types';
/**
 * @category Data Tables
 * @description Displays the active table filters as a removable chip list, showing And/Or logical operators and grouping nested filters in parentheses.
 * @dependency at-badge
 */
export declare class AtTableFilters {
    /**
     * The active filters to display as a removable chip list, grouped with And/Or operators and nested parentheses.
     */
    filters?: AtIFilterGroup;
    /**
     * Emits the remaining filters whenever a chip is removed or all are cleared.
     */
    atChange: EventEmitter<AtIFilterGroup>;
    private chipLabel;
    private groupBackground;
    private hasValidCondition;
    private removeCondition;
    private clearAll;
    private renderConditionChip;
    private renderGroupChips;
    render(): any;
}
