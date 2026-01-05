'use strict';

var index = require('./index-COiLLAKF.js');

const AtEditTextCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
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
        return (index.h(index.Host, { key: '139f01b6fdf2f7b593f4781c71a3f8e0e52fbcf9', class: "flex h-full items-center leading-[100%]" }, index.h("at-input", { key: '70172d8ed20d1f4351c010b264403340262e2997', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

exports.at_edit_text_cell = AtEditTextCell;
//# sourceMappingURL=at-edit-text-cell.entry.cjs.js.map
