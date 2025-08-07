import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-CHjIMSAP.js';
import { d as defineCustomElement$3 } from './p-Bihor1e6.js';
import { d as defineCustomElement$2 } from './p-DROFJHTo.js';
import { d as defineCustomElement$1 } from './p-Dl92gNAv.js';

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
        return (h(Host, { key: '017ab3c0fcb9bf738366e26f22dade344ff536be', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: 'e468ad47749d3b7a9699c5dfcd49ae7093da4c59', class: "flex flex-col" }, h("slot", { key: '410523a6dd09c6e7af6fad3a83976603dff83437', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: 'f04500fe369ac046c94336268151a6350147e2c7', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'df4bf6d4429662db3baf188693ee13c6b352abd9', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: '96d9d39cf7943d2ad49c479afdbe9517d4898041', class: "inset-shadow-xs relative rounded-lg border border-med bg-white" }, h("ul", { key: '7fbff7280ec0f1d6488c429f61fbf9631d50e5f7', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), h("slot", { key: '2ec43c4f287eed77f4c9ee892dc5b1b0b589c85b' }))), this.error_text && (h("span", { key: 'f7dcaef11ab2a3efa7992ece36c4fcb10fbcb700', class: "text-xs font-medium text-error", "data-name": "button-group-error-text" }, this.error_text))));
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
//# sourceMappingURL=p-B96lDhvw.js.map

//# sourceMappingURL=p-B96lDhvw.js.map