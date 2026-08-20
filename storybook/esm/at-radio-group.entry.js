import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-_QbJz5mf.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
const getLayoutClass = classlist('gap-4', layoutVariantsConfig);
const AtRadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label of the radio group.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     * Displayed at right of label.
     */
    info_text;
    /**
     * Direction that the radio elements are placed
     */
    layout = 'column';
    /**
     * Disables the radio options but keeps the text readable. Use for global readonly form state.
     */
    disabled;
    /**
     * Disables interaction with atui-radio elements when set
     */
    readonly;
    /**
     * Adds a required * to the label
     */
    required;
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Shown when 'invalid' prop is set
     */
    error_text;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Options displayed in the radio group.
     */
    options;
    /**
     * A string containing the Id of the currently selected radio
     */
    value;
    get el() { return getElement(this); }
    watchValue(newValue) {
        this.updateSlottedRadiosState(newValue);
    }
    radioEls = [];
    slotObserver;
    radioGroupId = `radiogroup-${Math.random().toString(36).substring(2, 11)}`;
    labelId = `${this.radioGroupId}-label`;
    /**
     * Emits an event when active radio element changes. `event.detail` is the ID of the active radio
     */
    atuiChange;
    handleChange(optionId) {
        if (this.value !== optionId) {
            this.value = optionId;
            this.atuiChange.emit(optionId);
        }
    }
    focusAndClickRelativeRadio(relativePosition) {
        const indexOfActiveRadio = this.radioEls.indexOf(this.el.ownerDocument.activeElement);
        const nextRadioEl = this.radioEls[(indexOfActiveRadio + relativePosition + this.radioEls.length) %
            this.radioEls.length];
        nextRadioEl.click();
        nextRadioEl.focus();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                this.focusAndClickRelativeRadio(1);
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                this.focusAndClickRelativeRadio(-1);
                break;
        }
    }
    get getRadios() {
        if (this.options && this.options.length > 0) {
            return this.options.map((option) => (h("at-radio", { label: option.label, hint_text: option.hint_text, value: option.value, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, checked: this.value === option.value, onAtuiChange: (event) => {
                    event.stopPropagation();
                    if (!this.disabled && !this.readonly) {
                        this.handleChange(option.value);
                    }
                }, group: this.label || this.radioGroupId, ref: (el) => this.radioEls.push(el) })));
        }
    }
    /**
     * Radios this group rendered from `options` are excluded: they are already
     * driven by render(), and because their value arrives as a property rather
     * than an attribute, treating them as slotted would stamp a stand-in value
     * over the caller's own. Only the rendered ones sit in an `li`, and no
     * attribute marker can stand in for that - at-radio re-renders its own host
     * and drops anything this group set on it.
     */
    getSlottedRadios() {
        return Array.from(this.el.querySelectorAll('at-radio')).filter((radio) => !radio.closest('li') && !this.radioEls.includes(radio));
    }
    componentDidLoad() {
        this.syncSlottedRadios();
        /**
         * Slotted radios can arrive after this component has loaded - a framework
         * loop or conditional renders them on its own schedule - and a radio that
         * appears later would otherwise never have `value` applied to it, leaving
         * a group with a set value showing nothing selected.
         */
        this.slotObserver = new MutationObserver(() => this.syncSlottedRadios());
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributeFilter: ['value'],
        });
    }
    disconnectedCallback() {
        this.slotObserver?.disconnect();
        this.slotObserver = undefined;
    }
    syncSlottedRadios() {
        this.initializeSlottedRadios();
        this.updateSlottedRadiosState(this.value);
    }
    initializeSlottedRadios() {
        const slottedRadios = this.getSlottedRadios();
        const groupName = this.label || this.radioGroupId;
        slottedRadios.forEach((radio, index) => {
            if (!radio.getAttribute('group')) {
                radio.setAttribute('group', groupName);
            }
            /**
             * A radio with no value of its own still has to be selectable, but the
             * stand-in has to be derivable by the caller: a random id could never
             * be matched by the group's `value`, so such a radio could be clicked
             * and never be selected programmatically.
             */
            if (!radio.value) {
                radio.setAttribute('value', `${groupName}-${index}`);
            }
            if (this.disabled !== undefined) {
                radio.disabled = this.disabled;
            }
            if (this.readonly !== undefined) {
                radio.readonly = this.readonly;
            }
        });
    }
    handleSlottedRadioChange(event) {
        const slottedRadios = this.getSlottedRadios();
        const target = event.target;
        const isSlottedRadio = slottedRadios.includes(target);
        if (!isSlottedRadio)
            return;
        event.stopPropagation();
        if (this.disabled || this.readonly)
            return;
        const optionId = event.detail;
        if (!optionId)
            return;
        this.handleChange(optionId);
        this.updateSlottedRadiosState(optionId);
    }
    updateSlottedRadiosState(selectedOptionId) {
        const slottedRadios = this.getSlottedRadios();
        slottedRadios.forEach((radio) => {
            const radioOptionId = radio.getAttribute('value');
            radio.checked = radioOptionId === selectedOptionId;
        });
    }
    render() {
        const classname = getLayoutClass({
            layout: this.layout,
        });
        // aria-labelledby rather than aria-label: an app with no `label` names the
        // group by setting aria-label on the element itself, and rendering that
        // attribute here would fight with it.
        return (h(Host, { key: 'a9085348c416339d68bafb97546993f6113e0e0d', role: "radiogroup", "aria-labelledby": this.label ? this.labelId : undefined, onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, h("div", { key: '7f4e02efd09e4548d0e75e14cd94f3c205871ac2', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'b52415b331e95190e5df421d6dc241e6935ad574', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '9e4b8ed15d9cc3a1510a3ac9e47bc82d98f61328', id: this.labelId, label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: 'e399530c91783760ac9d3ed289e0e30f1159ab66', class: "text-muted inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), h("ul", { key: '38c0df016bb8ee311f9310a8691daf357c70cd10', class: classname, "data-name": "radio-group-options" }, h("slot", { key: 'e32b84945cfca182f3349c675e047ebe83cdd454' }), this.getRadios &&
            this.getRadios.map((radio) => (h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (h("span", { key: '35102bb08fdf28b6b54e5343e4b525d1dc4d74c3', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "value": [{
                "watchValue": 0
            }]
    }; }
};

export { AtRadioGroup as at_radio_group };
