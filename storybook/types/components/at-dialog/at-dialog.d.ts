import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @category Overlays
 * @description A modal dialog component for displaying content that requires user interaction or attention. Features backdrop click handling, escape key support, and programmatic open/close control.
 *
 * @slot - Display content within the dialog
 */
export declare class AtDialogComponent {
    el: HTMLAtDialogElement;
    /**
     * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
     */
    role: 'dialog' | 'alertdialog';
    /**
     * Whether to show a backdrop behind the panel, prevents any interaction with background UI.
     */
    backdrop: boolean;
    /**
     * Will close the dialog if clicked
     */
    close_backdrop: boolean;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.
     */
    trigger_id?: string;
    /**
     * Internal state to track if dialog is open
     */
    isOpen: boolean;
    /**
     * Emits an event when the dialog is toggled, with `event.detail` being true if the dialog is now open
     */
    atuiDialogChange: EventEmitter;
    private dialog;
    private dialogWrapper;
    private triggerEls;
    private externalTriggerListeners;
    /**
     * Toggles the dialog modal between open and closed states
     * @returns Promise that resolves when the dialog state is toggled
     */
    toggleDialog(): Promise<void>;
    /**
     * Opens the dialog modal
     * @returns Promise that resolves when the dialog is opened
     */
    openDialog(): Promise<void>;
    /**
     * Closes the dialog modal
     * @returns Promise that resolves when the dialog is closed
     */
    closeDialog(): Promise<void>;
    /**
     * Getter method for the open state of the dialog
     * @returns The current open state of the dialog
     */
    getIsOpen(): Promise<boolean>;
    private handleDialogClose;
    private handleKeyDown;
    offClickHandler(event: any): void;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    private cleanupExternalTriggerListeners;
    private setupExternalTriggerListeners;
    render(): any;
}
