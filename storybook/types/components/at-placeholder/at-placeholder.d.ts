export type AtPlaceholderSize = 'xs' | 'sm' | 'md' | 'lg';
export type AtPlaceholderType = 'none' | 'chart-no-data' | 'no-data' | 'no-results' | 'no-access';
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
    /**
     * Built-in illustration and empty-state situation. Prefer this over
     * slotting your own icon so empty states stay consistent across apps.
     * `no-data` for a collection that is genuinely empty (pair with a create
     * action), `no-results` when a search or filter matched nothing,
     * `no-access` when the emptiness is permission or scope caused,
     * `chart-no-data` for an empty chart surface. A failed load is not a
     * placeholder — use `at-message` with a retry action.
     */
    type: AtPlaceholderType;
    el: HTMLElement;
    private gradientId;
    componentDidRender(): void;
    get placeholderSizeClass(): string;
    renderImage(): any;
    render(): any;
}
