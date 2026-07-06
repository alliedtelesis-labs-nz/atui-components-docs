import { EventEmitter } from '../../../stencil-public-runtime';
import { AtEvent } from '../../../types/events';
/**
 * @category Navigation
 * @description A sidebar menu item component for the sidebar.
 *
 * @slot icon - Carbon icon displayed at the left of the menu item.
 * @slot label - Content displayed at the left of the menu item.
 * @slot sidebar-menu-item-actions - Content displayed at the right of the menu item.
 */
export declare class AtSidebarMenuitemComponent {
    /**
     * Label to be displayed for the menu item
     */
    label?: string;
    /**
     * Carbon icon or svg to be displayed with the label
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
     * Set when the menu item is used purely as the trigger content of an
     * atui-sidebar-submenu accordion. The enclosing accordion summary is the
     * interactive control, so the item renders as presentational: it is not a
     * separate tab stop and does not handle its own keyboard activation.
     */
    is_trigger?: boolean;
    /**
     * Emits when the menu item is clicked
     */
    atuiClick: EventEmitter<AtEvent>;
    el: HTMLAtSidebarMenuitemElement;
    handleClick(event: Event): void;
    private handleKeyDown;
    private renderIcon;
    render(): any;
}
