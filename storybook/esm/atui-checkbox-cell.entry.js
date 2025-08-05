import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';

const AtuiCheckboxCellComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
    get el() { return getElement(this); }
};

export { AtuiCheckboxCellComponent as atui_checkbox_cell };
//# sourceMappingURL=atui-checkbox-cell.entry.js.map

//# sourceMappingURL=atui-checkbox-cell.entry.js.map