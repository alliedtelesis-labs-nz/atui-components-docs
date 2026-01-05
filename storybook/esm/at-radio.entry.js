import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-EP34iaAr.js';
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
            false: 'hover:bg-surface-1 bg-white',
            true: 'bg-active-foreground/15',
        },
    },
};
const getRadioClasses = classlist('focus-visible:ring-active-foreground/40 relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', variantsConfig);
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
    value;
    /**
     * ID of the radio button element and its option
     */
    option_id;
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
        if (!this.disabled && !this.readonly && !this.value) {
            this.value = true;
            this.atuiChange.emit(this.option_id);
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
            checked: this.value,
            readonly: this.readonly,
        });
        return (h(Host, { key: '95447e122f8a4464c263544b4e215ff13b6434ed', "aria-checked": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: '25d4ad83171a4d242860c37a8f07efcc3c70cae5', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.value, value: this.option_id, id: this.option_id, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: 'ffb8093ba8b25cafe3b0ead47461048247772250', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: '0d71300c1b037235d3fc569401bcfb83df0e7368', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: '29c0b92a5aea81ee576a0eeceada5f0906fb7822', class: "text-light mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: 'ed2d2fca2a229f61d093632b4033133b5abba6db' }))));
    }
};

export { AtRadio as at_radio };
//# sourceMappingURL=at-radio.entry.js.map
