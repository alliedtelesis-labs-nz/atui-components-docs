'use strict';

var index = require('./index-BzjIU9ss.js');
var classlist = require('./classlist-OJYetzVw.js');

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
        return (index.h(index.Host, { key: '741608699735a7ca8eb63296f26171d4f356568e', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, index.h("div", { key: '0b02dfcd31b02a8f974a68f2d84e6f8edd88dbc9', class: "flex flex-col" }, index.h("slot", { key: 'db676069e7f5fb73e89e1e3675f5bbb6991e883c', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '5ba539507c8fea2b9a341264413175d23cdf2fdc', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '9ad19cf1e91b4474dc9543ca90392f799543ce86', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), index.h("ul", { key: '968fc82901a9e7e0353181d80b6be1ef05924f8b', class: classname, "data-name": "checkbox-group-options" }, index.h("slot", { key: '53204e65d0f59f25f99add0186f775c3e37113bf' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (index.h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (index.h("span", { key: 'd11b1d39b0b8f3d0dba62c35dd8dcff612855b2c', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
};

exports.at_checkbox_group = AtCheckboxGroup;
//# sourceMappingURL=at-checkbox-group.entry.cjs.js.map
