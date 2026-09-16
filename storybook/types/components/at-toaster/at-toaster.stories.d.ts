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
        showProgress: {
            control: string;
        };
        pauseOnHover: {
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
 * a deadline is for -- says how long it stands. `pauseOnHover` belongs on a
 * toast like this one too: the offer should not expire under the pointer of
 * someone deciding whether to take it.
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
 * `pauseOnHover` opts the toast into stopping its clock under the pointer,
 * resuming with the time that was left. Off by default, so a toast under a
 * resting pointer still expires on schedule. Tabbing in always holds the toast
 * whether or not you opt in, since that is how a keyboard user reaches the
 * action at all. The bar is on here so the hold is visible.
 *
 * Raises both to compare: hover each in turn and watch only one bar stop.
 */
export declare const PausesOnHover: () => string;
/**
 * The bar carries the toast's type, drawn from the same accent token as the
 * message icon, so the countdown reads as part of the message rather than as
 * chrome bolted underneath it. Raises all five at once to compare.
 */
export declare const CountdownByType: () => string;
