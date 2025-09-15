'use strict';

var index = require('./index-i7hIKTeN.js');

const AtEditTextCell = class {
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
        return (index.h(index.Host, { key: '401dc3423ea37f26619d1143c7eff942d5f98e83', class: "flex h-full items-center leading-[100%]" }, index.h("at-input", { key: '2ecc3a6e2794ffb13bb61684077ad8fed0557218', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return index.getElement(this); }
};

exports.at_edit_text_cell = AtEditTextCell;
//# sourceMappingURL=at-edit-text-cell.entry.cjs.js.map

//# sourceMappingURL=at-edit-text-cell.cjs.entry.js.map