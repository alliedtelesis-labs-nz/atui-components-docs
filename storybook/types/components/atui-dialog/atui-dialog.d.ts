/**
 * @category Overlays
 * @description A modal dialog component for displaying content that requires user interaction or attention. Features backdrop click handling, escape key support, and programmatic open/close control.
 *
 * @slot - Content placed inside of the dialog box
 */
export declare class AtuiDialogComponent {
    el: HTMLAtuiDialogElement;
    /**
     * ID of the dialog element (used to open and close the modal)
     */
    dialog_id: string;
    /**
     * Role of the dialog element. Can be either 'dialog' or 'alertdialog'
     */
    role: 'dialog' | 'alertdialog';
    /**
     * Internal state to track if dialog is open
     */
    isOpen: boolean;
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
    render(): any;
}
