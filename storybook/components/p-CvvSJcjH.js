import { p as proxyCustomElement, H, h, c as Host } from './p-89eupKrN.js';
import { d as defineCustomElement$1 } from './p-BYFLJjhB.js';

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
        return (h(Host, { key: '749f700ddb56751b2bda16454274ef52bc4e19c2', class: "flex h-full items-center" }, h("at-checkbox", { key: '3a969a49e838e6f59e410e3092977d09a539e29d', class: "w-auto self-center", disabled: isDisabled, value: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
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
//# sourceMappingURL=p-CvvSJcjH.js.map

//# sourceMappingURL=p-CvvSJcjH.js.map