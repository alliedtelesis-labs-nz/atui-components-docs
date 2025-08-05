import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$3 } from './p-BYrz7h7d.js';
import { d as defineCustomElement$2 } from './p-CwX_VO1t.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

const AtuiToggleCell = /*@__PURE__*/ proxyCustomElement(class AtuiToggleCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
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
        return (h(Host, { key: '82de1279aa8c9e17a9b7f2ebbcd3af9064687a7f', class: "flex h-full items-center leading-[100%]" }, h("atui-toggle-switch", { key: '948f7f6d76fe0add0f5ced1f081bca1149aaa55c', label: this.params.getLabel(this.params), onChange: () => this.params.onTrigger(this.params), label_position: "after", value: this.params.value })));
    }
    get el() { return this; }
}, [0, "atui-toggle-cell", {
        "params": [32]
    }, [[0, "toggleFunction", "toggleHandler"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-toggle-cell", "atui-form-label", "atui-toggle-switch", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-toggle-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiToggleCell);
            }
            break;
        case "atui-form-label":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "atui-toggle-switch":
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

export { AtuiToggleCell as A, defineCustomElement as d };
//# sourceMappingURL=p-Ds_yGgR6.js.map

//# sourceMappingURL=p-Ds_yGgR6.js.map