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
        return (index.h(index.Host, { key: '3aa95b743af187ad43021b2ad5411e6837ff6ebf', class: "flex h-full items-center leading-[100%]" }, index.h("atui-input", { key: '051e9a3d6d6eb351ca4e84be3c076940d818c000', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_edit_text_cell = AtuiEditTextCell;
//# sourceMappingURL=atui-edit-text-cell.entry.cjs.js.map

//# sourceMappingURL=atui-edit-text-cell.cjs.entry.js.map