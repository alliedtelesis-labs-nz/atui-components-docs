export type Layout = 'vertical' | 'horizontal';
/**
 * @category Navigation
 * @description A tab trigger component for the tab selector.
 * @slot - Use this slot to add custom elements after the tab title.
 */
export declare class AtTabTrigger {
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
    /**
     * If true, the tab will fill the parent container's width.
     * Set by parent <at-tabs> to control layout.
     */
    fill: boolean;
    tabEl: HTMLElement;
    handleKeyDown(event: KeyboardEvent): void;
    render(): any;
}
