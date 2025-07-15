import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$1 } from './p-DQB8otHh.js';

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
        return (h(Host, { key: '6969f0fdc6fb0fd04bdc698a8cd427cc2f03e19b', class: "flex h-full items-center" }, h("atui-checkbox", { key: '7340da4565fefff2ef986f55df51246178e18f21', class: "w-auto self-center", disabled: this.params.getDisabled
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
//# sourceMappingURL=p-Hpq0Sz7G.js.map

//# sourceMappingURL=p-Hpq0Sz7G.js.map