import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-BAZ2N91w.js';
import { c as classlist } from './p-COG8_R0C.js';

const variants = classlist('group/checkbox transition-[color,background-color, box-shadow] focus-visible:ring-active-foreground/30 relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring-2', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'hover:bg-surface-1 bg-white',
            true: 'bg-active-foreground/15',
        },
    },
});
const checkboxVariants = classlist('material-icons shadow-inset-xs accent-active-foreground pointer-events-none z-10 !h-16 !w-16 cursor-pointer rounded-sm border border-solid ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-surface-1 group-focus-visible/checkbox:border-active-foreground group-focus-visible/checkbox:border-2',
            true: 'bg-active-foreground/50 group-focus-visible/checkbox:border-active-foreground group-focus-visible/checkbox:border-2',
        },
        disabled: {
            false: 'group-focus-visible/checkbox:ring-active-foreground/30 group-focus-visible/checkbox:ring-2',
            true: null,
        },
    },
});
const AtCheckbox = /*@__PURE__*/ proxyCustomElement(class AtCheckbox extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
    get el() { return this; }
    /**
     * Title of the checkbox component.
     */
    label;
    /**
     * Subtitle of the checkbox component.
     */
    hint_text;
    /**
     * Id of the checkbox.
     */
    option_id;
    /**
     * State of the checkbox
     */
    value;
    /**
     * Disables interaction with the checkbox
     */
    disabled;
    checkboxEl;
    /**
     * When the checkbox is toggled, this will emit true if the current value is checked, vice versa.
     */
    atuiChange;
    handleChange(value) {
        this.value = value.target.checked;
        this.atuiChange.emit(this.value);
    }
    render() {
        const classname = variants({
            disabled: this.disabled,
            checked: this.value,
        });
        const checkboxClassname = checkboxVariants({
            checked: this.value,
            disabled: this.disabled,
        });
        return (h(Host, { key: 'bc27329331b644ae04b6c259ee04f381cbd635a3', role: "checkbox", "aria-checked": this.value, "aria-labelledby": `${this.option_id}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: 'd05aadfa8014531eeb2f93692008006fda0c267e', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.value, onChange: (event) => this.handleChange(event), id: this.option_id, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: '62f78fc4caf74c0981f4a21dfde9796b93aee556', class: "pointer-events-none flex flex-col" }, h("slot", { key: '970e61397d974c26459e66a4d857afa0cf183af6', name: "label" }), this.label && (h("label", { key: 'd50101bdc03caf89f3a1298cd7bb7820e6f17aa1', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: '5eb4bf980079e9410e6244a4f6520dba515e4393', class: "text-light mt-0 pl-4 text-xs", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: '8444d7afc75c356524cec472aaae8d7acb0ab764' })));
    }
}, [260, "at-checkbox", {
        "label": [1],
        "hint_text": [1],
        "option_id": [1],
        "value": [1028],
        "disabled": [4]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "at-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtCheckbox);
            }
            break;
    } });
}

export { AtCheckbox as A, defineCustomElement as d };
//# sourceMappingURL=p-BufkcaDA.js.map

//# sourceMappingURL=p-BufkcaDA.js.map