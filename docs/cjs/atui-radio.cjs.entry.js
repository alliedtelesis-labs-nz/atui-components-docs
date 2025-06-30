'use strict';

var index = require('./index-DGivrgtr.js');
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
        return (index.h(index.Host, { key: 'a583616e6517021d055420e572c3a289250d62aa', "aria-checked": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (index.h("input", { key: 'e6fcac02782f8103d12ff248736cd3661bbc13fb', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.value, value: this.option_id, id: this.option_id, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), index.h("div", { key: 'c5260fe330fedf4738c6fa21d614b35ca09d45be', class: "pointer-events-none flex flex-col" }, this.label && (index.h("span", { key: 'dbe8a672b2f343a4f699367b5cf0d1bf61d402de', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (index.h("span", { key: '55071ad5887e5321082933a1bdbf92ffc1118fe8', class: "mt-0 pl-4 text-xs text-light", "data-name": "radio-hint" }, this.hint_text)), index.h("slot", { key: '3efa25f4bfcab8403319e6d849e17a3812051c40' }))));
    }
    get el() { return index.getElement(this); }
};

exports.atui_radio = AtuiRadio;
//# sourceMappingURL=atui-radio.entry.cjs.js.map

//# sourceMappingURL=atui-radio.cjs.entry.js.map