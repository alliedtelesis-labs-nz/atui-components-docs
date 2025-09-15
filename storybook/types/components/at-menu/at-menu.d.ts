import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @category Overlays
 * @description A popover menu component for displaying action lists when via click or hover on a trigger element.
 *
 * @slot menu-trigger - Trigger element for the menu (only used when trigger_id is not provided)
 * @slot default - Content to display inside the menu
 */
export type Position = 'top' | 'bottom' | 'left' | 'right';
export type Align = 'start' | 'end';
export type OpenOn = 'hover' | 'click';
export type AriaRole = 'menu' | 'listbox';
export declare class AtMenu {
    /**
     * Menu's x offset from edge in pixels. Only applied for origin_x = 'start' | 'end'
     */
    offset_x: number;
    /**
     * Menu's y offset from edge in pixels. Only applied for origin_y = 'top' | 'bottom'
     */
    offset_y: number;
    /**
     * Position of opened menu element relative to the trigger element.
     */
    position: Position;
    /**
     * Alignment of opened menu element relative to trigger element.
     */
    align: Align;
    /**
     * String representing the 'width' style of the menu element ('auto' or 'NUMpx'). When not specified, defaults to trigger element width.
     * To fit menu to content use width="fit-content" - Avoid width='auto' as this will result in 100% width.
     */
    width?: string;
    /**
     * Prevent closing of menu when options are selected. Used for multi-selection controls.
     */
    autoclose: boolean;
    /**
     * Event type that triggers the menu open state. Click or Hover.
     */
    trigger: OpenOn;
    /**
     * Close the menu when the user clicks within the menu panel. Default for single selection menus.
     */
    role: AriaRole;
    /**
     * Prevent opening menu
     */
    disabled: boolean;
    /**
     * Data-id of an external element to use as the trigger. When provided, the trigger slot is not needed.
     */
    trigger_id?: string;
    disabledChanged(newValue: boolean): void;
    isOpen: boolean;
    triggerEl: HTMLElement;
    menuEl: HTMLElement;
    private triggerEls;
    private popoverId;
    private cleanupAutoUpdate?;
    private updatePosition;
    el: HTMLElement;
    /**
     * Toggles the dropdown menu's open state.
     */
    toggleMenu(): Promise<void>;
    /**
     * Opens the dropdown menu.
     */
    openMenu(): Promise<void>;
    /**
     * Closes the dropdown menu.
     */
    closeMenu(): Promise<void>;
    private updateAriaExpanded;
    /**
     * Return the current menu open state
     */
    getIsOpen(): Promise<boolean>;
    /**
     * Emits an event containing the open menu state.
     */
    atuiMenuStateChange: EventEmitter<boolean>;
    private timedOutCloser;
    componentDidLoad(): Promise<void>;
    private setupPopoverEventListeners;
    private setupExternalTriggerListeners;
    disconnectedCallback(): void;
    private externalTriggerListeners;
    private cleanupExternalTriggerListeners;
    private mouseEnterHandler;
    private mouseLeaveHandler;
    private setupFloatingUI;
    private cleanupFloatingUI;
    private updateFloatingPosition;
    private getFloatingUIPlacement;
    render(): any;
}
