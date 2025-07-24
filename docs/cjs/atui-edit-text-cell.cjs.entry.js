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
        return (index.h(index.Host, { key: 'c54beb143f043db73e5da528d29d17819a4659d6', class: "flex h-full items-center leading-[100%]" }, index.h("atui-input", { key: '97db1b978c67f42b05508ce77d29dc0013738aae', readonly: !this.params.writePermission, clearable: true, value: this.params.value, onInput: (event) => this.updateCell(event.target.value), onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_edit_text_cell = AtuiEditTextCell;
//# sourceMappingURL=atui-edit-text-cell.entry.cjs.js.map

//# sourceMappingURL=atui-edit-text-cell.cjs.entry.js.map