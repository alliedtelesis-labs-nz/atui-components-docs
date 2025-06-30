import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-HJO1YDmC.js';
import { c as cva } from './index-CVoOBWGd.js';

const inputVariants = cva('min-h-36 placeholder-text-light pr -24 relative flex min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden overflow-ellipsis rounded-md border border-solid outline-none transition-colors duration-300 ease-in-out focus-within:outline-0 focus-within:ring-2', {
    variants: {
        disabled: {
            false: 'bg-white focus-within:ring-active-foreground/30',
            true: 'pointer-events-none border-none bg-surface-1 !text-disabled',
        },
        readonly: {
            false: 'focus-within:ring-active-foreground/30',
            true: 'cursor-text border-none !bg-surface-1 !text-dark',
        },
        invalid: {
            false: 'border-med focus-within:border-active-dark focus-within:ring-active-foreground/30',
            true: 'border-error-base focus-within:border-error-base focus-within:ring-destructive-foreground/30',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
});
const AtuiInputComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Type of the input
         */
        this.type = 'text';
        /**
         * Placeholder text to be shown when no input is passed
         */
        this.placeholder = '';
        /**
         * Sets the 'autocomplete' attribute on the input element
         */
        this.autocomplete = 'on';
        /**
         * Disables interaction with the input
         */
        this.disabled = false;
        this.inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
    }
    handleChange(event) {
        event.stopPropagation();
        this.value = event.target.value;
        this.atuiChange.emit(this.value);
    }
    handleClear() {
        this.inputEl.value = '';
        this.value = '';
        this.atuiChange.emit('');
    }
    render() {
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '24cd246bea9cfaffac8088cd79c07b1fd1c1418f' }, h("div", { key: '3044990669ca967fb55913e2afd7bc302f61adcc', class: "flex flex-col" }, h("slot", { key: 'a5d8f0163371f40d192df584057ccad71fdd2743', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '7863d7d2f7fa6dd2857d4a252016ac75c3f1639e', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'ec67816581716d9f762fb68f5ab46b117d43ed9d', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '2ff11f64f7e55c364cee6a6dcc40622f7e58be2f', class: classname }, h("input", { key: '70f4fc0704b6b520674c1331258fdd6b25e89d9f', class: "flex w-full py-8 pl-8 outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), h("div", { key: '8abe39c7edb739a2fca6b1e549c52da2d344cb7c', class: "flex items-center py-4 pr-4" }, h("slot", { key: '1ff11f686529f058bad253a70d907666adfab024', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (h("atui-button", { key: '5c1df99a20d131ae40d3217e6c631d8ebeda5290', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" })))), this.error_text && this.invalid && (h("span", { key: '1862792ff2a2871d244a9c65bfed70c5d35cf80c', class: "text-sm text-error", "data-name": "input-error" }, this.error_text))));
    }
    get el() { return getElement(this); }
};

export { AtuiInputComponent as atui_input };
//# sourceMappingURL=atui-input.entry.js.map

//# sourceMappingURL=atui-input.entry.js.map