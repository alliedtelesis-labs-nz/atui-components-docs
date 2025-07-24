'use strict';

var index = require('./index-BAt2i-T2.js');

const AtuiCheckboxCellComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '6969f0fdc6fb0fd04bdc698a8cd427cc2f03e19b', class: "flex h-full items-center" }, index.h("atui-checkbox", { key: '7340da4565fefff2ef986f55df51246178e18f21', class: "w-auto self-center", disabled: this.params.getDisabled
                ? this.params.getDisabled(this.params.data)
                : false, value: this.params.value, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_checkbox_cell = AtuiCheckboxCellComponent;
//# sourceMappingURL=atui-checkbox-cell.entry.cjs.js.map

//# sourceMappingURL=atui-checkbox-cell.cjs.entry.js.map