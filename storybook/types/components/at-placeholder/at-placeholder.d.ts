export type AtPlaceholderSize = 'xs' | 'sm' | 'md' | 'lg';
/**
 * @category Feedback
 * @description A placeholder component for displaying empty states, skeleton loading, or temporary content. Useful for indicating missing data or content that is still loading.
 *
 * @slot - Placed below the content
 */
export declare class AtPlaceholderComponent {
    /**
     * Size of the placeholder
     */
    size: AtPlaceholderSize;
    /**
     * Material icon to be displayed in the center of the placeholder
     */
    icon?: string;
    /**
     * Title to be displayed below the icon
     */
    placeholder_title: string;
    /**
     * Content to be displayed below the title
     */
    content: string;
    /**
     * Will show a loading spinner when set
     */
    show_loading_spinner: boolean;
    get placeholderSizeClass(): string;
    get iconSizeClass(): string;
    render(): any;
}
