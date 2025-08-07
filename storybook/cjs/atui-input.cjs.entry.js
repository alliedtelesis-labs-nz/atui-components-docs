'use strict';

var index = require('./index-nKeTsW5N.js');
var index$1 = require('./index-palgSxc9.js');

const inputVariants = index$1.cva('min-h-36 placeholder-text-light pr -24 relative flex min-h-[36px] w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden overflow-ellipsis rounded-md border border-solid outline-none transition-colors duration-300 ease-in-out focus-within:outline-0 focus-within:ring-2', {
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
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
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
        return (index.h(index.Host, { key: '275a04fca921759c5476b414e0fcb457fd72f53b' }, index.h("div", { key: '79f751989d18cd76dd0b147ee14793f48f058114', class: "flex flex-col" }, index.h("slot", { key: 'c97f707facff378e0b0d6435e0f8f1f2a2825678', name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { key: '92c517f2a20309f4edc5f5fdd17af71b03406808', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '05075144833a46df4ad920675621f2387b5f99c9', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: 'ce168fe24bd105987cf4365a9de554a6f02605f9', class: classname }, index.h("input", { key: '1b90f2acbd029031eefab560ff4438b9a75b5787', class: "flex w-full py-8 pl-8 outline-0", id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), index.h("div", { key: '59fa955808dc3713c5bba029ba52e553f46c34e1', class: "flex items-center py-4 pr-4" }, index.h("slot", { key: '69a05f62d0a75b92b41be1f54cb5a8b10b4f1702', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (index.h("atui-button", { key: '046870fa914a4292d24f1b4fa1334713496d5baf', class: `transition-all duration-300 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", icon: "cancel", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" })))), this.error_text && this.invalid && (index.h("span", { key: '8f4b67b847cab15ae82b39edf666ba2e2c0b3d5b', class: "text-sm text-error", "data-name": "input-error" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_input = AtuiInputComponent;
//# sourceMappingURL=atui-input.entry.cjs.js.map

//# sourceMappingURL=atui-input.cjs.entry.js.map