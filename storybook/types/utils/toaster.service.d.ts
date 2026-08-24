import { AtIToastHandle, AtIToastOptions, AtIToastType } from '../types/toast';
export declare class ToasterService {
    private static id;
    private static containers;
    /**
     * Show a toast message
     *
     * @param type The type of the toast
     * @param message The message to display in the toast
     * @param options Additional options for the toast (title, position, timeout, dismissible)
     * @returns A handle to the shown toast, for a caller that needs to take it
     * down itself. A caller showing an ordinary timed toast can ignore it.
     */
    static show(type: AtIToastType, message: string, options?: AtIToastOptions): Promise<AtIToastHandle>;
    /**
     * Get or create at-toaster component
     * Waits for the element to be upgraded and hydrated before returning.
     * Stores the toaster container with position in the Map
     */
    private static getToaster;
}
