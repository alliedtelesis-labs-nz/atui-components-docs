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
        return (h(Host, { key: '5800c64e177ee7377b5eb460b262c42997989067', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, h("div", { key: 'eee0c906e677f237321c296aee62ddcdf64936e6', class: "flex flex-col" }, h("slot", { key: '985ac42bc4b918ddbbff9cc174c65811e997466c', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '32611b89322477985e367c4e980761d2351aba02', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '388329c863d8e7d1fe4cb2b37c32879e499c604a', class: "text-muted mb-8 inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), h("ul", { key: 'c575cad9016fa5760ed800081bda30ce41a26066', class: classname, "data-name": "checkbox-group-options" }, h("slot", { key: 'f6a3a9af33c6a9a84f1fc45dd6c64375a8facc20' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (h("span", { key: '843b2fb38e639c3608de84ebbe6f5f3fb50a3f89', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
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
