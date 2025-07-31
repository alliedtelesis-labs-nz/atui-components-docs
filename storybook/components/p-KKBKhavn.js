import { p as proxyCustomElement, H, h, c as Host } from './p-CIJrXZgf.js';
import { d as defineCustomElement$1 } from './p-BdDKt_kD.js';

const AtuiCheckboxCellComponent = /*@__PURE__*/ proxyCustomElement(class AtuiCheckboxCellComponent extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        this.params = params;
        this.params.api.refreshHeader();
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        return true;
    }
    setValue(checked) {
        var _a;
        if (checked !== undefined && ((_a = this.params) === null || _a === void 0 ? void 0 : _a.setValue)) {
            this.params.setValue(checked);
            this.params.api.refreshHeader();
        }
    }
    render() {
        const isChecked = this.params.checked
            ? this.params.checked(this.params.data)
            : false;
        const isDisabled = this.params.getDisabled
            ? this.params.getDisabled(this.params.data)
            : false;
        return (h(Host, { key: '88c0ce5ba35a3b29d37cee988b86f374200e625f', class: "flex h-full items-center" }, h("atui-checkbox", { key: '6a29b06d667e972db448e821ceeb3a438d5afb45', class: "w-auto self-center", disabled: isDisabled, value: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    get el() { return this; }
}, [256, "atui-checkbox-cell"]);
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
//# sourceMappingURL=p-KKBKhavn.js.map

//# sourceMappingURL=p-KKBKhavn.js.map