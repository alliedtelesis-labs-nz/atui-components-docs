import { AtIToast, AtIToastPosition } from '../../types/toast';
/**
 * @category Overlays
 * @description A toaster component for displaying messages to users. Supports toast types, positions, timeout and dismissible.
 */
export declare class AtToasterComponent {
    el: HTMLElement;
    /**
     * Position of the toaster on the screen
     */
    position: AtIToastPosition;
    toasts: AtIToast[];
    /**
     * Adds a new toast to the toaster container
     * This method is called from the ToasterService when a new toast is created.
     *
     * @param toast The toast to add
     */
    addToast(toast: AtIToast): Promise<void>;
    /**
     * Removes a toast from the toaster container by its ID
     * This method is called by tapToast.
     *
     * @param id The ID of the toast to remove
     */
    removeToast(id: number): Promise<void>;
    /**
     * Removes a toast from the toaster container by tapping the toast
     *
     * @param toast The toast that was tapped
     */
    private tapToast;
    /**
     * Removes a toast from the toaster container by clicking the close button
     *
     * @param toast The toast to remove
     */
    private clickCloseButton;
    private classSet;
    /**
     * Renders the toaster container and all active toasts.
     * Each toast is wrapped with <at-message> for UI presentation.
     */
    render(): any;
}
