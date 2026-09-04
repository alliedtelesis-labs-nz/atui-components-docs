import { Host, h, } from "@stencil/core";
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
export class AtStepper {
    el;
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
        return (h(Host, { key: '85ff22b5a5aa94486a51b0d4101821fe5aad3116', class: "flex flex-col gap-16" }, h("div", { key: '569118a9f3c7b504c7d34e3e097891938b437616', role: "list", "aria-label": this.stepper_label, "data-name": "stepper", class: `flex ${isVertical ? 'flex-col' : 'flex-row items-start'}` }, this.steps ? (this.steps.map((step, index) => (h("at-stepper-item", { label: step.label, description: step.description, optional: step.optional, state: states[index], index: index, is_last: index === this.count - 1, orientation: this.orientation, navigable: this.isNavigable(states[index]) })))) : (h("slot", null))), this.show_navigation && this.renderNavigation()));
    }
    static get is() { return "at-stepper"; }
    static get properties() {
        return {
            "steps": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AtStepperStep[]",
                    "resolved": "AtStepperStep[]",
                    "references": {
                        "AtStepperStep": {
                            "location": "local",
                            "path": "/home/runner/work/atui-components/atui-components/atui-components-stencil/src/components/at-stepper/at-stepper.tsx",
                            "id": "src/components/at-stepper/at-stepper.tsx::AtStepperStep"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Steps described declaratively. When set, `at-stepper-item` children are not\nneeded \u2014 the stepper renders the steps itself."
                },
                "getter": false,
                "setter": false
            },
            "current": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Zero-based index of the current step. Steps before it are `completed`,\nafter it `pending`, unless a step sets its own state."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "current",
                "defaultValue": "0"
            },
            "orientation": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "AtStepperOrientation",
                    "resolved": "\"horizontal\" | \"vertical\"",
                    "references": {
                        "AtStepperOrientation": {
                            "location": "import",
                            "path": "./at-stepper-item/at-stepper-item",
                            "id": "src/components/at-stepper/at-stepper-item/at-stepper-item.tsx::AtStepperOrientation",
                            "referenceLocation": "AtStepperOrientation"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout of the stepper."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "orientation",
                "defaultValue": "'horizontal'"
            },
            "linear": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the sequence is enforced.\n\n- `true` (linear) \u2014 steps cannot be jumped to; only visited steps\n  (completed, success, skipped or errored) can be returned to, so the user\n  cannot skip ahead past validation.\n- `false` (non-linear) \u2014 any step can be selected directly."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "linear",
                "defaultValue": "true"
            },
            "stepper_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accessible label for the stepper, announced before the step list."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "stepper_label",
                "defaultValue": "'Progress'"
            },
            "show_navigation": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Renders a Back / Next / Submit control row beneath the steps. Off by\ndefault \u2014 a flow that already has its own footer keeps using it."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "show_navigation",
                "defaultValue": "false"
            },
            "next_disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables Next and Submit. This is how a linear flow gates advancing on the\ncurrent step's validation: the stepper cannot know whether a step's form is\nvalid, so the host owns that judgement and reports it here."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "next_disabled",
                "defaultValue": "false"
            },
            "prev_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label of the back control."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "prev_label",
                "defaultValue": "'Back'"
            },
            "next_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label of the forward control, on every step but the last."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "next_label",
                "defaultValue": "'Next'"
            },
            "submit_label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Label of the forward control on the last step."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "submit_label",
                "defaultValue": "'Submit'"
            }
        };
    }
    static get events() {
        return [{
                "method": "atuiStepChange",
                "name": "atuiStepChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a step is selected, with the zero-based index of that step.\nThe stepper does not move itself \u2014 the host owns `current`, so a flow can\nvalidate or persist before advancing."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "atuiPrev",
                "name": "atuiPrev",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the back control is pressed."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "atuiNext",
                "name": "atuiNext",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the forward control is pressed on any step but the last."
                },
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                }
            }, {
                "method": "atuiSubmit",
                "name": "atuiSubmit",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the forward control is pressed on the last step."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "getCurrentStep": {
                "complexType": {
                    "signature": "() => Promise<number>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<number>"
                },
                "docs": {
                    "text": "Returns the zero-based index of the current step.",
                    "tags": []
                }
            },
            "getIsComplete": {
                "complexType": {
                    "signature": "() => Promise<boolean>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<boolean>"
                },
                "docs": {
                    "text": "Returns true when every non-optional step is `completed`, `success` or\n`skipped`, so a host can gate its Submit without tracking step state\nitself.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "current",
                "methodName": "handleStateChange"
            }, {
                "propName": "orientation",
                "methodName": "handleStateChange"
            }, {
                "propName": "linear",
                "methodName": "handleStateChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "click",
                "method": "handleItemClick",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "keydown",
                "method": "handleItemKeydown",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
