'use strict';

var index = require('./index-COV7xI6A.js');
var classlist = require('./classlist-BPb95vgj.js');

const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
const getLayoutClass = classlist.classlist('gap-4', layoutVariantsConfig);
const AtRadioGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
    get el() { return index.getElement(this); }
    watchValue(newValue) {
        this.updateSlottedRadiosState(newValue);
    }
    radioEls = [];
    radioGroupId = `radiogroup-${Math.random().toString(36).substring(2, 11)}`;
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
            return this.options.map((option) => (index.h("at-radio", { label: option.label, hint_text: option.hint_text, value: option.value, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, checked: this.value === option.value, onAtuiChange: (event) => {
                    event.stopPropagation();
                    if (!this.disabled && !this.readonly) {
                        this.handleChange(option.value);
                    }
                }, group: this.label || this.radioGroupId, ref: (el) => this.radioEls.push(el) })));
        }
    }
    getSlottedRadios() {
        return Array.from(this.el.querySelectorAll('at-radio'));
    }
    componentDidLoad() {
        this.initializeSlottedRadios();
        this.updateSlottedRadiosState(this.value);
    }
    initializeSlottedRadios() {
        const slottedRadios = this.getSlottedRadios();
        const groupName = this.label || this.radioGroupId;
        slottedRadios.forEach((radio) => {
            if (!radio.getAttribute('group')) {
                radio.setAttribute('group', groupName);
            }
            if (!radio.getAttribute('value')) {
                const value = `radio-${Math.random().toString(36).substring(2, 11)}`;
                radio.setAttribute('value', value);
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
        return (index.h(index.Host, { key: '4a3c72ade592ed5d299c65cf12f369bf378e6887', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, index.h("div", { key: 'c897aeabce8d243dc12a48bb1e2eb4f7e3561f9c', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '2ee4d2a87f27cb88da1577d2995de562d68a5a52', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'ff6e25cca2cb62c673aa0493a18e468ddca797bd', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'f3b85e23fa6464217f86ae349de17ad29efb07bd', class: "text-muted inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), index.h("ul", { key: 'c345837269c048866c4d76171cc4c4c3ab46fafb', class: classname, "data-name": "radio-group-options" }, index.h("slot", { key: '90897d2b22a4255c36b3184b24eb65fe95605e51' }), this.getRadios &&
            this.getRadios.map((radio) => (index.h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (index.h("span", { key: '21bdee7b9967f23bdd1d6000a27b6bbd494d6b00', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "value": [{
                "watchValue": 0
            }]
    }; }
};

exports.at_radio_group = AtRadioGroup;
