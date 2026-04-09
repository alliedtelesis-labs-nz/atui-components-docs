export type AtBadgeType = 'default' | 'info' | 'success' | 'warning' | 'error' | 'disabled';
export type AtBadgeContrast = 'high' | 'low';
export type AtBadgeSize = 'lg' | 'sm';
/**
 * @category Feedback
 * @description A badge component for displaying status indicators, counts, or labels with various styling variants. Supports different sizes, colors, and can be used for notifications or categorization.
 *
 * @slot - Content placed after the label
 */
export declare class AtBadgeComponent {
    /**
     * Icon appearing to the left of the badge title. MUST use mat-icon name.
     */
    icon?: string;
    /**
     * Title shown on the badge.
     */
    label?: string;
    /**
     * Type of the badge. Determines colour theming.
     */
    type: AtBadgeType;
    /**
     * Size of the badge. Determines padding and font-size. For use in input chip lists.
     */
    size: AtBadgeSize;
    /**
     * Impact of the badge, changes the colours.
     */
    impact: AtBadgeContrast;
    /**
     * Boolean value to round the edges of the badge.
     */
    rounded: boolean;
    get baseClasses(): string;
    get variantClasses(): string;
    get sizeClasses(): string;
    render(): any;
}
