import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-Cv5ME95Z.js';
import { c as classlist } from './p-Bfa-pAao.js';
import { d as defineCustomElement$3 } from './p-CullAxsK.js';
import { d as defineCustomElement$2 } from './p-C65WlsXe.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

const layoutVariantsConfig = {
    variants: {
        layout: {
            column: 'flex flex-col gap-4',
            row: 'flex',
            grid: 'grid grid-cols-3',
        },
    },
};
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
        const getLayoutClassname = classlist('gap-4', layoutVariantsConfig);
        const classname = getLayoutClassname({
            layout: this.layout,
        });
        return (h(Host, { key: '5ec8f62f5bb205bf56e2f3f9491b53bc0e5e6e92', role: "group", "aria-label": this.label, "aria-description": this.info_text, class: "flex w-full flex-col" }, h("div", { key: '0246bb06326c602cf1fe724046506ab330612928', class: "flex flex-col" }, h("slot", { key: '6c54df66e074bea437f493cfe36e4d9f34845351', name: "label" }), (this.label || this.required || this.info_text) && (h("atui-form-label", { key: '17886f2a5a1741ee3f48b14f2e8ff41e2c521045', label: this.label, required: this.required, info_text: this.info_text })), this.hint_text && (h("span", { key: 'd45e5e1c2a7d280a486726bb69a300250b7a13d2', class: "text-light mb-8 inline-block text-xs leading-tight", "data-name": "checkbox-group-hint" }, this.hint_text))), h("ul", { key: '21392d526a5e68a030743dde94efe6203a6e3e76', class: classname, "data-name": "checkbox-group-options" }, h("slot", { key: '8690eb07b05d3bf6c84bd00c5dee420e9e48772f' }), this.getCheckBoxes &&
            this.getCheckBoxes.map((checkbox) => (h("li", { class: "flex" }, checkbox)))), this.error_text && this.invalid && (h("span", { key: 'e312d302f4f700324f09307effaac00132974c3f', class: "text-error text-sm", "data-name": "checkbox-group-error-text" }, this.error_text))));
    }
    get el() { return this; }
    static get watchers() { return {
        "options": ["updateSelected"]
    }; }
}, [260, "atui-checkbox-group", {
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
//# sourceMappingURL=p-BIyyzulI.js.map

//# sourceMappingURL=p-BIyyzulI.js.map