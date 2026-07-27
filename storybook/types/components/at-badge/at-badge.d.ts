export type AtBadgeType = 'default' | 'info' | 'success' | 'warning' | 'error' | 'disabled';
export type AtBadgeContrast = 'high' | 'low';
export type AtBadgeSize = 'lg' | 'sm';
/**
 * @category Feedback
 * @description A badge component for displaying status indicators, counts, or labels with various styling variants. Supports different sizes, colors, and can be used for notifications or categorization.
 * @slot icon - Carbon icon placed before the label
 * @slot - Content placed after the label
 */
export declare class AtBadgeComponent {
    /**
     * Title shown on the badge.
     */
    label?: string;
    /**
     * Type of the badge. Determines colour theming.
     */
    type: AtBadgeType;
    /**
     * Size of the badge. Determines padding and font-size. `sm` is the default and suits
     * dense product UI — page/entity headers, summary and list rows, table status cells.
     * Use `lg` for input chip lists, where the badge is an interactive control rather than
     * a status marker.
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
