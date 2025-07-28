'use strict';

var index = require('./index-BAt2i-T2.js');

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
        return (index.h(index.Host, { key: '2b5b7a7c7cfd5d3a9f3dd1fae1fc93b92538425a', class: "flex h-full items-center leading-[100%]" }, index.h("atui-input", { key: 'acb00b14c33449b0abd46e554b09c36340ce8c81', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_edit_text_cell = AtuiEditTextCell;
//# sourceMappingURL=atui-edit-text-cell.entry.cjs.js.map

//# sourceMappingURL=atui-edit-text-cell.cjs.entry.js.map