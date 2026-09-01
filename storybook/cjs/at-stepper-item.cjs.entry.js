'use strict';

var index = require('./index-BCGHtseN.js');

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
    current: 'text-primary font-medium',
    completed: 'text-primary',
    success: 'text-primary',
    error: 'text-error font-medium',
    skipped: 'text-secondary',
};
const AtStepperItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h("span", { class: "flex h-24 w-24 shrink-0 items-center justify-center rounded-full", "data-name": "stepper-marker", "aria-hidden": "true" }, index.h("span", { class: `rounded-full ${dotVariants[this.state]}`, "data-name": "stepper-dot" })));
    }
    renderConnector() {
        if (this.is_last) {
            return null;
        }
        return (index.h("span", { "aria-hidden": "true", "data-name": "stepper-connector",
            // The negative margin pulls the line into the transparent
            // padding of the marker box either side of it, so the rail meets
            // the dots rather than stopping short of them.
            class: `${this.orientation === 'vertical'
                ? '-my-4 w-0 flex-1 border-l-2'
                : '-mx-4 h-0 min-w-16 flex-1 border-t-2'} ${connectorVariants[this.state]}` }));
    }
    render() {
        const isVertical = this.orientation === 'vertical';
        return (index.h(index.Host, { key: '2d5a6c40d04372a3482f1e30be1ef7978453d31a', role: "listitem", "aria-current": this.state === 'current' ? 'step' : undefined, "data-state": this.state, "data-name": "stepper-item", class: `flex min-w-0 ${isVertical
                ? 'flex-row items-stretch gap-8'
                : `flex-col gap-4 ${this.is_last ? '' : 'flex-1'}`} ${this.navigable
                ? 'focus-visible:ring-active-glow cursor-pointer rounded-sm outline-0 focus-visible:ring'
                : ''}`, tabindex: this.navigable ? 0 : undefined }, index.h("span", { key: '85028436f00dbb4b818174209da534a730ce0eb5', class: `flex shrink-0 ${isVertical
                ? 'w-24 flex-col items-center'
                : 'items-center'}`, "data-name": "stepper-rail" }, this.renderMarker(), this.renderConnector()), index.h("span", { key: '8386bd4892c53ee5503c4143e400339201eda742', class: `flex min-w-0 flex-col gap-2 ${isVertical ? (this.is_last ? '' : 'pb-16') : 'pr-16'}` }, index.h("span", { key: '18fbf2e1fe345bce0e6aee8f9869b0081e4e83c0', class: `truncate text-sm font-medium ${labelVariants[this.state]}`, "data-name": "stepper-label" }, this.label, this.optional && (index.h("span", { key: '22b3e8a7006ba6650360bc868eeeb2ffc0971cf9', class: "text-secondary ml-4 text-xs font-normal", "data-name": "stepper-optional" }, "Optional")), this.state === 'skipped' && (index.h("at-badge", { key: 'dd1df80f8c0a1ffdd5a05f248708ea635045cdb7', class: "ml-4", label: "Skipped", size: "sm", "data-name": "stepper-skipped" }))), this.description && (index.h("span", { key: '77fcfef6db553cace1c64b3c8986a6f5422578c3', class: "text-secondary truncate text-xs", "data-name": "stepper-description" }, this.description)), index.h("slot", { key: 'cabae862a99280fc7e59127479614ae26a96b2fd' }))));
    }
};

exports.at_stepper_item = AtStepperItem;
