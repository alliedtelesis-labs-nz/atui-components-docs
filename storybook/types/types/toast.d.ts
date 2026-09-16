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
    /**
     * Draws a countdown bar along the bottom edge, running down with the
     * timeout. Opt in where the remaining time is a deadline the user is meant
     * to act inside -- an `action` they may want to take, most of all an
     * `Undo`. On a toast that only reports, it is chrome counting down to
     * nothing.
     */
    showProgress?: boolean;
    /**
     * Stops the timeout while the pointer is over the toast. Opt in where the
     * toast carries something the user must finish reading or reach for -- an
     * `action`, most of all an `Undo`. Left off, a toast under a resting
     * pointer still expires on schedule, which is what an automated pointer
     * parked over the corner needs. Focus always holds the toast, opted in or
     * not, so a keyboard user can still reach the action.
     */
    pauseOnHover?: boolean;
    action?: AtIToastAction;
}
/**
 * A single action offered on the toast itself, which is how the friction
 * ladder's low tier is served: act now, then offer `Undo` here rather than
 * pre-confirming. Taking the action dismisses the toast.
 */
export interface AtIToastAction {
    label: string;
    onTrigger: () => void;
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
