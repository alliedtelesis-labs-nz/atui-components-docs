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
        return (index.h(index.Host, { key: '387cefe4d0476ed273e7ddb70760a22a660a2213', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, index.h("div", { key: '6c668d018ae46507e11d8588ca7995b98dc9f122', class: "flex flex-col" }, index.h("slot", { key: '506e17d355aad52e9aa2ee4fa4569e9a8bbb93af', name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { key: 'a86d313e187990cc1951b2a4163e064743a01157', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'eb438886effbc3e6447b246039e343b932f4c53b', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "checkbox-group-hint" }, this.hint_text))), index.h("ul", { key: 'b572668a00abc0e8f146899dedfd4c648c4c878f', class: classname, "data-name": "checkbox-group-options" }, index.h("slot", { key: '6bbf8c8cce728dc4e5576f72e84d29eeff4909af' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (index.h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (index.h("span", { key: 'aad3889151a959c87bef76d2cfda6ae63eb753a9', class: "text-sm text-error", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
};

exports.atui_checkbox_group = AtuiCheckboxGroup;
//# sourceMappingURL=atui-checkbox-group.entry.cjs.js.map

//# sourceMappingURL=atui-checkbox-group.cjs.entry.js.map