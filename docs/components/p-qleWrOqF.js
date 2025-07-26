import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$3 } from './p-B3M5mbQv.js';
import { d as defineCustomElement$2 } from './p-BPMyXZEz.js';
import { d as defineCustomElement$1 } from './p-CYjfaOKk.js';

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
        return (h(Host, { key: 'f824d6a66ff63fa2ac350022b8717891fd0ab47a', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: '128f77f294a9a3ab3550f9a409ad14437ff488a0', class: "flex flex-col" }, h("slot", { key: '293ee9d5eb6757e16214c3c9dc6f445bd48ee689', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: '39e58688514062de416dc81bcadfa229af30ff1b', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '823a5df528c9e03327452f1ccd865a8cec604d74', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: '0ccff149a2e5263c5c784fe9a6b397476f127d3c', class: "inset-shadow-xs relative rounded-lg border border-med bg-white" }, h("ul", { key: '581123574520ed428aced0231b7be33951630ce0', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), h("slot", { key: '6f0a5828b707133f16ed6afe3c414f1ee6c727e8' }))), this.error_text && (h("span", { key: 'c2cacf883b311a13a517072249e0c7cb90840472', class: "text-xs font-medium text-error", "data-name": "button-group-error-text" }, this.error_text))));
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
}, [260, "atui-button-group", {
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
//# sourceMappingURL=p-qleWrOqF.js.map

//# sourceMappingURL=p-qleWrOqF.js.map