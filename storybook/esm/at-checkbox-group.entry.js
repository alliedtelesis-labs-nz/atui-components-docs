import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-BAAX2Der.js';
import { c as classlist } from './classlist-COG8_R0C.js';

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
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
    get el() { return getElement(this); }
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
            return this.options.map((option) => (h("at-checkbox", { value: option.value, label: option.label, hint_text: option.hint_text, checked: this.value.includes(option.value), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.value) })));
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
        const getLayoutClassname = classlist('gap-4', layoutVariantsConfig);
        const classname = getLayoutClassname({
            layout: this.layout,
        });
        return (h(Host, { key: 'b7980ef41f3fc505e1d55b93c80a56c227d2e3c9', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, h("div", { key: 'aeb09a990974939c73941c84e89884d862196e6b', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: 'e340d4d81da1149528cc4b2a93c97195e1c67963', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'd52b7749dcbc28be3641a647bbd5dca9351ea1e4', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '8c1cc7b49b6f24063d4b841b8a0af91cc3889df1', class: "text-muted inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), h("ul", { key: 'a991361e8cfe15c6d6c525fcda44805add2c972b', class: classname, "data-name": "checkbox-group-options" }, h("slot", { key: '6912f6c6e59319b6f6639e5052c932e5b91f93e1' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (h("span", { key: '3cbba678f5b2a46b6bddec88c7bd505c3eb4210e', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
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

export { AtCheckboxGroup as at_checkbox_group };
