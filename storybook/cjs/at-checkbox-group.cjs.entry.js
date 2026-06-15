'use strict';

var index = require('./index--r5sCsiV.js');
var classlist = require('./classlist-BPb95vgj.js');

const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col gap-4',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
const AtCheckboxGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Label of the checkbox group.
     */
    label;
    /**
     * Info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text;
    /**
     * Hint to be placed below the label
     */
    hint_text;
    /**
     * Displayed when the input is invalid
     */
    error_text;
    /**
     * Disables interaction with the checkbox
     */
    disabled;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Adds a required * to the label
     */
    required;
    /**
     * Options displayed in the checkbox group.
     */
    options;
    updateSelected() {
        this.options.forEach((option) => {
            if (option.checked === true && !this.value.includes(option.value)) {
                this.value.push(option.value);
            }
            else if (option.checked === false &&
                this.value.includes(option.value)) {
                this.value = this.value.filter((selection) => selection !== option.value);
            }
        });
    }
    /**
     * Sets the layout of the checkbox-group
     */
    layout = 'column';
    /**
     * A list of strings, containing the Id's of the currently selected checkboxes
     */
    value = [];
    get el() { return index.getElement(this); }
    checkboxEls = [];
    onValueChange() {
        if (!this.options) {
            this.el
                .querySelectorAll('at-checkbox')
                .forEach((checkboxEl) => {
                checkboxEl.checked =
                    this.value?.includes(checkboxEl.value) ?? false;
            });
        }
    }
    /**
     * Emits an event containing the 'selected' prop when changed
     */
    atuiChange;
    formControlSelected = null;
    componentDidLoad() {
        if (!this.options) {
            requestAnimationFrame(() => {
                this.setupOptionElements();
            });
        }
    }
    get getCheckBoxes() {
        if (this.options) {
            if (this.formControlSelected !== null) {
                this.value = this.formControlSelected;
                this.formControlSelected = null;
            }
            return this.options.map((option) => (index.h("at-checkbox", { value: option.value, label: option.label, hint_text: option.hint_text, checked: this.value.includes(option.value), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.value) })));
        }
        return '';
    }
    setupOptionElements() {
        this.el
            .querySelectorAll('at-checkbox')
            .forEach((checkboxEl) => {
            checkboxEl.disabled = this.disabled;
            checkboxEl.checked =
                this.value?.includes(checkboxEl.value) ?? false;
            checkboxEl.addEventListener('atuiChange', (event) => this.handleChange(event, checkboxEl.value));
        });
    }
    handleChange(event, checkboxValue) {
        event.stopPropagation();
        const isChecked = event.detail;
        if (isChecked && !this.value.includes(checkboxValue)) {
            this.value = [...this.value, checkboxValue];
        }
        else if (!isChecked) {
            this.value = this.value.filter((v) => v !== checkboxValue);
        }
        this.atuiChange.emit(this.value);
    }
    render() {
        const getLayoutClassname = classlist.classlist('gap-4', layoutVariantsConfig);
        const classname = getLayoutClassname({
            layout: this.layout,
        });
        return (index.h(index.Host, { key: '7f91c8cafe16d0109b5922f62d8f9d7a1b897c1c', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, index.h("div", { key: 'faae4a257d5ec6b7344afcd4b2f2457a3dd08dbd', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '8b2922e617bcc56c100fe5369dcd3cbc143b621b', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '4d5de1f001afc3dbe3b4c7df758efa4fb6e729f1', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '9de67c2e531578c8016b91c6d4d2febbc37c1946', class: "text-muted inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), index.h("ul", { key: '72ef38df52f28411cbf8a2d0daccc4897096dec7', class: classname, "data-name": "checkbox-group-options" }, index.h("slot", { key: 'e0525d0eb49bedd546cf30c3f3513563d14ec0a3' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (index.h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (index.h("span", { key: '40af0a257150cda49573cb81a58efae965aed7c2', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "options": [{
                "updateSelected": 0
            }],
        "value": [{
                "onValueChange": 0
            }]
    }; }
};

exports.at_checkbox_group = AtCheckboxGroup;
