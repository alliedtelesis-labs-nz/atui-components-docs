import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$3 } from './p-DKz0HNdG.js';
import { d as defineCustomElement$2 } from './p-Dl1uX_No.js';
import { d as defineCustomElement$1 } from './p-DRSCT2MW.js';

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
        return (h(Host, { key: '13b0c9f5a25e2eff0de5c8e0f6093973a0eb2799', class: "flex h-full items-center leading-[100%]" }, h("atui-toggle-switch", { key: '694f5991eba64cdc8c1fc6c2822f8e63179622a2', label: this.params.getLabel(this.params), onChange: () => this.params.onTrigger(this.params), label_position: "after", value: this.params.value })));
    }
    get el() { return this; }
}, [256, "atui-toggle-cell", {
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
//# sourceMappingURL=p-B-vyefXr.js.map

//# sourceMappingURL=p-B-vyefXr.js.map