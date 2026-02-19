import { r as registerInstance, c as createEvent, g as getElement, h, H as Host } from './index-jvbUuQtg.js';
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
        return (h(Host, { key: 'bffe159b2aad74fb0764365d4c74098d0ddc1476', "aria-checked": this.checked, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: '77974c967e8573b80cbb25ce599ffa876df15862', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.checked, value: this.value, id: this.value, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: '6268570417f43f912e806bd2405a7a10a304be45', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: '5dae1f37ebc160cf452b67ca21851a4523be0ec8', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: '837421419764db551cef0e0a995f50a208950594', class: "text-light mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: '10d24faca90c3f1a70573a92da6a72c2cfa8a9de' }))));
    }
};

export { AtRadio as at_radio };
