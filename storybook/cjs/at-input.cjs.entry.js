'use strict';

var index = require('./index-DGi-f7lA.js');
var classlist = require('./classlist-BPb95vgj.js');

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-glow bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-glow',
            true: '!bg-[var(--token-input-readonly-background)] !text-foreground cursor-text border-none',
        },
        invalid: {
            false: 'border-input focus-within:border-active-accent focus-within:ring-active-glow',
            true: 'border-error focus-within:border-error focus-within:ring-error-glow',
        },
    },
    defaultVariants: {
        disabled: false,
        readonly: false,
        invalid: false,
    },
};
const AtInputComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    /**
     * Label above the input container
     */
    label;
    /**
     * Type of the input
     */
    type = 'text';
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Optional info icon with detailed tooltip description
     */
    info_text;
    /**
     * Error text displayed when invalid is set
     */
    error_text;
    /**
     * Placeholder text to be shown when no input is passed
     */
    placeholder = '';
    /**
     * Adds a required * to the element
     */
    required;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Sets the 'autocomplete' attribute on the input element
     */
    autocomplete = 'on';
    /**
     * Makes the input read only
     */
    readonly;
    /**
     * Disables interaction with the input
     */
    disabled = false;
    /**
     * Allows the input to be cleared with a 'x' at the end of the input element
     */
    clearable;
    /**
     * Accessible name for the input. Use when a shared column header supplies the
     * visible label and `label` is therefore left unset.
     */
    aria_label;
    /**
     * The value of the input
     */
    value;
    /**
     * Maximum number of decimal places for `type="number"`; Defaults to `0` (whole numbers only). Only digits, a minus sign and a decimal point are accepted; other characters and non-numeric values are rejected. Rounded when the user commits the value.
     */
    decimal_places = 0;
    inputEl;
    get el() { return index.getElement(this); }
    /**
     * Emits an event containing the text string or number when the input's content is changed
     */
    atuiChange;
    inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
    handleChange(event) {
        event.stopPropagation();
        const input = event.target;
        if (event.type === 'change') {
            input.value = this.roundNumberText(input.value);
        }
        if (this.type === 'number' && !this.isNumericText(input.value)) {
            input.value = '';
        }
        this.value = input.value;
        this.atuiChange.emit(this.value);
    }
    get hasDecimalLimit() {
        return (this.type === 'number' &&
            this.decimal_places !== undefined &&
            this.decimal_places !== null);
    }
    isNumericText(text) {
        if (text === undefined || text === null || text === '') {
            return true;
        }
        const asText = String(text);
        return asText.trim() !== '' && isFinite(Number(asText));
    }
    roundNumberText(text) {
        const parsed = Number(text);
        if (!this.hasDecimalLimit || text === '' || isNaN(parsed)) {
            return text;
        }
        return String(Number(parsed.toFixed(Math.max(0, this.decimal_places))));
    }
    handleKeyDown(event) {
        if (this.type !== 'number' || event.ctrlKey || event.metaKey) {
            return;
        }
        if (event.key.length !== 1) {
            return;
        }
        const allowsDecimal = !this.hasDecimalLimit || this.decimal_places > 0;
        const allowed = allowsDecimal ? /[0-9.,-]/ : /[0-9-]/;
        if (!allowed.test(event.key)) {
            event.preventDefault();
        }
    }
    handleClear() {
        this.inputEl.value = '';
        this.value = '';
        this.atuiChange.emit('');
    }
    render() {
        const getClassname = classlist.classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: '7d7bf7c94ccfbc9de829822179a4e1b07ab6be48' }, index.h("div", { key: 'a1151798b9ce904d962984c2fe52b30651051375', class: "mb-4 flex flex-col empty:hidden" }, index.h("slot", { key: '1c7eeb27db4b64503097c6746352631803c8ef87', name: "label" }), (this.label || this.required || this.info_text) && (index.h("at-form-label", { key: '3dee2b8ed01adbf07f289bbd8281110b2fe18f6f', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (index.h("span", { key: '1e6a41ab2c66d81b629406d13b877417d873ed08', class: "text-muted mb-2 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), index.h("div", { key: '541ae9929194d677a803f3d5a5afe99d3aa21a63', class: classname }, index.h("input", { key: '97eaf1d69ddd00928f691fb297cba5f5f29b8f40', class: "py-input-y pl-input-x flex w-full min-w-0 text-ellipsis outline-0", id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", step: this.hasDecimalLimit
                ? String(10 ** -Math.max(0, this.decimal_places))
                : undefined, onKeyDown: (event) => this.handleKeyDown(event), onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.type === 'number' &&
                !this.isNumericText(this.value)
                ? ''
                : this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), index.h("div", { key: '8a691a45c5042b1ee8f2342951cfa5ca9a3098d8', class: "flex items-center py-4 pr-4" }, index.h("slot", { key: '28445616dbe72ba189bceeaac73385d67b982130', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (index.h("at-button", { key: '033e10454c8b2134b23f1b06fefae3ac423f8a0f', class: `transition-[opacity,transform] duration-150 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, index.h("at-icon", { key: 'bdebe1b526fcaf84823e00ccc61b6fb0a5d6f9b8', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (index.h("span", { key: '55ecdd508460d97e998ed30add39b9fb51671897', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

exports.at_input = AtInputComponent;
