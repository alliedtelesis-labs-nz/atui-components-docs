import { p as proxyCustomElement, H, d as createEvent, h, c as Host } from './p-kcU6cSzl.js';
import { c as cva } from './p-CVoOBWGd.js';

const variants = cva('group/checkbox transition-[color,background-color, box-shadow] relative flex w-full cursor-pointer items-start gap-8 rounded-md p-8 outline-0 duration-300 ease-in-out focus:outline-0 focus-visible:ring-2 focus-visible:ring-active-foreground/30', {
    variants: {
        disabled: {
            false: 'cursor-pointer',
            true: 'pointer-events-none opacity-70 grayscale-[1]',
        },
        checked: {
            false: 'bg-white hover:bg-surface-1',
            true: 'bg-active-foreground/15',
        },
    },
});
const checkboxVariants = cva('material-icons shadow-inset-xs pointer-events-none z-10 !h-16 !w-16 cursor-pointer rounded-sm border border-solid accent-active-foreground ' +
    'transition-all duration-300 ease-in-out', {
    variants: {
        checked: {
            false: 'bg-surface-1 group-focus-visible/checkbox:border-2 group-focus-visible/checkbox:border-active-foreground',
            true: 'bg-active-foreground/50 group-focus-visible/checkbox:border-2 group-focus-visible/checkbox:border-active-foreground',
        },
        disabled: {
            false: 'group-focus-visible/checkbox:ring-2 group-focus-visible/checkbox:ring-active-foreground/30',
            true: null,
        },
    },
});
const AtuiCheckbox = /*@__PURE__*/ proxyCustomElement(class AtuiCheckbox extends H {
    constructor() {
        super();
        this.__registerHost();
        this.atuiChange = createEvent(this, "atuiChange", 7);
    }
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
        return (h(Host, { key: '7a2f8fb69ada14f73286f96798c33f5ff786616e', role: "checkbox", "aria-checked": this.value, "aria-labelledby": `${this.option_id}-label`, tabindex: 0, class: classname, "data-name": "checkbox-container", onKeyDown: (event) => (event.key === 'Enter' || event.key === ' ') &&
                this.checkboxEl.click(), onClick: () => this.checkboxEl.click() }, h("input", { key: '637a425d895452bb870fdd40c0b0b5e64679f252', type: "checkbox", class: checkboxClassname, "data-name": "checkbox-input", checked: this.value, onChange: (event) => this.handleChange(event), id: this.option_id, tabindex: -1, ref: (el) => (this.checkboxEl = el), disabled: this.disabled }), (this.label || this.hint_text) && (h("div", { key: '21373f275327aaa899ba3d50dd8536b1775d1655', class: "pointer-events-none flex flex-col" }, h("slot", { key: 'a8cbe84c439f6ecafdf126ae51fd32ef82b03fac', name: "label" }), this.label && (h("label", { key: '613f47777002d8221248402177188ad89a09f076', class: "mt-0 pl-4 text-xs font-medium", id: `${this.option_id}-label`, "data-name": "checkbox-label" }, this.label)), this.hint_text && (h("span", { key: 'f5d80bd24826b49df9ddc04971859138247c3386', class: "mt-0 pl-4 text-xs text-light", "data-name": "checkbox-hint" }, this.hint_text)))), h("slot", { key: 'eff6991bcbf82734e9c2bb7c8332cbaa3e701848' })));
    }
    get el() { return this; }
}, [260, "atui-checkbox", {
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
    const components = ["atui-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-checkbox":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiCheckbox);
            }
            break;
    } });
}

export { AtuiCheckbox as A, defineCustomElement as d };
//# sourceMappingURL=p-BwhlSt5K.js.map

//# sourceMappingURL=p-BwhlSt5K.js.map