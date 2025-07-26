'use strict';

var index = require('./index-BAt2i-T2.js');
var index$1 = require('./index-palgSxc9.js');

const layoutVariants = index$1.cva('gap-4', {
    variants: {
        layout: {
            column: 'flex flex-col gap-4',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
});
const AtuiCheckboxGroup = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        /**
         * Sets the layout of the checkbox-group
         */
        this.layout = 'column';
        /**
         * A list of strings, containing the Id's of the currently selected checkboxes
         */
        this.value = [];
        this.checkboxEls = [];
        this.formControlSelected = null;
    }
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
    componentDidLoad() {
        if (!this.getCheckBoxes) {
            this.el
                .querySelectorAll('atui-checkbox')
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
            return this.options.map((option) => (index.h("atui-checkbox", { option_id: option.option_id, label: option.label, hint_text: option.hint_text, value: this.value.includes(option.option_id), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.option_id) })));
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
        const classname = layoutVariants({
            layout: this.layout,
        });
        return (index.h(index.Host, { key: '07f8d96227c294015d65a6db34d0e90957528031', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, index.h("div", { key: 'b1adbf469a83c5d6d0a7654c534e507fc19eb4cf', class: "flex flex-col" }, index.h("slot", { key: 'a57cae426862be46a395679ce19d4248e2a0e7b5', name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { key: '8cefd16ad33b773d55a2c3102651ac02adb60764', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '31d55ad3a621aa43318e6884a63f4caf59bbecb6', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "checkbox-group-hint" }, this.hint_text))), index.h("ul", { key: '245251ccbc6ae706ba46f7c1f98f8bdde91e500b', class: classname, "data-name": "checkbox-group-options" }, index.h("slot", { key: '8a6560ea1a4199980aa29144704a395a4009edd2' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (index.h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (index.h("span", { key: '9da5208508c660a80000e59ebc9dc2776e508fab', class: "text-sm text-error", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
};

exports.atui_checkbox_group = AtuiCheckboxGroup;
//# sourceMappingURL=atui-checkbox-group.entry.cjs.js.map

//# sourceMappingURL=atui-checkbox-group.cjs.entry.js.map