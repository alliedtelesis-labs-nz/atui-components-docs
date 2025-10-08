/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 *
 * @slot label: Content displayed at the left of the menu item.
 * @slot actions: Content displayed at the right of the menu item.
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
     * Defines menuitem styling for font weight and indent 0-3  Default 0
     */
    depth?: number;
    /**
     * Will change style to indicate menuitem is active when set
     */
    is_active?: boolean;
    el: HTMLAtSidebarMenuitemElement;
    private handleKeyDown;
    render(): any;
}
