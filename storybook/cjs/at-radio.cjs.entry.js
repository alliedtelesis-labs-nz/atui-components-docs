'use strict';

var index = require('./index-BzjIU9ss.js');
var classlist = require('./classlist-OJYetzVw.js');

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
const getRadioClasses = classlist.classlist('focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', variantsConfig);
const AtRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.atuiChange = index.createEvent(this, "atuiChange", 7);
        /**
         * Disables the radio option but keeps the text readable. Used for global readonly form state.
         */
        this.readonly = false;
    }
    handleChange() {
        if (!this.disabled && !this.readonly && !this.value) {
            this.value = true;
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
            checked: this.value,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: 'c43063d7491fa1f81387a64497a4cd8efdef3ac3', "aria-checked": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (index.h("input", { key: 'e2a02e2f4a1673692608717b0725fcdf1bb7c183', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.value, value: this.option_id, id: this.option_id, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), index.h("div", { key: 'c1bcaf3a774b8c44aebe8351cfad7128a6ddbab4', class: "pointer-events-none flex flex-col" }, this.label && (index.h("span", { key: '7a4652f019a3ce9d7b6949db76b65a8a6bb577fc', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (index.h("span", { key: '1f673508d5cfbc4e8a9ad49cbd7ff3d873303b0b', class: "text-light mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), index.h("slot", { key: '183fde13915486819db35e3e8ee62235653829a6' }))));
    }
    get el() { return index.getElement(this); }
};

exports.at_radio = AtRadio;
//# sourceMappingURL=at-radio.entry.cjs.js.map
