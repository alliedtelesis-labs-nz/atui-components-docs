import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @category Actions
 * @description A versatile menu component for actions with keyboard support and positioning. Features auto-open behavior, customizable triggers, and accessible menu item management.
 */
export type Position = 'top' | 'bottom' | 'left' | 'right';
export type Align = 'start' | 'end';
export type OpenOn = 'hover' | 'click';
export type AriaRole = 'menu' | 'listbox';
export declare class AtuiMenu {
    /**
     * Menu's x offset from edge in pixels. Only applied for origin_x = 'start' | 'end'
     */
    offset_x: number;
    /**
     * Menu's y offset from edge in pixels. Only applied for origin_y = 'top' | 'bottom'
     */
    offset_y: number;
    /**
     * Position of opened menu element relative to trigger element.
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
    disabledChanged(newValue: boolean): void;
    isOpen: boolean;
    triggerEl: HTMLElement;
    menuEl: HTMLElement;
    private cleanupAutoUpdate?;
    private popoverId;
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
    disconnectedCallback(): void;
    private mouseEnterHandler;
    private mouseLeaveHandler;
    private setupFloatingUI;
    private cleanupFloatingUI;
    private updateFloatingPosition;
    private getFloatingUIPlacement;
    render(): any;
}
