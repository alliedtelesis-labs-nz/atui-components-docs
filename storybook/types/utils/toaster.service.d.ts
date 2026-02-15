import { AtIToastOptions, AtIToastType } from '../types/toast';
export declare class ToasterService {
    private static id;
    private static containers;
    /**
     * Show a toast message
     *
     * @param type The type of the toast
     * @param message The message to display in the toast
     * @param options Additional options for the toast (title, position, timeout, dismissible)
     */
    static show(type: AtIToastType, message: string, options?: AtIToastOptions): Promise<void>;
    /**
     * Get or create at-toaster component
     * Stores the toaster container with position in the Map
     */
    private static getToaster;
}
