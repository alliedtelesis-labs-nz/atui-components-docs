'use strict';

var index = require('./index-ToR1OkrH.js');
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
            return this.options.map((option) => (index.h("at-radio", { label: option.label, hint_text: option.hint_text, value: option.value, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, checked: this.value === option.value, onAtuiChange: (event) => {
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
            /**
             * Property before attribute, matching `initializeSlottedRadios`. A
             * framework that binds `value` as a property (Angular `[value]`)
             * reflects no attribute, so reading the attribute alone yields null
             * and the radio can never match — clickable, but never selectable
             * programmatically.
             */
            const radioOptionId = radio.value ?? radio.getAttribute('value');
            radio.checked = radioOptionId === selectedOptionId;
        });
    }
    render() {
        const classname = getLayoutClass({
            layout: this.layout,
        });
        return (index.h(index.Host, { key: '4a98249ffabcf78d58b76de0a924741346ae9d38', role: "radiogroup", "aria-labelledby": this.label ? this.labelId : undefined, onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, index.h("div", { key: '5066b5ea791ff2f5c8bc84c81c1083328c510331', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '2ed8510b492100cdd4cf45da09ea622b1904fbbe', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '78876986272d370a0996994ff3c609531fc9ae3b', id: this.labelId, label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'd89cd1b756a63280d58e51ce1b43d80d02eaae05', class: "text-muted inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), index.h("ul", { key: '9fc884af858cb657509135f01898e22b08680bd7', class: classname, "data-name": "radio-group-options" }, index.h("slot", { key: '236778ca9605a864969dc901dc371b2c9a3d8d9f' }), this.getRadios &&
            this.getRadios.map((radio) => (index.h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (index.h("span", { key: '87d695e838b92ccb4205a987e4c75b53719295fa', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "value": [{
                "watchValue": 0
            }]
    }; }
};

exports.at_radio_group = AtRadioGroup;
