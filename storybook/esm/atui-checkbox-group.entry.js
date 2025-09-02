import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-D3rwhcmG.js';
import { c as cva } from './index-CVoOBWGd.js';

const layoutVariants = cva('gap-4', {
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
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
            return this.options.map((option) => (h("atui-checkbox", { option_id: option.option_id, label: option.label, hint_text: option.hint_text, value: this.value.includes(option.option_id), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.option_id) })));
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
        return (h(Host, { key: 'd1b1c16d37a7f560e6c243ec5f0c199931da6e6a', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, h("div", { key: '46b3d1ca277a684a46f309bfc179783629213a9c', class: "flex flex-col" }, h("slot", { key: '1918617713ad4cfd82d53c350af180d3403277a0', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '6fee351a3144fc86794160c0fa517f1954395a85', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '00c97df27bbb1080659b5a6a61486885bb5dd347', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), h("ul", { key: '49826ac3e1b4966269fd00b8055053d6fda48559', class: classname, "data-name": "checkbox-group-options" }, h("slot", { key: 'b8a513864459a03791611054555e4796c71daf76' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (h("span", { key: '384bd1187e6f120cc9735c8297fbe6d45da8c861', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
};

export { AtuiCheckboxGroup as atui_checkbox_group };
//# sourceMappingURL=atui-checkbox-group.entry.js.map

//# sourceMappingURL=atui-checkbox-group.entry.js.map