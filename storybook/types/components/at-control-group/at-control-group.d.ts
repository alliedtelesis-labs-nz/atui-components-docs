export type AtControlGroupDirection = 'horizontal' | 'vertical';
/**
 * @category Layout
 * @description A layout wrapper that merges adjacent buttons or inputs into a visually joined group by removing interior border-radius on touching edges.
 *
 * @slot - Place at-button or at-input elements here to be merged into the group.
 */
export declare class AtControlGroup {
    /**
     * Layout direction of the grouped elements.
     */
    direction: AtControlGroupDirection;
    render(): any;
}
