import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-DJD-7SVX.js';
import { c as cva } from './p-CVoOBWGd.js';
import { d as defineCustomElement$3 } from './p-BlymWuVg.js';
import { d as defineCustomElement$2 } from './p-CEO3zNbx.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

const layoutVariants = cva('gap-4', {
    variants: {
        layout: {
            column: 'flex flex-col gap-4',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
});
const AtuiCheckboxGroup = /*@__PURE__*/ proxyCustomElement(class AtuiCheckboxGroup extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
        /**
         * Sets the layout of the checkbox-group
         */
        this.layout = 'column';
        /**
         * A list of strings, containing the Id's of the currently selected checkboxes
         */
        this.value = [];
        this.checkboxEls = [];
        this.formControlSelected = null;
    }
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
    componentDidLoad() {
        if (!this.getCheckBoxes) {
            this.el
                .querySelectorAll('atui-checkbox')
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
            return this.options.map((option) => (h("atui-checkbox", { option_id: option.option_id, label: option.label, hint_text: option.hint_text, value: this.value.includes(option.option_id), disabled: this.disabled, onAtuiChange: (event) => this.handleChange(event, option.option_id) })));
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
        const classname = layoutVariants({
            layout: this.layout,
        });
        return (h(Host, { key: 'deb02ef1a7a7fbabcebfad56fc6a3b8123f5fd5d', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, h("div", { key: '30d1594bff0b797f39dd7c00a4a225ce90d46c56', class: "flex flex-col" }, h("slot", { key: 'd27bdb3bae22cdc1ef8c8a0c3dc8a037f3a59970', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '60018359e5b24617414e8d5699a4ec79f8e92eea', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: 'c5fbf10f1526fd7ab4e4362a313ec2684ebab56f', class: "mb-8 inline-block text-xs leading-tight text-light", "data-name": "checkbox-group-hint" }, this.hint_text))), h("ul", { key: '3e07847e8c675e2d8e65b4e57fca636fbb604d62', class: classname, "data-name": "checkbox-group-options" }, h("slot", { key: 'c171e0bc34210fabcae9b22af16897b7855b0359' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (h("span", { key: '5d95ef4219131a93b16f4cd4ed5e1faa85973ffa', class: "text-sm text-error", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    get el() { return this; }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
}, [4, "atui-checkbox-group", {
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
    const components = ["atui-checkbox-group", "atui-checkbox", "atui-form-label", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-checkbox-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiCheckboxGroup);
            }
            break;
        case "atui-checkbox":
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

export { AtuiCheckboxGroup as A, defineCustomElement as d };
//# sourceMappingURL=p-CJRdicyN.js.map

//# sourceMappingURL=p-CJRdicyN.js.map