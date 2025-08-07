'use strict';

var index = require('./index-nKeTsW5N.js');

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
        return (index.h(index.Host, { key: '6c15bd79915a4e8d1f7e886b1f4baa55fb0748c7', class: "flex h-full items-center leading-[100%]" }, index.h("atui-input", { key: 'a02d2c712839e1539d4bfeb7cea05741d0edef4f', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_edit_text_cell = AtuiEditTextCell;
//# sourceMappingURL=atui-edit-text-cell.entry.cjs.js.map

//# sourceMappingURL=atui-edit-text-cell.cjs.entry.js.map