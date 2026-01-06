import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$3 } from './p-C5fEyGHP.js';
import { d as defineCustomElement$2 } from './p-DSDMRn44.js';
import { d as defineCustomElement$1 } from './p-DLJt5gbB.js';

const AtToggleCell = /*@__PURE__*/ proxyCustomElement(class AtToggleCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    params;
    label;
    labelPosition;
    disabled;
    value;
    timer;
    init(params) {
        this.params = params;
        if (this.params.toggleValue) {
            this.value = this.params.toggleValue(params.data);
        }
        else {
            this.value = params.data?.toggleCell?.value || false;
        }
        if (this.params.label) {
            this.label = this.params.label(params.data);
        }
        else {
            this.label = params.data?.toggleCell?.label || '';
        }
        this.labelPosition = params.data?.toggleCell?.labelPosition || 'after';
        this.disabled = params.data?.toggleCell?.disabled || false;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.data);
        return true;
    }
    toggleHandler(change) {
        clearTimeout(this.timer);
        this.params.value = change.detail;
        this.timer = setTimeout(() => { }, 2000);
    }
    updateCell(newValue) {
        clearTimeout(this.timer);
        this.params.value = newValue;
        this.timer = setTimeout(() => { }, 2000);
    }
    render() {
        return (h(Host, { key: '768f00e4a9a31d362eaf9234ac652ee93f8ac119', class: "flex h-full items-center leading-[100%]" }, h("at-toggle-switch", { key: 'af55accdc4cac25a78c0798682e85088f048b3d4', label: this.label, onChange: () => this.params.onTrigger?.(this.params), label_position: this.labelPosition, show_label: !!this.label, value: this.value, disabled: this.disabled })));
    }
}, [256, "at-toggle-cell", {
        "params": [32],
        "label": [32],
        "labelPosition": [32],
        "disabled": [32],
        "value": [32]
    }, [[0, "toggleFunction", "toggleHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-toggle-cell", "at-form-label", "at-toggle-switch", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-toggle-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtToggleCell);
            }
            break;
        case "at-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "at-toggle-switch":
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

export { AtToggleCell as A, defineCustomElement as d };
//# sourceMappingURL=p-DguRDQ_O.js.map

//# sourceMappingURL=p-DguRDQ_O.js.map