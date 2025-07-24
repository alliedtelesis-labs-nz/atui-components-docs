import { r as registerInstance, h, H as Host, g as getElement } from './index-Cd7WF2gX.js';

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
        return (h(Host, { key: '6969f0fdc6fb0fd04bdc698a8cd427cc2f03e19b', class: "flex h-full items-center" }, h("atui-checkbox", { key: '7340da4565fefff2ef986f55df51246178e18f21', class: "w-auto self-center", disabled: this.params.getDisabled
                ? this.params.getDisabled(this.params.data)
                : false, value: this.params.value, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    get el() { return getElement(this); }
};

export { AtuiCheckboxCellComponent as atui_checkbox_cell };
//# sourceMappingURL=atui-checkbox-cell.entry.js.map

//# sourceMappingURL=atui-checkbox-cell.entry.js.map