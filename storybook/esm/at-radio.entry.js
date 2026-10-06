import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-Baj27LS8.js';
import { c as classlist } from './classlist-COG8_R0C.js';

const variantsConfig = {
    variants: {
        disabled: {
            false: '',
            true: 'bg-disabled-background pointer-events-none opacity-50 grayscale-[1]',
        },
        readonly: {
            false: '',
            true: 'pointer-events-none',
        },
        checked: {
            false: 'hover:bg-surface-overlay/10 focus-within:bg-surface-overlay/10 bg-input-background',
            true: 'bg-active-background accent-active-foreground',
        },
    },
};
const getRadioClasses = classlist('focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus:outline-none focus-visible:ring', variantsConfig);
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
     * Not derived from `value`: two groups can carry the same values, and a
     * slotted radio may have no value until its group assigns one, so a
     * value-derived id is neither unique nor available at first render.
     */
    inputId = `at-radio-${Math.random().toString(36).substring(2, 11)}`;
    labelId = `${this.inputId}-label`;
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
        return (h(Host, { key: '0ffcc3b01f44e14d305f04256a14c8a04e3075d6', "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-readonly": this.readonly ? 'true' : 'false', "aria-labelledby": this.label ? this.labelId : undefined, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: '867a30b7d1352ed68f0447f61eb7809454adb090', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.checked, value: this.value, id: this.inputId, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: 'b2d70820f4827af4674f58c949d759772e36e827', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: '769450c766d0b1df17367511dc03179d7a6bbca8', class: "mt-0 pl-4 text-xs font-medium", id: this.labelId, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: '71645e8ecc97e6e50a826e783792a8ab39d47c15', class: "text-muted mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: '3e7e149bb7f382bd8ccb73485a680c04a948c6cb' }))));
    }
};

export { AtRadio as at_radio };
