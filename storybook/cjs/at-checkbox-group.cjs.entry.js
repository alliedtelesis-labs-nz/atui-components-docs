'use strict';

var index = require('./index-COiLLAKF.js');
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
            if (option.value === true &&
                !this.value.includes(option.option_id)) {
                this.value.push(option.option_id);
            }
            else if (option.value === false &&
                this.value.includes(option.option_id)) {
                this.value = this.value.filter((selection) => selection !== option.option_id);
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
    /**
     * Emits an event containing the 'selected' prop when changed
     */
    atuiChange;
    formControlSelected = null;
    componentDidLoad() {
        if (!this.getCheckBoxes) {
            this.el
                .querySelectorAll('at-checkbox')
                .forEach((checkboxEl, index) => {
                checkboxEl.option_id = `${index}`;
                checkboxEl.disabled = this.disabled;
                checkboxEl.value = this.value.includes(`${index}`);
                checkboxEl.addEventListener('atuiChange', (event) => this.handleChange(event, `${index}`));
                this.checkboxEls.push(checkboxEl);
            });
        }
    }
    get getCheckBoxes() {
        if (this.options) {
            if (this.formControlSelected !== null) {
                this.value = this.formControlSelected;
                this.formControlSelected = null;
            }
            return this.options.map((option) => (index.h("at-checkbox", { option_id: option.option_id, label: option.label, hint_text: option.hint_text, value: this.value.includes(option.option_id), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.option_id) })));
        }
        return '';
    }
    handleChange(event, checkboxId) {
        event.stopPropagation();
        this.value = this.value.includes(checkboxId)
            ? this.value.filter((option) => option !== checkboxId)
            : [...this.value, checkboxId];
        this.atuiChange.emit(this.value);
    }
    render() {
        const getLayoutClassname = classlist.classlist('gap-4', layoutVariantsConfig);
        const classname = getLayoutClassname({
            layout: this.layout,
        });
        return (index.h(index.Host, { key: 'ed88b6f072aec6c01ef7e5fb8539f098c87e3408', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, index.h("div", { key: '7f61a0b695afe235c48280fd74225178c6347570', class: "flex flex-col" }, index.h("slot", { key: '87d68c047b57cec5e3ae32a02b7a7a07cf05b97a', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: 'cfe2eb6018f7d038502af89326008c2aa769850a', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '067375a557231a921a543ac82204a793061ad076', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), index.h("ul", { key: '1e7f7359a68463c38103bed2d8c8e49a7cf26a4f', class: classname, "data-name": "checkbox-group-options" }, index.h("slot", { key: '56afad537f7418a10e034c8888e424ba4c007e01' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (index.h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (index.h("span", { key: 'a3d197e63b5a075c11668948a54ba369a571dfba', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
};

exports.at_checkbox_group = AtCheckboxGroup;
//# sourceMappingURL=at-checkbox-group.entry.cjs.js.map
