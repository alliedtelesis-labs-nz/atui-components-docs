import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-B9UDFE-Z.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$4 } from './p-WlpZZSTx.js';
import { d as defineCustomElement$3 } from './p-HyXAkOf1.js';
import { d as defineCustomElement$2 } from './p-CMEk0jwv.js';

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
    render() {
        const classname = getLayoutClass({
            layout: this.layout,
        });
        return (h(Host, { key: 'e2df4194d626bed943722a9fb2cf5db74a1260e7', role: "radiogroup", onKeyDown: (event) => this.handleKeyDown(event), class: "block w-full" }, h("div", { key: '39e880170072bd0ed26c6a66e2ac2f2c31b3f857', class: "flex flex-col" }, h("slot", { key: 'e915eded0a1937f29e4d10f81972286e29fdbb9d', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '05db09c1f161f7164176504243367ac289ad27d2', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '93878d6b084d9dc138378194a21216a38d5b6973', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "radio-group-hint" }, this.hint_text))), h("ul", { key: 'f704703984c362a17f303d2306699c6a5585dc52', class: classname, "data-name": "radio-group-options" }, h("slot", { key: '7226d54fb47e5df880f3ae5bca33ae3bdbdaf831' }), this.getRadios &&
            this.getRadios.map((radio) => (h("li", { class: "flex" }, radio)))), this.error_text && this.invalid && (h("span", { key: '5b96e7c0c395d56c842301b4c599767ec87ba7ea', class: "text-error text-sm", "data-name": "radio-group-error-text" }, this.error_text))));
    }
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