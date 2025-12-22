import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$4 } from './p-CIL9MUFC.js';
import { d as defineCustomElement$3 } from './p-BOj0tOV2.js';
import { d as defineCustomElement$2 } from './p-B8lZLFeC.js';

const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
const getLayoutClass = classlist('gap-4', layoutVariantsConfig);
const AtRadioGroup$1 = /*@__PURE__*/ proxyCustomElement(class AtRadioGroup extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label of the radio group.
     */
    label;
    /**
     * Optional info icon with detailed tooltip description.
     * Displayed at right of label.
     */
    info_text;
    /**
     * Direction that the radio elements are placed
     */
    layout = 'column';
    /**
     * Disables the radio options but keeps the text readable. Use for global readonly form state.
     */
    disabled;
    /**
     * Disables interaction with atui-radio elements when set
     */
    readonly;
    /**
     * Adds a required * to the label
     */
    required;
    /**
     * Short description or validation hint if required
     */
    hint_text;
    /**
     * Shown when 'invalid' prop is set
     */
    error_text;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Options displayed in the radio group.
     */
    options;
    /**
     * A string containing the Id of the currently selected radio
     */
    value;
    get el() { return this; }
    watchValue(newValue) {
        this.updateSlottedRadiosState(newValue);
    }
    radioEls = [];
    radioGroupId = `radiogroup-${Math.random().toString(36).substring(2, 11)}`;
    /**
     * Emits an event when active radio element changes. `event.detail` is the ID of the active radio
     */
    atuiChange;
    handleChange(optionId) {
        if (this.value !== optionId) {
            this.value = optionId;
            this.atuiChange.emit(optionId);
        }
    }
    focusAndClickRelativeRadio(relativePosition) {
        const indexOfActiveRadio = this.radioEls.indexOf(this.el.ownerDocument.activeElement);
        const nextRadioEl = this.radioEls[(indexOfActiveRadio + relativePosition + this.radioEls.length) %
            this.radioEls.length];
        nextRadioEl.click();
        nextRadioEl.focus();
    }
    handleKeyDown(event) {
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                this.focusAndClickRelativeRadio(1);
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                event.preventDefault();
                this.focusAndClickRelativeRadio(-1);
                break;
        }
    }
    get getRadios() {
        if (this.options && this.options.length > 0) {
            return this.options.map((option) => (h("at-radio", { label: option.label, hint_text: option.hint_text, option_id: option.option_id, readonly: this.readonly || option.readonly, disabled: this.disabled || option.disabled, value: this.value === option.option_id, onAtuiChange: (event) => {
                    event.stopPropagation();
                    if (!this.disabled && !this.readonly) {
                        this.handleChange(option.option_id);
                    }
                }, group: this.label || this.radioGroupId, ref: (el) => this.radioEls.push(el) })));
        }
    }
    getSlottedRadios() {
        return Array.from(this.el.querySelectorAll('at-radio'));
    }
    componentDidLoad() {
        this.initializeSlottedRadios();
        this.updateSlottedRadiosState(this.value);
    }
    initializeSlottedRadios() {
        const slottedRadios = this.getSlottedRadios();
        const groupName = this.label || this.radioGroupId;
        slottedRadios.forEach((radio) => {
            if (!radio.getAttribute('group')) {
                radio.setAttribute('group', groupName);
            }
            if (!radio.getAttribute('option_id')) {
                const optionId = `radio-${Math.random().toString(36).substring(2, 11)}`;
                radio.setAttribute('option_id', optionId);
            }
            if (this.disabled !== undefined) {
                radio.disabled = this.disabled;
            }
            if (this.readonly !== undefined) {
                radio.readonly = this.readonly;
            }
        });
    }
    handleSlottedRadioChange(event) {
        const slottedRadios = this.getSlottedRadios();
        const target = event.target;
        const isSlottedRadio = slottedRadios.includes(target);
        if (!isSlottedRadio)
            return;
        event.stopPropagation();
        if (this.disabled || this.readonly)
            return;
        const optionId = event.detail;
        if (!optionId)
            return;
        this.handleChange(optionId);
        this.updateSlottedRadiosState(optionId);
    }
    updateSlottedRadiosState(selectedOptionId) {
        const slottedRadios = this.getSlottedRadios();
        slottedRadios.forEach((radio) => {
            const radioOptionId = radio.getAttribute('option_id');
            radio.value = radioOptionId === selectedOptionId;
        });
    }
    render() {
        const classname = getLayoutClass({
            layout: this.layout,
        });
        return (h(Host, { key: '0eaa90d48ae753687e29aae551b79a54cb0d9f8d', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, h("div", { key: '04cac5c7f3d25d66b6690c00c52e50859f203fe0', class: "flex flex-col" }, h("slot", { key: '8bc6907b1efe6d6de80c9a9e9eb291d3df5b5bc4', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: 'd2f961cf0bc85a43ce858df8f30504e077a9f9ba', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: 'c3e0cc5ccc150b98aa91dc152c0506997ca577c0', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), h("ul", { key: '197cbffee5a12a04aff7ec1e53d95b047c38159d', class: classname, "data-name": "radio-group-options" }, h("slot", { key: 'a8c9cfe86030e653a94063c40adae74b473ce45f' }), this.getRadios &&
            this.getRadios.map((radio) => (h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (h("span", { key: '22d3176d73a538e9e38385df3b4c95a8ea1756ce', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "value": ["watchValue"]
    }; }
}, [260, "at-radio-group", {
        "label": [1],
        "info_text": [1],
        "layout": [1],
        "disabled": [4],
        "readonly": [4],
        "required": [4],
        "hint_text": [1],
        "error_text": [1],
        "invalid": [4],
        "options": [16],
        "value": [1]
    }, [[0, "atuiChange", "handleSlottedRadioChange"]], {
        "value": ["watchValue"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-radio-group", "at-form-label", "at-radio", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-radio-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtRadioGroup$1);
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "at-radio":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const AtRadioGroup = AtRadioGroup$1;
const defineCustomElement = defineCustomElement$1;

export { AtRadioGroup, defineCustomElement };
//# sourceMappingURL=at-radio-group.js.map

//# sourceMappingURL=at-radio-group.js.map