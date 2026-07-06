'use strict';

var index = require('./index-BVOcg3sk.js');
var classlist = require('./classlist-BPb95vgj.js');

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
const getRadioClasses = classlist.classlist('focus-visible:ring-active-glow relative flex w-full cursor-pointer items-start gap-8 rounded-input p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring focus-visible:ring-offset-2', variantsConfig);
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
        return (index.h(index.Host, { key: 'ba42f1614ff58b5b2eb76e877b1426d6eb711003', "aria-checked": this.checked, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (index.h("input", { key: '1e4c35755f55be6530fd00619fd9fb761a0b9204', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.checked, value: this.value, id: this.value, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), index.h("div", { key: '019dfd9d9ff6111577bfd9166b7abc967ba04f14', class: "pointer-events-none flex flex-col" }, this.label && (index.h("span", { key: '54fc5496cf3c99724575193219b055ac25d1ba26', class: "mt-0 pl-4 text-xs font-medium", id: `${this.value}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (index.h("span", { key: '72faa3844719ada3c4ea8295276a8f9ccf25e5ad', class: "text-muted mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), index.h("slot", { key: 'd4df2dad828ecd60ee9979a86bc9a51323792860' }))));
    }
};

exports.at_radio = AtRadio;
