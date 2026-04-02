/**
 * @category Overlays
 * @description A modal dialog component for displaying content that requires user interaction or attention. Features backdrop click handling, escape key support, and programmatic open/close control.
 *
 * @slot - Content placed inside of the dialog box
 */
export declare class AtDialogComponent {
    el: HTMLAtDialogElement;
    /**
     * ID of the dialog element (used to open and close the modal)
     */
    dialog_id: string;
    /**
     * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
     */
    role: 'dialog' | 'alertdialog';
    /**
     * Whether to show a backdrop behind the dialog
     */
    backdrop: boolean;
    /**
     * Data-id of an external element to use as the trigger. When provided, clicking the trigger will toggle the dialog.
     */
    trigger_id?: string;
    /**
     * Internal state to track if dialog is open
     */
    isOpen: boolean;
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
    private handleDialogClose;
    private handleKeyDown;
    componentDidLoad(): Promise<void>;
    disconnectedCallback(): void;
    private cleanupExternalTriggerListeners;
    private setupExternalTriggerListeners;
    render(): any;
}
