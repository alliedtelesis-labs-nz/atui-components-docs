export type Template = 'content-container' | 'master-detail' | 'tabset';
/**
 * @category Layout
 * @description A base layout component for structuring page content with flexible sections and responsive behavior. Provides foundation for consistent page layouts.
 *
 * @slot master - Used as the master element when template is master-detail
 * @slot detail - Used as the detail element when template is master-detail
 * @slot tabset-navigation - Used as the navigation element when template is tabset
 * @slot tabset-content - Used as the content element when template is tabset
 * @slot - Content when template is content-container
 */
export declare class AtLayout {
    /**
     * Template used to display content
     */
    template: Template;
    /**
     * If overflow is allowed on the detail in master-detail
     */
    overflow: boolean;
    get layoutElement(): any;
    render(): any;
}
