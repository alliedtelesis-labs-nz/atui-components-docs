import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-_-xuBOrs.js';
import { c as classlist } from './p-COG8_R0C.js';
import { d as defineCustomElement$3 } from './p-VhBaVrJ8.js';
import { d as defineCustomElement$2 } from './p-KBQbLxfU.js';
import { d as defineCustomElement$1 } from './p-DZJmpk4T.js';

const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col gap-4',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
const AtCheckboxGroup = /*@__PURE__*/ proxyCustomElement(class AtCheckboxGroup extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    /**
     * Label of the checkbox group.
     */
    label;
    /**
     * Info icon with detailed tooltip description. Displayed at right of label.
     */
    info_text;
    /**
     * Hint to be placed below the label
     */
    hint_text;
    /**
     * Displayed when the input is invalid
     */
    error_text;
    /**
     * Disables interaction with the checkbox
     */
    disabled;
    /**
     * Shows the error text
     */
    invalid;
    /**
     * Adds a required * to the label
     */
    required;
    /**
     * Options displayed in the checkbox group.
     */
    options;
    updateSelected() {
        this.options.forEach((option) => {
            if (option.value === true &&
                !this.value.includes(option.option_id)) {
                this.value.push(option.option_id);
            }
            else if (option.value === false &&
                this.value.includes(option.option_id)) {
                this.value = this.value.filter((selection) => selection !== option.option_id);
            }
        });
    }
    /**
     * Sets the layout of the checkbox-group
     */
    layout = 'column';
    /**
     * A list of strings, containing the Id's of the currently selected checkboxes
     */
    value = [];
    get el() { return this; }
    checkboxEls = [];
    /**
     * Emits an event containing the 'selected' prop when changed
     */
    atuiChange;
    formControlSelected = null;
    componentDidLoad() {
        if (!this.getCheckBoxes) {
            this.el
                .querySelectorAll('at-checkbox')
                .forEach((checkboxEl, index) => {
                checkboxEl.option_id = `${index}`;
                checkboxEl.disabled = this.disabled;
                checkboxEl.value = this.value.includes(`${index}`);
                checkboxEl.addEventListener('atuiChange', (event) => this.handleChange(event, `${index}`));
                this.checkboxEls.push(checkboxEl);
            });
        }
    }
    get getCheckBoxes() {
        if (this.options) {
            if (this.formControlSelected !== null) {
                this.value = this.formControlSelected;
                this.formControlSelected = null;
            }
            return this.options.map((option) => (h("at-checkbox", { option_id: option.option_id, label: option.label, hint_text: option.hint_text, value: this.value.includes(option.option_id), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.option_id) })));
        }
        return '';
    }
    handleChange(event, checkboxId) {
        event.stopPropagation();
        this.value = this.value.includes(checkboxId)
            ? this.value.filter((option) => option !== checkboxId)
            : [...this.value, checkboxId];
        this.atuiChange.emit(this.value);
    }
    render() {
        const getLayoutClassname = classlist('gap-4', layoutVariantsConfig);
        const classname = getLayoutClassname({
            layout: this.layout,
        });
        return (h(Host, { key: '741608699735a7ca8eb63296f26171d4f356568e', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, h("div", { key: '0b02dfcd31b02a8f974a68f2d84e6f8edd88dbc9', class: "flex flex-col" }, h("slot", { key: 'db676069e7f5fb73e89e1e3675f5bbb6991e883c', name: "label" }), (this.label || this.required || this.info_text) && (h("at-form-label", { key: '5ba539507c8fea2b9a341264413175d23cdf2fdc', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: '9ad19cf1e91b4474dc9543ca90392f799543ce86', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), h("ul", { key: '968fc82901a9e7e0353181d80b6be1ef05924f8b', class: classname, "data-name": "checkbox-group-options" }, h("slot", { key: '53204e65d0f59f25f99add0186f775c3e37113bf' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (h("span", { key: 'd11b1d39b0b8f3d0dba62c35dd8dcff612855b2c', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
}, [260, "at-checkbox-group", {
        "label": [1],
        "info_text": [1],
        "hint_text": [1],
        "error_text": [1],
        "disabled": [4],
        "invalid": [4],
        "required": [4],
        "options": [16],
        "layout": [1],
        "value": [1040]
    }, undefined, {
        "options": ["updateSelected"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-checkbox-group", "at-checkbox", "at-form-label", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-checkbox-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtCheckboxGroup);
            }
            break;
        case "at-checkbox":
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

export { AtCheckboxGroup as A, defineCustomElement as d };
//# sourceMappingURL=p-ChJiJnwI.js.map

//# sourceMappingURL=p-ChJiJnwI.js.map