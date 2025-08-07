import { r as registerInstance, h, H as Host, g as getElement } from './index-BvDeEv6o.js';

const AtuiCheckboxCellComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};

export { AtuiCheckboxCellComponent as atui_checkbox_cell };
//# sourceMappingURL=atui-checkbox-cell.entry.js.map

//# sourceMappingURL=atui-checkbox-cell.entry.js.map