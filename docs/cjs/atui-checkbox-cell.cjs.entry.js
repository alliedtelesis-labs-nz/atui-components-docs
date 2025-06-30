'use strict';

var index = require('./index-DGivrgtr.js');

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
        return (index.h(index.Host, { key: '7e29a15a0bae228f7a762dcda3a7f1f198556e06', class: "flex h-full items-center" }, index.h("atui-checkbox", { key: 'f5eaecfaece823d87b52a4d0581275b65c53d082', class: "w-auto self-center", disabled: this.params.getDisabled
                ? this.params.getDisabled(this.params.data)
                : false, value: this.params.value, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_checkbox_cell = AtuiCheckboxCellComponent;
//# sourceMappingURL=atui-checkbox-cell.entry.cjs.js.map

//# sourceMappingURL=atui-checkbox-cell.cjs.entry.js.map