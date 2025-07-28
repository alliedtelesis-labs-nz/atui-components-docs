import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-Cd7WF2gX.js';
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
        return (h(Host, { key: 'b8445adc8b4a00188fbddee328eaa60b70c245a4', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, h("div", { key: '92b2e9d1e0b7bd6f0b88750dd5ab9d656907a550', class: "flex flex-col" }, h("slot", { key: '4d3458e871b3719a09a0915909eafa0a65702883', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '466e57a7d8f5adea4ef4a0dbff4142f00577ffbc', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: 'fc251683b2b85bcb7ab1ccbd96b97f21f4a1dd86', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "radio-group-hint" }, this.hint_text))), h("ul", { key: '23c3fde9eab7ec2508499b9038d86d1b3783d4fc', class: classname, "data-name": "radio-group-options" }, h("slot", { key: '68b0da1e53f4944e82483d2cde0aa72a0fdee178' }), this.getRadios &&
            this.getRadios.map((radio) => (h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (h("span", { key: '5b4e18d59353841aa689805822c609757e195c2f', class: "text-sm text-error", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    get el() { return getElement(this); }
};

export { AtuiRadioGroup as atui_radio_group };
//# sourceMappingURL=atui-radio-group.entry.js.map

//# sourceMappingURL=atui-radio-group.entry.js.map