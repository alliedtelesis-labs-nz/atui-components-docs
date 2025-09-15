export type Layout = 'vertical' | 'horizontal';
/**
 * @category Navigation
 * @description A tab component for the tab selector.
 */
export declare class AtTab {
    /**
     * ID of the tab
     */
    tab_id: string;
    /**
     * Title to be displayed in the tab
     */
    tab_title: string;
    /**
     * Styling based on the layout of the tabs
     */
    layout: Layout;
    /**
     * Applies styling when active
     */
    is_active: boolean;
    tabEl: HTMLElement;
    handleKeyDown(event: KeyboardEvent): void;
    render(): any;
}
