import { r as registerInstance, a as getElement, h, H as Host } from './index-vSlhROK9.js';

const dotVariants = {
    pending: 'bg-disabled-foreground/40 h-8 w-8',
    // The glow marks "you are here" without relying on colour alone — the same
    // ring the design system uses for focus.
    current: 'bg-active-accent ring-active-glow h-12 w-12 ring',
    // Completed means "behind you", not "validated" — the stepper cannot know
    // whether a step's form passed, so it stays on the active accent and leaves
    // success/error semantics to the explicit host-set states.
    completed: 'bg-active-accent h-12 w-12',
    success: 'bg-feedback-success-accent h-12 w-12',
    error: 'bg-feedback-error-accent h-12 w-12',
    // Dashed and hollow is the affordance that reads as "passed over" rather
    // than "not reached", which a plain hollow dot would not distinguish.
    skipped: 'border-muted h-12 w-12 border border-dashed bg-transparent',
};
// The connector takes the state of the step behind it, so the rail itself shows
// where the flow succeeded, failed or was passed over.
const connectorVariants = {
    pending: 'border-muted',
    current: 'border-muted',
    completed: 'border-active-accent',
    success: 'border-feedback-success-accent',
    error: 'border-feedback-error-accent',
    skipped: 'border-muted',
};
const labelVariants = {
    pending: 'text-secondary',
    current: 'text-foreground font-medium',
    completed: 'text-foreground',
    success: 'text-foreground',
    error: 'text-error font-medium',
    skipped: 'text-secondary',
};
const AtStepperItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /**
     * Label for the step.
     */
    label;
    /**
     * Supporting line beneath the label.
     */
    description;
    /**
     * State of the step. Assigned by the parent `at-stepper` from its `current`
     * index unless set explicitly — an explicit value always wins, which is how a
     * step reports `error` or `skipped`.
     */
    state = 'pending';
    /**
     * Zero-based position of the step, assigned by the parent.
     */
    index = 0;
    /**
     * Whether this is the final step, assigned by the parent. The last step draws
     * no connector, since there is nothing after it to connect to.
     */
    is_last = false;
    /**
     * Marks the step as optional, which allows it to be skipped in linear mode.
     */
    optional = false;
    /**
     * Layout of the parent stepper, assigned by it.
     */
    orientation = 'horizontal';
    /**
     * Whether the step can be navigated to directly. Assigned by the parent from
     * its linear/non-linear mode.
     */
    navigable = false;
    renderMarker() {
        return (h("span", { class: "flex h-24 w-24 shrink-0 items-center justify-center rounded-full", "data-name": "stepper-marker", "aria-hidden": "true" }, h("span", { class: `rounded-full ${dotVariants[this.state]}`, "data-name": "stepper-dot" })));
    }
    renderConnector() {
        if (this.is_last) {
            return null;
        }
        return (h("span", { "aria-hidden": "true", "data-name": "stepper-connector",
            // The negative margin pulls the line into the transparent
            // padding of the marker box either side of it, so the rail meets
            // the dots rather than stopping short of them.
            class: `${this.orientation === 'vertical'
                ? '-my-4 w-0 flex-1 border-l-2'
                : '-mx-4 h-0 min-w-16 flex-1 border-t-2'} ${connectorVariants[this.state]}` }));
    }
    render() {
        const isVertical = this.orientation === 'vertical';
        return (h(Host, { key: 'da74602f4ffab3205a1010be69422c5a9cd10984', role: "listitem", "aria-current": this.state === 'current' ? 'step' : undefined, "data-state": this.state, "data-name": "stepper-item", class: `flex min-w-0 ${isVertical
                ? 'flex-row items-stretch gap-8'
                : `flex-col gap-4 ${this.is_last ? '' : 'flex-1'}`} ${this.navigable
                ? 'focus-visible:ring-active-glow cursor-pointer rounded-sm outline-0 focus-visible:ring'
                : ''}`, tabindex: this.navigable ? 0 : undefined }, h("span", { key: '25c3bf4acffcb68f0a60cb81d054bd949906a901', class: `flex shrink-0 ${isVertical
                ? 'w-24 flex-col items-center'
                : 'items-center'}`, "data-name": "stepper-rail" }, this.renderMarker(), this.renderConnector()), h("span", { key: '35ff0e492d1b90e39ec8c2efacd7171adc315868', class: `flex min-w-0 flex-col gap-2 ${isVertical ? (this.is_last ? '' : 'pb-16') : 'pr-16'}` }, h("span", { key: '854c094d965eb2b178ee1b7e03aaa99cab73c665', class: `truncate text-sm font-medium ${labelVariants[this.state]}`, "data-name": "stepper-label" }, this.label, this.optional && (h("span", { key: '2244bfd5a0df358c0a8b865f94d6f8cdddfad3a3', class: "text-secondary ml-4 text-xs font-normal", "data-name": "stepper-optional" }, "Optional")), this.state === 'skipped' && (h("at-badge", { key: 'fa670306d09eafb2d79d9c7e487e80d6158cbe11', class: "ml-4", label: "Skipped", size: "sm", "data-name": "stepper-skipped" }))), this.description && (h("span", { key: '4567162197997252474ed6f0e4f63b88c0727b81', class: "text-secondary truncate text-xs", "data-name": "stepper-description" }, this.description)), h("slot", { key: '8b3bd43977d5058ab3442553fdc557e5b974c070' }))));
    }
};

export { AtStepperItem as at_stepper_item };
