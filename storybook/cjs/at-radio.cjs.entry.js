'use strict';

var index = require('./index-CEz1eizW.js');
var classlist = require('./classlist-BPb95vgj.js');

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
const getRadioClasses = classlist.classlist('focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 transition-[color,background-color,border-color,box-shadow,fill] duration-150 ease-in-out focus:outline-none focus-visible:ring', variantsConfig);
const AtRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
    }
    get el() { return index.getElement(this); }
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
        return (index.h(index.Host, { key: '61c5af7837d89af89eda3d3dac7615b2013a95fa', "aria-checked": this.checked ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false', "aria-readonly": this.readonly ? 'true' : 'false', "aria-labelledby": this.label ? this.labelId : undefined, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (index.h("input", { key: 'bf97b23ef77e2600bbf82846ab154226f6c165b2', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.checked, value: this.value, id: this.inputId, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), index.h("div", { key: '2bcb854f0964577d211ff2f0457f53b37ead19d5', class: "pointer-events-none flex flex-col" }, this.label && (index.h("span", { key: 'e88109051375aa161ba43042757dcc9663de2ef0', class: "mt-0 pl-4 text-xs font-medium", id: this.labelId, "data-name": "radio-label" }, this.label)), this.hint_text && (index.h("span", { key: '0672796dc4b12152b4fba1574b29fe84721c7829', class: "text-muted mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), index.h("slot", { key: '4f6d4812d42ef88cca49c5878f4dc4f218272750' }))));
    }
};

exports.at_radio = AtRadio;
