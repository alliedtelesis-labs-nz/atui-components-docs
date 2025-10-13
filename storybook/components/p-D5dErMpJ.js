import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$3 } from './p-DdmnYyR4.js';
import { d as defineCustomElement$2 } from './p-DS8rd89A.js';
import { d as defineCustomElement$1 } from './p-CJ4jwrx3.js';

const AtButtonGroup = /*@__PURE__*/ proxyCustomElement(class AtButtonGroup extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiIndexChange = createEvent(this, "atuiIndexChange", 7);
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label for button group.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     *
     * Displayed at right of label.
     */
    info_text;
    /**
     * Hint for options.
     */
    hint_text;
    /**
     * Error text for invalid choices.
     */
    error_text;
    /**
     * List of options to be displayed on the button group.
     */
    options = [];
    /**
     * Sets the current active button
     */
    value;
    /**
     * Disables the button group and prevents interaction
     */
    disabled;
    get el() { return this; }
    buttonGroupId = `buttonGroup-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * When the active button is changed, this will emit the 0-based index of the active button
     */
    atuiIndexChange;
    /**
     * When the active button is changed, this will emit the text value of the active button
     */
    atuiChange;
    buttonRefs = [];
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
        return (h(Host, { key: '17b28aa128c82b5e35ce1c923f613b7ce08e1b17', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: '31f94c8c6825ef0b303cda47fd69a0cecf16dd0a', class: "flex flex-col" }, h("slot", { key: 'd64ad6f37622deb7ac016260452946092b5186d7', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '19260c04612021bfd271830d4f78ee7243058626', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: '8781e317ce36089c2062dc7dd69ea3059e6274f4', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: '07f0e9f0fa567d2f86238685a3705c66641f46ca', class: "border-med relative rounded-lg border bg-white inset-shadow-xs" }, h("ul", { key: 'd8ebaecce0a8a88a9db3bfdaf264a989c1617895', class: "relative z-20 m-[3px] flex flex-row", "data-name": "button-group-options" }, this.renderOptions(), h("slot", { key: 'ee2bcae1219eeea8e241d4dff112095f736367ae' }))), this.error_text && (h("span", { key: 'cc327bdd3f275579e8aec4b9732aab958cef14e2', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    renderOptions() {
        return this.options.map((option, index) => (h("li", { class: `relative z-10 mr-[-1px] ${this.disabled ? 'pointer-events-none' : ''}`, ref: (el) => (this.buttonRefs[index] = el) }, h("at-button-group-option", { option_id: option.option_id, label: option.label, is_active: this.value === option.option_id, disabled: option.disabled, onAtuiClick: () => this.handleChange(option.option_id, index), onKeyDown: (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    this.handleChange(option.option_id, index);
                    event.preventDefault();
                }
            } }))));
    }
}, [260, "at-button-group", {
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
    const components = ["at-button-group", "at-button-group-option", "at-form-label", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-button-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtButtonGroup);
            }
            break;
        case "at-button-group-option":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtButtonGroup as A, defineCustomElement as d };
//# sourceMappingURL=p-D5dErMpJ.js.map

//# sourceMappingURL=p-D5dErMpJ.js.map