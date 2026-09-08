declare const _default: {
    title: string;
    argTypes: {
        position: {
            options: string[];
            control: {
                type: string;
            };
        };
        type: {
            options: string[];
            control: {
                type: string;
            };
        };
        message: {
            control: string;
        };
        title: {
            control: string;
        };
        timeout: {
            control: string;
        };
        dismissible: {
            control: string;
        };
        closeButton: {
            control: string;
        };
    };
};
export default _default;
export declare const Default: any;
/**
 * The friction ladder's low tier: act now, then offer the way back on the toast
 * itself rather than pre-confirming. Taking the action dismisses the toast. The
 * countdown bar -- opted into with `showProgress`, which is what an offer with
 * a deadline is for -- says how long it stands, and hovering the toast or
 * tabbing into it stops the clock, resuming with the time that was left.
 */
export declare const WithUndoAction: () => string;
/**
 * A toast for a condition rather than an event: `timeout: 0` so it never
 * expires on its own, and the handle `show` returns is what takes it down when
 * the condition clears. Dismissing twice, or after the toast has been tapped
 * away, does nothing.
 */
export declare const DismissedByHandle: () => string;
/**
 * The pause is not opt-in the way the bar is: hover any timed toast, or tab
 * into it, and the clock stops until you leave, because a toast the user is
 * reading or reaching for should not be pulled out from under them. The bar is
 * on here so the hold is visible; a long timeout so it is easy to see by hand.
 */
export declare const PausesOnHover: () => string;
/**
 * The bar carries the toast's type, drawn from the same accent token as the
 * message icon, so the countdown reads as part of the message rather than as
 * chrome bolted underneath it. Raises all five at once to compare.
 */
export declare const CountdownByType: () => string;
