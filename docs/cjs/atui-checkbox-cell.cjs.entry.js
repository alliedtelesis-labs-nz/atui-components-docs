'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiCheckboxCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '88c0ce5ba35a3b29d37cee988b86f374200e625f', class: "flex h-full items-center" }, index.h("atui-checkbox", { key: '6a29b06d667e972db448e821ceeb3a438d5afb45', class: "w-auto self-center", disabled: isDisabled, value: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_checkbox_cell = AtuiCheckboxCellComponent;
//# sourceMappingURL=atui-checkbox-cell.entry.cjs.js.map

//# sourceMappingURL=atui-checkbox-cell.cjs.entry.js.map