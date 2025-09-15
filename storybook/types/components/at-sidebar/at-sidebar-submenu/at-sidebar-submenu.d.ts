/**
 * @category Navigation
 * @description Display nested sub-menus in the atui-sidebar.
 * Sub-menu's can be collapsed via atui-accordion-item when the parent sidebar is expanded.
 * Submenu content is collapsed and hidden when the parent sidebar is collapsed.
 * Menu indent styling is supported up to 3 levels.
 *
 * @slot submenu-content - To place the atui-sidebar-menuitem(s) in the sub menu
 * @slot submenu-hover-content - To place the atui-sidebar-menuitem(s) in the sub menu on collapsed mode
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
    isSidebarOpen: boolean;
    isAccordionOpen: boolean;
    atuiAccordionItem: HTMLAtAccordionItemElement;
    el: HTMLElement;
    constructor();
    componentDidLoad(): Promise<void>;
    componentDidUpdate(): Promise<void>;
    private updateInitialStates;
    handleAtuiChange(event: CustomEvent<boolean>): void;
    handleAtuiAccordionChange(event: CustomEvent<boolean>): void;
    private getIsActive;
    render(): any;
}
