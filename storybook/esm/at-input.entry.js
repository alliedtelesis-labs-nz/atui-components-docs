import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-CjAoXTs1.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const inputVariantsConfig = {
    variants: {
        disabled: {
            false: 'focus-within:ring-active-glow bg-input-background',
            true: 'bg-surface-1 !text-disabled pointer-events-none border-none',
        },
        readonly: {
            false: 'focus-within:ring-active-glow',
            true: '!bg-surface-1 !text-foreground cursor-text border-none',
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
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
    inputEl;
    get el() { return getElement(this); }
    /**
     * Emits an event containing the text string or number when the input's content is changed
     */
    atuiChange;
    inputId = `input-${Math.random().toString(36).substring(2, 11)}`;
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
        const getClassname = classlist(`placeholder-text-muted relative flex h-input min-h-input w-full flex-shrink flex-grow basis-0 gap-4 overflow-hidden rounded-input border border-solid transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out outline-none focus-within:ring focus-within:outline-0 focus-within:z-10`, inputVariantsConfig);
        const classname = getClassname({
            invalid: this.invalid,
            disabled: this.disabled,
            readonly: this.readonly,
        });
        return (h(Host, { key: '96be4b0595f449c2a88e351a7e22064c6409cab5' }, h("div", { key: '28eafb6d0ea4f90ddfc0b108835f5a8004d4aa78', class: "mb-4 flex flex-col empty:hidden" }, h("slot", { key: '8592bdddb8e19864ff96fc52dcc0f5f8d649d396', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'f94a069ea77d0ca6bf58ef3fc032baf9b89a18f5', label: this.label, for: this.inputId, required: this.required && !this.readonly, info_text: this.info_text })), this.hint_text && (h("span", { key: 'ddf9bd265935eba0974b6c102acab4857a3fd587', class: "text-muted mb-2 inline-block text-xs leading-tight", "data-name": "input-hint" }, this.hint_text))), h("div", { key: '02bbca451bf3a29d7516b56c5d7ab05c8fafe94b', class: classname }, h("input", { key: '8e6b48f713e90ffc0703366a95b5e96a9c21f315', class: "py-input-y pl-input-x flex w-full min-w-0 text-ellipsis outline-0", id: this.inputId, "aria-label": this.aria_label ?? undefined, readonly: this.readonly ? true : undefined, disabled: this.disabled ? true : undefined, required: this.required, type: this.type, placeholder: `${this.placeholder}`, autocomplete: this.autocomplete, autocapitalize: "none", onInput: (event) => this.handleChange(event), onChange: (event) => this.handleChange(event), value: this.value, ref: (el) => (this.inputEl = el), "data-name": "input" }), h("div", { key: 'e5ffb778e4c01f160fa14e990b1eff6d2a77634b', class: "flex items-center py-4 pr-4" }, h("slot", { key: '4c58efdfa2fc3eb64cf8aa760911dc06c7c602fc', name: "input-actions" }), this.clearable &&
            !this.readonly &&
            !this.disabled &&
            this.value && (h("at-button", { key: '4baaf97e98fe3ae4f61dd64e2801550ba41ba999', class: `transition-[opacity,transform] duration-150 ease-in-out ${this.clearable &&
                !this.readonly &&
                !this.disabled &&
                this.value
                ? 'pointer-events-auto scale-100 opacity-100'
                : 'pointer-events-none scale-90 opacity-0'}`, size: "sm", type: "secondaryText", onClick: (event) => {
                event.stopPropagation();
                this.handleClear();
            }, "data-name": "input-clear" }, h("at-icon", { key: '01cff58c8370ee1eace2c4f955fd10ec3d07b1c9', slot: "icon", name: "cancel" }))))), this.error_text && this.invalid && (h("span", { key: 'ea62c98fe96f6c542217812bf51d429b3e512bc9', class: "text-error text-sm", "data-name": "input-error" }, this.error_text))));
    }
};

export { AtInputComponent as at_input };
