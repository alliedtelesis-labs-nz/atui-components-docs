export type AtPlaceholderSize = 'xs' | 'sm' | 'md' | 'lg';
/**
 * @category Feedback
 * @description A placeholder component for displaying empty states, skeleton loading, or temporary content. Useful for indicating missing data or content that is still loading.
 *
 * @slot icon - Carbon icon placed in the center of the placeholder
 * @slot - Placed below the content
 */
export declare class AtPlaceholderComponent {
    /**
     * Size of the placeholder
     */
    size: AtPlaceholderSize;
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
    el: HTMLElement;
    componentDidLoad(): void;
    get placeholderSizeClass(): string;
    render(): any;
}
