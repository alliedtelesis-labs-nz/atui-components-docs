import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$3 } from './p-D0rx_oNk.js';
import { d as defineCustomElement$2 } from './p-0L3Bm0n5.js';
import { d as defineCustomElement$1 } from './p-BlmpD1px.js';

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
    buttonEls = [];
    handleValueChange(newValue) {
        if (!this.options || this.options.length === 0) {
            this.buttonEls.forEach((child) => {
                child.is_active = child.option_id === newValue;
            });
        }
    }
    componentDidLoad() {
        if (!this.options || this.options.length === 0) {
            this.buttonEls = this.getButtonElements();
            this.initializeButtons();
            this.attachEventListenersToButtons();
            setTimeout(() => this.activateOptionButton());
        }
        this.el.addEventListener('keydown', this.handleKeyDown);
    }
    getButtonElements() {
        return Array.from(this.el.querySelectorAll('at-button-group-option'));
    }
    initializeButtons() {
        this.buttonEls.forEach((buttonEl, index) => {
            buttonEl.option_id = buttonEl.option_id || `${index}`;
            if (this.value !== undefined && this.value !== null) {
                buttonEl.is_active = this.value === buttonEl.option_id;
            }
            buttonEl.disabled = this.disabled || buttonEl.disabled;
        });
    }
    attachEventListenersToButtons() {
        this.buttonEls.forEach((buttonEl, index) => {
            buttonEl.addEventListener('atuiClick', (event) => this.handleChange(event, buttonEl.option_id, index));
        });
    }
    activateOptionButton() {
        const activeChild = this.buttonEls.find((child) => child.is_active && !child.disabled);
        const initialButton = activeChild || this.buttonEls.find((child) => !child.disabled);
        if (initialButton) {
            initialButton.is_active = true;
            this.value = initialButton.option_id;
        }
    }
    get getButtonGroupOptions() {
        if (this.options) {
            return this.options.map((option, index) => (h("at-button-group-option", { option_id: option.option_id, label: option.label, is_active: this.value === option.option_id, disabled: option.disabled, icon: option.icon, onAtuiClick: (event) => this.handleChange(event, option.option_id, index) })));
        }
        return null;
    }
    handleChange(event, optionId, index) {
        event.stopPropagation();
        this.value = optionId;
        this.atuiChange.emit(this.value);
        this.atuiIndexChange.emit(index);
        this.buttonEls.forEach((child) => {
            child.is_active = child.option_id === optionId;
        });
    }
    /**
     * Handles keyboard navigation for all button options.
     */
    handleKeyDown = (evt) => {
        if (evt.key !== 'Enter' && evt.key !== ' ')
            return;
        const target = evt.target;
        if (target.tagName !== 'BUTTON')
            return;
        const option = target.closest('at-button-group-option');
        if (!option || option.disabled)
            return;
        evt.preventDefault();
        const index = this.options?.length > 0
            ? this.options.findIndex((opt) => opt.option_id === option.option_id)
            : this.buttonEls.indexOf(option);
        if (index >= 0) {
            const customEvent = new CustomEvent('atuiClick', {
                detail: { element: option },
            });
            this.handleChange(customEvent, option.option_id, index);
        }
    };
    disconnectedCallback() {
        this.el.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        return (h(Host, { key: '51fa784b699db525255c34ac93615650732eb0cb', role: "radiogroup", "aria-labelledby": this.buttonGroupId, class: 'flex flex-col items-start' }, h("div", { key: '3accfdaf2d1b8e0bf61b32890ac5fab61851ed90', class: "flex flex-col" }, h("slot", { key: '7135fcbc0d853a9385da60c7827f9787b03b2703', name: "label" }), (this.label || this.info_text) && (h("at-form-label", { key: '4269bb20e1c00dbc578df7f236f54f1455f9ff84', id: this.buttonGroupId, label: this.label, info_text: this.info_text })), this.hint_text && (h("span", { key: 'a2d2eb2276c2a6925c5277227ee01444d9a6bb95', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "button-group-hint" }, this.hint_text))), h("div", { key: '830f331d4db615a7314d192a956dca9f60d400ea', class: "border-med relative rounded-lg border bg-white inset-shadow-xs" }, h("ul", { key: 'bf709d82367f4d86f05a4a8ed4d86c8146983ff2', class: "relative z-20 m-[2px] flex flex-row", "data-name": "button-group-options" }, h("slot", { key: 'cb0c5db96a787bb4ad8a5d36f17870076ffffffa' }), this.getButtonGroupOptions &&
            this.getButtonGroupOptions.map((button) => (h("li", { class: "relative z-10 mr-[-1px]" }, button))))), this.error_text && (h("span", { key: 'efeb2acbdb4a46e832b19d69ae122594d826ce8d', class: "text-error text-xs font-medium", "data-name": "button-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "value": ["handleValueChange"]
    }; }
}, [260, "at-button-group", {
        "label": [1],
        "info_text": [1],
        "hint_text": [1],
        "error_text": [1],
        "options": [16],
        "value": [1025],
        "disabled": [4]
    }, undefined, {
        "value": ["handleValueChange"]
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
//# sourceMappingURL=p-Cz-WHkzD.js.map

//# sourceMappingURL=p-Cz-WHkzD.js.map