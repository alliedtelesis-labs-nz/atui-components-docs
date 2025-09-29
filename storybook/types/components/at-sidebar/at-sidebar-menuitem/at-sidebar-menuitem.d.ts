/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 */
export declare class AtSidebarMenuitemComponent {
    /**
     * Label to be displayed for the menu item
     */
    label?: string;
    /**
     * Icon to be displayed with the label
     */
    icon?: string;
    /**
     * Alert badge for the menu item
     */
    badge?: string;
    /**
     * Will change style to indicate menuitem is active when set
     */
    is_active?: boolean;
    el: HTMLAtSidebarMenuitemElement;
    private handleKeyDown;
    render(): any;
}
