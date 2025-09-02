import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-D3rwhcmG.js';
import { c as cva } from './index-CVoOBWGd.js';

const variants = cva('focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', {
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
});
const AtuiRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.atuiChange = createEvent(this, "atuiChange", 7);
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
        return (h(Host, { key: 'ed682fd82dc16676eccec6d56b40090f074ca83f', "aria-checked": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: '0279a1b13c0cc8481ebc31a5943a178eca1efa78', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.value, value: this.option_id, id: this.option_id, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: '92fc204c64b09936916d868c1c2ca06ebdd8a473', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: 'ac1329ba58d10becb90dc6c3680a52209d9206a6', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: '83598e20032ef28beca909a11167671576d7a89d', class: "text-light mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: 'c69f608e5b89ec7fa3c51a73ef7197cfda714924' }))));
    }
    get el() { return getElement(this); }
};

export { AtuiRadio as atui_radio };
//# sourceMappingURL=atui-radio.entry.js.map

//# sourceMappingURL=atui-radio.entry.js.map