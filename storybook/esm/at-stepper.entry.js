import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-B2z78KBX.js';

const AtStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiStepChange = createEvent(this, "atuiStepChange", 7);
        this.atuiPrev = createEvent(this, "atuiPrev", 7);
        this.atuiNext = createEvent(this, "atuiNext", 7);
        this.atuiSubmit = createEvent(this, "atuiSubmit", 7);
    }
    get el() { return getElement(this); }
    /**
     * Steps described declaratively. When set, `at-stepper-item` children are not
     * needed — the stepper renders the steps itself.
     */
    steps;
    /**
     * Zero-based index of the current step. Steps before it are `completed`,
     * after it `pending`, unless a step sets its own state.
     */
    current = 0;
    /**
     * Layout of the stepper.
     */
    orientation = 'horizontal';
    /**
     * Whether the sequence is enforced.
     *
     * - `true` (linear) — steps cannot be jumped to; only visited steps
     *   (completed, success, skipped or errored) can be returned to, so the user
     *   cannot skip ahead past validation.
     * - `false` (non-linear) — any step can be selected directly.
     */
    linear = true;
    /**
     * Accessible label for the stepper, announced before the step list.
     */
    stepper_label = 'Progress';
    /**
     * Emitted when a step is selected, with the zero-based index of that step.
     * The stepper does not move itself — the host owns `current`, so a flow can
     * validate or persist before advancing.
     */
    atuiStepChange;
    /**
     * Renders a Back / Next / Submit control row beneath the steps. Off by
     * default — a flow that already has its own footer keeps using it.
     */
    show_navigation = false;
    /**
     * Disables Next and Submit. This is how a linear flow gates advancing on the
     * current step's validation: the stepper cannot know whether a step's form is
     * valid, so the host owns that judgement and reports it here.
     */
    next_disabled = false;
    /**
     * Label of the back control.
     */
    prev_label = 'Back';
    /**
     * Label of the forward control, on every step but the last.
     */
    next_label = 'Next';
    /**
     * Label of the forward control on the last step.
     */
    submit_label = 'Submit';
    /**
     * Emitted when the back control is pressed.
     */
    atuiPrev;
    /**
     * Emitted when the forward control is pressed on any step but the last.
     */
    atuiNext;
    /**
     * Emitted when the forward control is pressed on the last step.
     */
    atuiSubmit;
    /**
     * Returns the zero-based index of the current step.
     */
    async getCurrentStep() {
        return this.current;
    }
    /**
     * Returns true when every non-optional step is `completed`, `success` or
     * `skipped`, so a host can gate its Submit without tracking step state
     * itself.
     */
    async getIsComplete() {
        return this.resolvedStates().every((state, index) => state === 'completed' ||
            state === 'success' ||
            state === 'skipped' ||
            this.stepAt(index)?.optional === true);
    }
    componentDidLoad() {
        this.syncChildren();
    }
    componentDidUpdate() {
        this.syncChildren();
    }
    handleStateChange() {
        this.syncChildren();
    }
    stepAt(index) {
        return this.steps?.[index];
    }
    get itemEls() {
        return Array.from(this.el.querySelectorAll('at-stepper-item'));
    }
    get count() {
        return this.steps?.length ?? this.itemEls.length;
    }
    /**
     * Derives each step's state from `current`, letting an explicitly set state
     * win. Position tells us completed/current/pending; `success`, `error` and
     * `skipped` can only come from the caller, so they must not be overwritten.
     */
    resolvedStates() {
        const explicit = this.steps
            ? this.steps.map((step) => step.state)
            : this.itemEls.map((el) => el.state === 'success' ||
                el.state === 'error' ||
                el.state === 'skipped'
                ? el.state
                : undefined);
        return Array.from({ length: this.count }, (_, index) => {
            if (explicit[index]) {
                return explicit[index];
            }
            if (index < this.current) {
                return 'completed';
            }
            return index === this.current ? 'current' : 'pending';
        });
    }
    /**
     * A step is reachable by direct selection when the stepper is non-linear, or
     * — in linear mode — when it has already been visited: completed, success,
     * skipped or errored. The user can go back and edit (an errored step is
     * exactly the one they need to reach) but not skip ahead past validation.
     */
    isNavigable(state) {
        if (!this.linear) {
            return true;
        }
        return (state === 'completed' ||
            state === 'success' ||
            state === 'skipped' ||
            state === 'error');
    }
    /**
     * Pushes index, state, orientation and navigability onto slotted children.
     * Doing it here rather than in each child keeps the sequence the single
     * source of truth — a child cannot know its own position.
     */
    syncChildren() {
        if (this.steps) {
            return;
        }
        const states = this.resolvedStates();
        this.itemEls.forEach((el, index) => {
            el.index = index;
            el.state = states[index];
            el.orientation = this.orientation;
            el.navigable = this.isNavigable(states[index]);
            el.is_last = index === this.itemEls.length - 1;
        });
    }
    handleSelect(index, state) {
        if (!this.isNavigable(state) || index === this.current) {
            return;
        }
        this.atuiStepChange.emit(index);
    }
    /**
     * Resolves the step an event happened in. Delegating from the host covers
     * slotted children and array-rendered steps with the same code path.
     */
    itemFromEvent(event) {
        const item = event.target.closest('at-stepper-item');
        return item && this.el.contains(item)
            ? item
            : null;
    }
    handleItemClick(event) {
        const item = this.itemFromEvent(event);
        if (!item) {
            return;
        }
        // A control slotted into a step (a retry button, a link) owns its own
        // click — activating it must not also change the step.
        const interactive = event.target.closest('at-button, button, a, input, select, textarea, [role="button"]');
        if (interactive && interactive !== item) {
            return;
        }
        this.handleSelect(item.index, item.state);
    }
    handleItemKeydown(event) {
        if (event.key !== 'Enter' && event.key !== ' ') {
            return;
        }
        const item = this.itemFromEvent(event);
        // Only when the step itself is focused — keystrokes inside slotted
        // content (an input mid-form) must keep their meaning.
        if (!item || event.target !== item) {
            return;
        }
        event.preventDefault();
        this.handleSelect(item.index, item.state);
    }
    renderNavigation() {
        const isLastStep = this.current >= this.count - 1;
        return (h("div", { class: "flex items-center justify-end gap-8", "data-name": "stepper-navigation" }, h("at-button", { type: "secondaryOutline", label: this.prev_label, disabled: this.current <= 0, "data-name": "stepper-prev", onAtuiClick: () => this.atuiPrev.emit(this.current) }), h("at-button", { type: "primary", label: isLastStep ? this.submit_label : this.next_label, disabled: this.next_disabled, "data-name": "stepper-next", onAtuiClick: () => isLastStep
                ? this.atuiSubmit.emit()
                : this.atuiNext.emit(this.current) })));
    }
    render() {
        const states = this.resolvedStates();
        const isVertical = this.orientation === 'vertical';
        return (h(Host, { key: 'f54f522e6a0ccbeaf51a206a17ab8359ec2300e9', class: "flex flex-col gap-16" }, h("div", { key: '33018e4dacd4ff6ea79ed1b13b1692c30572c664', role: "list", "aria-label": this.stepper_label, "data-name": "stepper", class: `flex ${isVertical ? 'flex-col' : 'flex-row items-start'}` }, this.steps ? (this.steps.map((step, index) => (h("at-stepper-item", { label: step.label, description: step.description, optional: step.optional, state: states[index], index: index, is_last: index === this.count - 1, orientation: this.orientation, navigable: this.isNavigable(states[index]) })))) : (h("slot", null))), this.show_navigation && this.renderNavigation()));
    }
    static get watchers() { return {
        "current": [{
                "handleStateChange": 0
            }],
        "orientation": [{
                "handleStateChange": 0
            }],
        "linear": [{
                "handleStateChange": 0
            }]
    }; }
};

export { AtStepper as at_stepper };
