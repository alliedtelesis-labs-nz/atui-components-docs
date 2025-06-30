import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$3 } from './p-B8u3Es9V.js';
import { d as defineCustomElement$2 } from './p-CEO3zNbx.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

const AtuiButtonGroup = /*@__PURE__*/ proxyCustomElement(class AtuiButtonGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiIndexChange = createEvent(this, "atuiIndexChange", 7);
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * List of options to be displayed on the button group.
         */
        this.options = [];
        this.buttonGroupId = `buttonGroup-${Math.random().toString(36).substring(2, 11)}`;
        this.buttonRefs = [];
    }
    componentDidLoad() {
        this.setInitialActiveButton();
    }
    handleChange(value, index) {
        this.value = value;
        this.atuiChange.emit(value);
        this.atuiIndexChange.emit(index);
    }
    setInitialActiveButton() {
        const activeOption = this.options.find((option) => option.option_id === this.value);
        if (activeOption) {
            this.value = activeOption.option_id;
        }
        else if (this.options.length > 0) {
            this.value = this.options[0].option_id;
        }
    }
    render() {
        return (h(Host, { key: 'de0401ae303ce337ead2b86b8a4b482b649113b9', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: '63262ebcd10c33b6ba0fa6c8af95aa8d389e1793', class: "flex flex-col" }, h("slot", { key: '9df101ff3e8e1993cabd7195fa572fd1478ab69e', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: 'f855b33e54e7e9fc07958a3ecc6981e6a7a6f9f5', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '8fd299e092f52aec2f77ba2dac64b79fc5ca1932', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: 'f8dee734765778572e368a8078d25dd2db35a2a6', class: "inset-shadow-xs relative rounded-lg border border-med bg-white" }, h("ul", { key: 'be74d62f28bdb51de90d4628d539877f8624f81d', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), h("slot", { key: 'd5610ddc38b72adcdf11247ad11a439d5a4f386d' }))), this.error_text && (h("span", { key: 'a32aa56ab01f95113d72b57cdc88894e9b98d5ec', class: "text-xs font-medium text-error", "data-name": "button-group-error-text" }, this.error_text))));
    }
    renderOptions() {
        return this.options.map((option, index) => (h("li", { class: `relative z-10 mr-[-1px] ${this.disabled ? 'pointer-events-none' : ''}`, ref: (el) => (this.buttonRefs[index] = el) }, h("atui-button-group-option", { option_id: option.option_id, label: option.label, is_active: this.value === option.option_id, disabled: option.disabled, onAtuiClick: () => this.handleChange(option.option_id, index), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleChange(option.option_id, index);
                    event.preventDefault();
                }
            } }))));
    }
    get el() { return this; }
}, [4, "atui-button-group", {
        "label": [1],
        "info_text": [1],
        "hint_text": [1],
        "error_text": [1],
        "options": [16],
        "value": [1025],
        "disabled": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-button-group", "atui-button-group-option", "atui-form-label", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-button-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiButtonGroup);
            }
            break;
        case "atui-button-group-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiButtonGroup as A, defineCustomElement as d };
//# sourceMappingURL=p-BOCO6_-f.js.map

//# sourceMappingURL=p-BOCO6_-f.js.map