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
        return (index.h(index.Host, { key: 'b31610d9bfe618e5b088bfdb822edf6a5529959b', class: "flex h-full items-center leading-[100%]" }, index.h("at-input", { key: 'f1ee05a81233b8c71982aa03176e21dfe8dcc4bf', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

exports.at_edit_text_cell = AtEditTextCell;
//# sourceMappingURL=at-edit-text-cell.entry.cjs.js.map
