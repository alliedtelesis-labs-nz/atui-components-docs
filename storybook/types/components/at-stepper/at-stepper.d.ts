import { EventEmitter } from '../../stencil-public-runtime';
import type { AtStepperItemState, AtStepperOrientation } from './at-stepper-item/at-stepper-item';
/**
 * A step described declaratively, for the `steps` array shortcut.
 */
export interface AtStepperStep {
    label: string;
    description?: string;
    optional?: boolean;
    /**
     * Overrides the state derived from `current`. Use for `success`, `error`
     * and `skipped`, which the stepper cannot infer from position alone.
     */
    state?: AtStepperItemState;
}
/**
 * @category Navigation
 * @description A stepper for multi-step and wizard flows. Shows where the user is in a sequence, which steps are done, and which failed. Use when a task is split across several screens that must be completed in order; prefer `at-tabs` when the sections are independent and can be visited in any order, and `at-timeline` when the entries are historical and there is no current position.
 *
 * Steps can be slotted as `at-stepper-item` children for full control, or passed
 * as a `steps` array for the common case of plain labels. The stepper assigns
 * each child its index, state and orientation, so children never have to be kept
 * in sync by hand.
 *
 * @slot - `at-stepper-item` children, used when the `steps` prop is not set.
 */
export declare class AtStepper {
    el: HTMLElement;
    /**
     * Steps described declaratively. When set, `at-stepper-item` children are not
     * needed — the stepper renders the steps itself.
     */
    steps?: AtStepperStep[];
    /**
     * Zero-based index of the current step. Steps before it are `completed`,
     * after it `pending`, unless a step sets its own state.
     */
    current: number;
    /**
     * Layout of the stepper.
     */
    orientation: AtStepperOrientation;
    /**
     * Whether the sequence is enforced.
     *
     * - `true` (linear) — steps cannot be jumped to; only visited steps
     *   (completed, success, skipped or errored) can be returned to, so the user
     *   cannot skip ahead past validation.
     * - `false` (non-linear) — any step can be selected directly.
     */
    linear: boolean;
    /**
     * Accessible label for the stepper, announced before the step list.
     */
    stepper_label: string;
    /**
     * Emitted when a step is selected, with the zero-based index of that step.
     * The stepper does not move itself — the host owns `current`, so a flow can
     * validate or persist before advancing.
     */
    atuiStepChange: EventEmitter<number>;
    /**
     * Renders a Back / Next / Submit control row beneath the steps. Off by
     * default — a flow that already has its own footer keeps using it.
     */
    show_navigation: boolean;
    /**
     * Disables Next and Submit. This is how a linear flow gates advancing on the
     * current step's validation: the stepper cannot know whether a step's form is
     * valid, so the host owns that judgement and reports it here.
     */
    next_disabled: boolean;
    /**
     * Label of the back control.
     */
    prev_label: string;
    /**
     * Label of the forward control, on every step but the last.
     */
    next_label: string;
    /**
     * Label of the forward control on the last step.
     */
    submit_label: string;
    /**
     * Emitted when the back control is pressed.
     */
    atuiPrev: EventEmitter<number>;
    /**
     * Emitted when the forward control is pressed on any step but the last.
     */
    atuiNext: EventEmitter<number>;
    /**
     * Emitted when the forward control is pressed on the last step.
     */
    atuiSubmit: EventEmitter<void>;
    /**
     * Returns the zero-based index of the current step.
     */
    getCurrentStep(): Promise<number>;
    /**
     * Returns true when every non-optional step is `completed`, `success` or
     * `skipped`, so a host can gate its Submit without tracking step state
     * itself.
     */
    getIsComplete(): Promise<boolean>;
    componentDidLoad(): void;
    componentDidUpdate(): void;
    handleStateChange(): void;
    private stepAt;
    private get itemEls();
    private get count();
    /**
     * Derives each step's state from `current`, letting an explicitly set state
     * win. Position tells us completed/current/pending; `success`, `error` and
     * `skipped` can only come from the caller, so they must not be overwritten.
     */
    private resolvedStates;
    /**
     * A step is reachable by direct selection when the stepper is non-linear, or
     * — in linear mode — when it has already been visited: completed, success,
     * skipped or errored. The user can go back and edit (an errored step is
     * exactly the one they need to reach) but not skip ahead past validation.
     */
    private isNavigable;
    /**
     * Pushes index, state, orientation and navigability onto slotted children.
     * Doing it here rather than in each child keeps the sequence the single
     * source of truth — a child cannot know its own position.
     */
    private syncChildren;
    private handleSelect;
    /**
     * Resolves the step an event happened in. Delegating from the host covers
     * slotted children and array-rendered steps with the same code path.
     */
    private itemFromEvent;
    handleItemClick(event: MouseEvent): void;
    handleItemKeydown(event: KeyboardEvent): void;
    private renderNavigation;
    render(): any;
}
