/**
 * State of a single step.
 *
 * `pending`, `current` and `completed` are positional — the parent stepper
 * derives them from its `current` index. The rest are semantic claims only the
 * host can make, so they must be set explicitly:
 *
 * - `pending` — not reached yet.
 * - `current` — where the user is now.
 * - `completed` — behind the current step; says nothing about validity.
 * - `success` — the host verified this step's outcome.
 * - `error` — reached, but its input failed validation.
 * - `skipped` — an optional step the user chose to pass over.
 */
export type AtStepperItemState = 'pending' | 'current' | 'completed' | 'success' | 'error' | 'skipped';
export type AtStepperOrientation = 'horizontal' | 'vertical';
/**
 * @category Navigation
 * @description A single step within an `at-stepper`. Renders a state dot and the connector running to the next step, with a label and optional description. Its `state`, `index` and `is_last` are normally assigned by the parent `at-stepper`; set them directly only when driving the stepper entirely from markup.
 *
 * @slot - Additional content beneath the label, such as a description or inline form.
 */
export declare class AtStepperItem {
    el: HTMLElement;
    /**
     * Label for the step.
     */
    label?: string;
    /**
     * Supporting line beneath the label.
     */
    description?: string;
    /**
     * State of the step. Assigned by the parent `at-stepper` from its `current`
     * index unless set explicitly — an explicit value always wins, which is how a
     * step reports `error` or `skipped`.
     */
    state: AtStepperItemState;
    /**
     * Zero-based position of the step, assigned by the parent.
     */
    index: number;
    /**
     * Whether this is the final step, assigned by the parent. The last step draws
     * no connector, since there is nothing after it to connect to.
     */
    is_last: boolean;
    /**
     * Marks the step as optional, which allows it to be skipped in linear mode.
     */
    optional?: boolean;
    /**
     * Layout of the parent stepper, assigned by it.
     */
    orientation: AtStepperOrientation;
    /**
     * Whether the step can be navigated to directly. Assigned by the parent from
     * its linear/non-linear mode.
     */
    navigable: boolean;
    private renderMarker;
    private renderConnector;
    render(): any;
}
