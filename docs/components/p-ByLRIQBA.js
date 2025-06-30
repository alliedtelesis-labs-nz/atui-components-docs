import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$1 } from './p-D2IbPMfh.js';

const AtuiCheckboxCellComponent = /*@__PURE__*/ proxyCustomElement(class AtuiCheckboxCellComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
        this.params.api.refreshHeader();
        this.params.width = 60;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        return true;
    }
    setValue(checked) {
        if (checked !== undefined) {
            this.params.setValue(checked);
            this.params.api.refreshHeader();
        }
    }
    render() {
        return (h(Host, { key: 'f62dec540ef4f4ba2f64e8a1f2cd50f06e564eb3', class: "flex h-full items-center" }, h("atui-checkbox", { key: '44debc90b9350cff807071582109dd01be139bbd', class: "w-auto self-center", disabled: this.params.getDisabled
                ? this.params.getDisabled(this.params.data)
                : false, value: this.params.value, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    get el() { return this; }
}, [0, "atui-checkbox-cell", {
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-checkbox-cell", "atui-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-checkbox-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiCheckboxCellComponent);
            }
            break;
        case "atui-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiCheckboxCellComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-ByLRIQBA.js.map

//# sourceMappingURL=p-ByLRIQBA.js.map