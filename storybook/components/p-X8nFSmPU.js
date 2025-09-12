import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';

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
const getRadioClasses = classlist('focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 transition-[color,background-color,box-shadow] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2', variantsConfig);
const AtuiRadio = /*@__PURE__*/ proxyCustomElement(class AtuiRadio extends H {
    constructor() {
        super();
        this.__registerHost();
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
        const classname = getRadioClasses({
            disabled: this.disabled,
            checked: this.value,
            readonly: this.readonly,
        });
        return (h(Host, { key: '148c1b6081f52f909cab4ddb9d03b7fda7da2ee6', "aria-checked": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly, role: "radio", tabindex: this.readonly ? -1 : 0, class: classname, "data-name": "radio-container", onKeyDown: (event) => this.handleKeyDown(event), onClick: () => this.handleChange() }, !this.readonly && (h("input", { key: '4dd544866e94808505f1f2c435d7adcec3058459', type: "radio", "data-name": "radio-input", tabindex: -1, name: this.group && this.group, checked: this.value, value: this.option_id, id: this.option_id, disabled: this.readonly || this.disabled, ref: (el) => (this.radioEl = el) })), h("div", { key: 'd9dfb26c7d3ebf92dd5ff11c4fd39ae907a579ef', class: "pointer-events-none flex flex-col" }, this.label && (h("span", { key: 'fa55c8033084701f5508ff6162a8da0e42c9c828', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}_label`, "data-name": "radio-label" }, this.label)), this.hint_text && (h("span", { key: '7e5903c9ac28e6d31e2e5a59ed24f006783e02d7', class: "text-light mt-0 pl-4 text-xs", "data-name": "radio-hint" }, this.hint_text)), h("slot", { key: 'c626dd0b0ab91f16d43016737014e10e765e3993' }))));
    }
    get el() { return this; }
}, [260, "atui-radio", {
        "label": [1],
        "hint_text": [1],
        "value": [1028],
        "option_id": [1],
        "group": [1],
        "disabled": [4],
        "readonly": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-radio"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-radio":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiRadio);
            }
            break;
    } });
}

export { AtuiRadio as A, defineCustomElement as d };
//# sourceMappingURL=p-X8nFSmPU.js.map

//# sourceMappingURL=p-X8nFSmPU.js.map