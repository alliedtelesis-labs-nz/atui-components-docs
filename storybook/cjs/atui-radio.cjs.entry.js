'use strict';

var index = require('./index-43B6Ydvl.js');
var index$1 = require('./index-palgSxc9.js');

const variants = index$1.cva('relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-active-foreground/30 focus-visible:ring-offset-2', {
    variants: {
        disabled: {
            false: '',
            true: 'pointer-events-none bg-disabled-light opacity-50 grayscale-[1]',
        },
        readonly: {
            false: '',
            true: 'pointer-events-none',
        },
        checked: {
            false: 'bg-white hover:bg-surface-1',
            true: 'bg-active-foreground/15',
        },
    },
});
const AtuiRadio = class {
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
        const classname = variants({
            disabled: this.disabled,
            checked: this.value,
            readonly: this.readonly,
        });
        return (index.h(index.Host, { key: 'f571bb73f29176ab4d190498cb0947b22e7d885d', "aria-checked": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (index.h("input", { key: '6ce33f03cebf512b3a1a549034f2e773b84b5161', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.value, value: this.option_id, id: this.option_id, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), index.h("div", { key: '1f03d221ce81efb72e4afa0b684c8c2037b00e0c', class: "pointer-events-none flex flex-col" }, this.label && (index.h("span", { key: '4dd28b4853ef4a10c3ff9a4291f8e6c4e69adcc1', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (index.h("span", { key: 'fca18cfabad215719bc9a559e938473bd88e0a38', class: "mt-0 pl-4 text-xs text-light", "data-name": "radio-hint" }, this.hint_text)), index.h("slot", { key: '8d8a324f1303a9a5572df4c47171dbf9aa6766f5' }))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_radio = AtuiRadio;
//# sourceMappingURL=atui-radio.entry.cjs.js.map

//# sourceMappingURL=atui-radio.cjs.entry.js.map