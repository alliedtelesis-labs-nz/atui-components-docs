import { p as proxyCustomElement, H, h, c as Host } from './p-DCAHuMKA.js';
import { d as defineCustomElement$1 } from './p-Dr0MGi_U.js';

const AtCheckboxCellComponent = /*@__PURE__*/ proxyCustomElement(class AtCheckboxCellComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    params;
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
        if (checked !== undefined && this.params?.setValue) {
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
        return (h(Host, { key: '7f969b7856e46f1bd06d7b1da8bf04edd6efee96', class: "flex h-full items-center" }, h("at-checkbox", { key: '049f6caf21a62932e4f2d1802e27babac8c6c423', class: "w-auto self-center", disabled: isDisabled, value: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
}, [256, "at-checkbox-cell"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-checkbox-cell", "at-checkbox"];
    components.forEach(tagName => { switch (tagName) {
        case "at-checkbox-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtCheckboxCellComponent);
            }
            break;
        case "at-checkbox":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtCheckboxCellComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-BoChKLEa.js.map

//# sourceMappingURL=p-BoChKLEa.js.map