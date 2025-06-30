'use strict';

var index = require('./index-DGivrgtr.js');
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
        return (index.h(index.Host, { key: 'deb02ef1a7a7fbabcebfad56fc6a3b8123f5fd5d', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, index.h("div", { key: '30d1594bff0b797f39dd7c00a4a225ce90d46c56', class: "flex flex-col" }, index.h("slot", { key: 'd27bdb3bae22cdc1ef8c8a0c3dc8a037f3a59970', name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { key: '60018359e5b24617414e8d5699a4ec79f8e92eea', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'c5fbf10f1526fd7ab4e4362a313ec2684ebab56f', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "checkbox-group-hint" }, this.hint_text))), index.h("ul", { key: '3e07847e8c675e2d8e65b4e57fca636fbb604d62', class: classname, "data-name": "checkbox-group-options" }, index.h("slot", { key: 'c171e0bc34210fabcae9b22af16897b7855b0359' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (index.h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (index.h("span", { key: '5d95ef4219131a93b16f4cd4ed5e1faa85973ffa', class: "text-sm text-error", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
};

exports.atui_checkbox_group = AtuiCheckboxGroup;
//# sourceMappingURL=atui-checkbox-group.entry.cjs.js.map

//# sourceMappingURL=atui-checkbox-group.cjs.entry.js.map