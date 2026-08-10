import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-HD-uhvb8.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const variantsConfig = {
    variants: {
        disabled: {
            false: '',
            true: 'bg-disabled-light pointer-events-none opacity-50 grayscale-[1]',
        },
        readonly: {
            false: '',
            true: 'pointer-events-none',
        },
        checked: {
            false: 'hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 bg-input-background',
            true: 'bg-active-background accent-active-foregruond',
        },
    },
};
const getRadioClasses = classlist('focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring focus-visible:ring-offset-2', variantsConfig);
const AtRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    get el() { return getElement(this); }
    /**
     * Title of the radio component.
     */
    label;
    /**
     * Subtitle of the radio component.
     */
    hint_text;
    /**
     * Sets the value of the checkbox
     */
    checked;
    /**
     * ID of the radio button element and its option
     */
    value;
    /**
     * Name of radio group.
     * Buttons sharing a name are associated with the same radio group.
     */
    group;
    /**
     * Disables interaction with the radio
     */
    disabled;
    /**
     * Disables the radio option but keeps the text readable. Used for global readonly form state.
     */
    readonly = false;
    radioEl;
    /**
     * Emits the current state of the radio when clicked.
     */
    atuiChange;
    handleChange() {
        if (!this.disabled && !this.readonly && !this.checked) {
            this.checked = true;
            this.atuiChange.emit(this.value);
        }
    }
    handleKeyDown(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleChange();
        }
    }
    render() {
        const classname = getRadioClasses({
            disabled: this.disabled,
            checked: this.checked,
            readonly: this.readonly,
        });
        return (h(Host, { key: '93b86fba8f9505f1ac982c5494c83371ccb6723f', "aria-checked": this.checked, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: '0a0537782c6e473261fed4cf8a9d861263df6039', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.checked, value: this.value, id: this.value, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: '1c44c45ba64728985af8f0e636e1701b17411743', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: 'de5ad229a6c262c9009221cbde3a7ace0f34f44c', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: 'e1d07fd1f0016c28b3b17e614456d55954262442', class: "text-muted mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: '3ef2aa65693707dea2103cae00d25af96a395c27' }))));
    }
};

export { AtRadio as at_radio };
