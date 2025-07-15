import { EventEmitter } from '../../stencil-public-runtime';
export type Side = 'left' | 'right';
export type Collapsible = 'offcanvas' | 'icon' | 'none';
export type Width = 'menu' | 'panel-xs' | 'panel-sm' | 'panel-md' | 'panel-lg' | 'panel-xl' | 'auto';
/**
 * @category Navigation
 * @description A collapsible sidebar navigation component with menu support and responsive behavior. Features animation, auto-collapse, and keyboard navigation.
 * @slot sidebar-header - Header of the sidebar (likely to be atui-sidebar-trigger)
 * @slot sidebar-content - Content displayed in the sidebar (likely to be atui-sidebar-menu elements)
 * @slot sidebar-footer - Footer displayed in the sidebar
 * @slot page-content - Content of the page
 */
export declare class AtuiSidebarComponent {
    /**
     * Position of the sidebar on the page
     */
    side: Side;
    /**
     * Width of the sidebar
     */
    width: Width;
    /**
     * Size of the sidebar when collapsed.
     */
    collapsible: Collapsible;
    /**
     * Opens the sidebar by default when set
     */
    default_open?: boolean;
    isOpen: boolean;
    /**
     * Emits an even when the sidebar is toggled, with `event.detail` being true if the sidebar is now open
     */
    atuiSidebarChange: EventEmitter;
    componentWillLoad(): void;
    /**
     * Toggles the sidebar's open state.
     */
    toggleSidebar(): Promise<void>;
    /**
     * Getter method for the open state of the sidebar
     * @returns The current open state of the sidebar
     */
    getIsOpen(): Promise<boolean>;
    render(): any;
}
