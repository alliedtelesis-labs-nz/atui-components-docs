import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$3 } from './p-ClJy-cli.js';
import { d as defineCustomElement$2 } from './p-Desv48Pq.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

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
        return (h(Host, { key: 'c7f873fa9fc3dc73b872b56ad5f9d8405883c85e', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: 'd6656ae5bfd2ca8c93701fedbf890ed0244a6292', class: "flex flex-col" }, h("slot", { key: 'c5b5d0e5b468a906eecede657db35ee287b05577', name: "label" }), (this.label || this.info_text) && (h("atui-form-label", { key: 'b7687b49242cd5e9a8a72f2a8c38118c22080072', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '66d87770f508aee1c5930bc7a37f1038f3248bea', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: 'cfdcde7c197fa05a496af4edc3f0b26217c16018', class: "inset-shadow-xs relative rounded-lg border border-med bg-white" }, h("ul", { key: 'c9e954dbe281d3f162b18b8e709eff80081844b4', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), h("slot", { key: '58533da477fb7aa634d435427951972491741200' }))), this.error_text && (h("span", { key: '75e47af86672e63583c7cf078660352f67c1a012', class: "text-xs font-medium text-error", "data-name": "button-group-error-text" }, this.error_text))));
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
//# sourceMappingURL=p-DDG70DI7.js.map

//# sourceMappingURL=p-DDG70DI7.js.map