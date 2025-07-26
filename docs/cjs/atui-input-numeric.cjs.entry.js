'use strict';

var index = require('./index-BAt2i-T2.js');
var index$1 = require('./index-palgSxc9.js');

const atuiInputNumericCss = "input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}";

const containerVariants = index$1.cva('height-[36px] relative flex rounded-md', {
    variants: {
        showButtons: {
            true: 'border border-solid border-med',
            false: '',
        },
    },
});
const inputVariants = index$1.cva('height-[36px] transition[background-color,color,box-shadow] w-full rounded-md p-8 text-right outline-0 duration-300 ease-in-out', {
    variants: {
        disabled: {
            false: 'bg-white',
            true: 'pointer-events-none border-none bg-surface-1 !text-disabled',
        },
        readonly: {
            false: 'bg-white',
            true: 'border-none bg-surface-1 text-dark',
        },
        invalid: {
            false: 'border-med focus:border-active-dark focus:ring-2 focus:ring-active-foreground/30',
            true: 'border-error-base focus:ring-2 focus:ring-destructive-foreground/30',
        },
        activePlaceholder: {
            false: 'placeholder:text-disabled',
            true: 'placeholder:text-dark',
        },
        showButtons: {
            true: '',
            false: 'border border-solid',
        },
    },
    compoundVariants: [
        {
            readonly: true,
            disabled: true,
            class: 'bg-surface-1 text-dark',
        },
        {
            readonly: false,
            disabled: false,
            class: 'bg-surface-base text-dark',
        },
    ],
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
        activePlaceholder: false,
        showButtons: false,
    },
});
const AtuiInputNumericComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        /**
         * Placeholder text to be shown when no input is passed
         */
        this.placeholder = '';
        /**
         * Disables interaction with the input
         */
        this.disabled = false;
        /**
         * Min selectable value of the input.
         */
        this.min = 0;
        /**
         * Max selectable value of the input.
         */
        this.max = 100;
        /**
         * Interval between selections.
         */
        this.step = 1;
        /**
         * Show buttons inside input or outside
         */
        this.show_buttons = true;
        /**
         * The value of the input
         */
        this.value = 0;
        this.inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
        this.handleDecrease = () => {
            if (this.value > this.min) {
                this.value = Math.max(this.value - this.step, this.min);
                this.atuiChange.emit(this.value);
            }
        };
        this.handleIncrease = () => {
            if (this.value < this.max) {
                this.value = Math.min(this.value + this.step, this.max);
                this.atuiChange.emit(this.value);
            }
        };
    }
    handleChange(event) {
        event.stopPropagation();
        this.value = Number(event.target.value);
        this.atuiChange.emit(this.value);
    }
    render() {
        const containerClassname = containerVariants({
            showButtons: this.show_buttons,
        });
        const classname = inputVariants({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
            showButtons: this.show_buttons,
        });
        return (index.h(index.Host, { key: '3bf7433dae7cc28896ece58141868af3c60c7fce', class: "w-full" }, index.h("div", { key: '3a57f1dd7d8e786acf3d381141d8d520090d491c', class: "flex flex-col" }, index.h("slot", { key: '7c589b962b1747be9fe46b92a2f04c6205e8d2ac', name: "label" }), (this.label || this.required || this.info_text) && (index.h("atui-form-label", { key: '2d7a0e3a3074ae0db995d0c254e567f578ca8dc7', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: 'e99c8d58e8b02f4f90c4dc13f772661cead01ce2', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '3b72aa08d66e7d6c5af81613ae08f8b712bf2458', class: containerClassname }, this.show_buttons && !this.disabled && !this.readonly && (index.h("atui-button", { key: '5476956a62055d10ae86ffe72c8d7545683e08ea', class: "rounded-l-md rounded-r-none border-r border-solid border-med", type: "secondaryText", icon: "remove", onClick: this.handleDecrease, disabled: this.value <= this.min, "aria-label": "Subtract", "data-name": "input-subtract" })), index.h("input", { key: 'd1b4ea8d309f0f04a26994e0489d5e23fc513e9a', id: this.inputId, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: "number", placeholder: `${this.placeholder}`, onInput: (event) => (this.value = Number(event.target.value)), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), class: classname, "data-name": "input" }), this.show_buttons && !this.disabled && !this.readonly && (index.h("atui-button", { key: 'f4293fbd5b7db1505aa39b94486dd1770f201eb9', class: "rounded-l-none rounded-r-md border-l border-solid border-med", type: "secondaryText", icon: "add", onClick: this.handleIncrease, disabled: this.value >= this.max, "aria-label": "Add", "data-name": "input-add" }))), this.error_text && this.invalid && (index.h("span", { key: 'd778b466649ece195fcc681445aa8d23d08944b5', class: "text-sm text-error", "data-name": "input-error" }, this.error_text))));
    }
    get el() { return index.getElement(this); }
};
AtuiInputNumericComponent.style = atuiInputNumericCss;

exports.atui_input_numeric = AtuiInputNumericComponent;
//# sourceMappingURL=atui-input-numeric.entry.cjs.js.map

//# sourceMappingURL=atui-input-numeric.cjs.entry.js.map