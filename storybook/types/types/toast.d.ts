export interface AtIToast extends AtIToastOptions {
    id: number;
    type: AtIToastType;
    message: string;
}
export interface AtIToastOptions {
    title?: string;
    position?: AtIToastPosition;
    timeout?: number;
    dismissible?: boolean;
    closeButton?: boolean;
}
/**
 * A live reference to a shown toast, returned by `ToasterService.show`.
 *
 * It exists for the toast raised for a *condition* rather than an event: a
 * poller that cannot reach its service, an upload still running. `timeout`
 * cannot express those, because the caller does not know when they will end.
 */
export interface AtIToastHandle {
    /** Unique for the lifetime of the page, and never reused. */
    readonly id: number;
    /**
     * Removes the toast, with the same dismissal animation a tap plays.
     *
     * Safe to call twice, and safe after the toast has already gone -- timed
     * out, tapped away, or removed with its toaster. There is simply nothing
     * left to remove.
     */
    dismiss(): Promise<void>;
}
export type AtIToastType = 'success' | 'error' | 'info' | 'warning' | 'default';
export type AtIToastPosition = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
export declare const DEFAULT_TOAST_OPTIONS: AtIToastOptions;
