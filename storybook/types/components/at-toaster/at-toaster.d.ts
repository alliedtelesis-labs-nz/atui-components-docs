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
    private timers;
    private frame;
    /**
     * Adds a new toast to the toaster container
     * This method is called from the ToasterService when a new toast is created.
     *
     * @param toast The toast to add
     */
    addToast(toast: AtIToast): Promise<void>;
    /**
     * A modal at-dialog sits in the browser's top layer, which no z-index can
     * reach — showing the host as a manual popover joins that layer, and
     * re-showing on every toast re-inserts it above dialogs opened since.
     */
    private raiseAboveModals;
    private remainingFor;
    /**
     * Paints the countdown bars and nothing else — the setTimeout in addToast
     * still decides when a toast goes, so a toast in a background tab (where
     * rAF is suspended) expires on the same schedule it always did.
     *
     * Reading the position from the clock every frame is also what survives
     * raiseAboveModals: hiding and re-showing the popover restarts CSS
     * animations, so a keyframed bar would jump back to full whenever another
     * toast arrived.
     */
    private paint;
    private scheduleFrame;
    private attachBar;
    /**
     * A toast the user is hovering or has tabbed into is one they are reading
     * or reaching for, so the clock stops rather than pulling the message out
     * from under them.
     *
     * Pointer and keyboard are independent holds, tracked separately: letting
     * go of one while the other still has the toast must not restart the clock.
     */
    private setHold;
    private pause;
    private resume;
    /**
     * Focus is delegated from the container rather than bound per toast: the
     * events bubble, and focusout fires before the new target takes focus, so
     * relatedTarget is the only way to tell a move within a toast from a move
     * out of it.
     */
    private handleFocusShift;
    private clearTimer;
    componentDidLoad(): void;
    disconnectedCallback(): void;
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
    /**
     * The action is offered for as long as the toast stands, so taking it takes
     * the toast down with it -- an Undo that stays on screen after it has been
     * used invites a second, meaningless click.
     */
    private clickActionButton;
    private classSet;
    private hasCountdown;
    /**
     * Renders the toaster container and all active toasts.
     * Each toast is wrapped with <at-message> for UI presentation.
     */
    render(): any;
}
