import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$1 } from './p-CullAxsK.js';

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
        return (h(Host, { key: '22c897b5802f69b9d0707e06cf109b4fc930ee7e', class: "flex h-full items-center" }, h("atui-checkbox", { key: 'a9aed7d33dae59075e576834d6c0ab5cc8c48458', class: "w-auto self-center", disabled: isDisabled, value: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
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
//# sourceMappingURL=p-BwlJKDZ1.js.map

//# sourceMappingURL=p-BwlJKDZ1.js.map