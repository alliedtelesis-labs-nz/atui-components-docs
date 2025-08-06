'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiEditTextCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        if (this.params.onValueChange) {
            this.params.onValueChange(this.params);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'e43d8f1823896f13a0df6285d53bfc5dd3753db0', class: "flex h-full items-center leading-[100%]" }, index.h("atui-input", { key: 'dc0fa5277473dbcdc1f60fc570343c2e24301f9f', readonly: !this.params.writePermission, clearable: true, value: this.params.value, onInput: (event) => this.updateCell(event.target.value), onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_edit_text_cell = AtuiEditTextCell;
//# sourceMappingURL=atui-edit-text-cell.entry.cjs.js.map

//# sourceMappingURL=atui-edit-text-cell.cjs.entry.js.map