import { r as registerInstance, c as createEvent, h, H as Host, a as getElement } from './index-CIq6mZ3i.js';
import { c as cva } from './index-CVoOBWGd.js';

const layoutVariants = cva('gap-4', {
    variants: {
        layout: {
            column: 'flex flex-col',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
});
const AtuiRadioGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Direction that the radio elements are placed
         */
        this.layout = 'column';
        this.radioEls = [];
        this.radioGroupId = `radiogroup-${Math.random().toString(36).substring(2, 11)}`;
    }
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
            return this.options.map((option) => (h("atui-radio", { label: option.label, hint_text: option.hint_text, option_id: option.option_id, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, value: this.value === option.option_id, onAtuiChange: (event) => {
                    event.stopPropagation();
                    if (!this.disabled && !this.readonly) {
                        this.handleChange(option.option_id);
                    }
                }, group: this.label || this.radioGroupId, ref: (el) => this.radioEls.push(el) })));
        }
    }
    render() {
        const classname = layoutVariants({
            layout: this.layout,
        });
        return (h(Host, { key: 'd0ebd5ff3b33c8fa9c8e7a94b8b442038472e2fb', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, h("div", { key: 'e7ef4d58add12fbcde3584fc3093f8a5ed0d947e', class: "flex flex-col" }, h("slot", { key: 'ddbf3ad932480fff28102424f992543641385a01', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: 'a5b79ef7175a1a472190a13f8234db4d65ec5054', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '3e5748f07109b8111f04d16c58afaabeadf2e38c', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "radio-group-hint" }, this.hint_text))), h("ul", { key: '282ec6158bc3eec492942729541fb014b30b0bf5', class: classname, "data-name": "radio-group-options" }, h("slot", { key: '520b574c5377b5d68e5ca815662cb60b062b3a4a' }), this.getRadios &&
            this.getRadios.map((radio) => (h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (h("span", { key: 'f1879bbfd9dfff72c10b303c9a38787ce8ff9399', class: "text-sm text-error", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    get el() { return getElement(this); }
};

export { AtuiRadioGroup as atui_radio_group };
//# sourceMappingURL=atui-radio-group.entry.js.map

//# sourceMappingURL=atui-radio-group.entry.js.map