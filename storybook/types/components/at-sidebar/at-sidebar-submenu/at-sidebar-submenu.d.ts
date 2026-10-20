/**
 * @category Navigation
 * @description Display nested sub-menus in the atui-sidebar.
 * Sub-menu's can be collapsed via atui-accordion-item when the parent sidebar is expanded.
 * Submenu content is collapsed and hidden when the parent sidebar is collapsed.
 * Menu indent styling is supported up to 3 levels.
 *
 * @slot icon - Icon content to be shown in both expanded and collapsed menu items. Usually an `<at-icon>` element.
 * @slot submenu-content - To place the atui-sidebar-menuitem(s) in the sub menu.
 * @slot submenu-hover-content - To place the atui-sidebar-menuitem(s) in the sub menu on collapsed mode.
 */
export declare class AtSidebarSubmenuComponent {
    /**
     * Label to be displayed for the menu item
     */
    label: string;
    /**
     * Icon to be displayed with the label
     */
    icon?: string;
    /**
     * Alert badge for the menu item
     */
    badge?: string;
    /**
     * Will change the styling of the menuitem when set
     */
    is_active?: boolean;
    /**
     * Whether the submenu starts expanded. When set, the submenu keeps its own
     * expanded state: it is restored after the sidebar is collapsed and
     * re-expanded, and expanding the sidebar no longer opens every submenu.
     * When unset, the submenu follows the sidebar's open state.
     */
    default_open?: boolean;
    isSidebarOpen: boolean;
    isAccordionOpen: boolean;
    el: HTMLElement;
    private atuiAccordionItem;
    private openStateBeforeCollapse?;
    constructor();
    componentDidLoad(): Promise<void>;
    private updateInitialStates;
    handleAtuiChange(event: CustomEvent<boolean>): void;
    private getIsActive;
    render(): any;
}
