import { EventEmitter } from '../../../stencil-public-runtime';
import { AtEvent } from '../../../types/events';
/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 *
 * @slot sidebar-menu-item-label: Content displayed at the left of the menu item.
 * @slot sidebar-menu-item-actions: Content displayed at the right of the menu item.
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
    /**
     * Emits when the menu item is clicked
     */
    atuiClick: EventEmitter<AtEvent>;
    el: HTMLAtSidebarMenuitemElement;
    handleClick(event: Event): void;
    private handleKeyDown;
    render(): any;
}
