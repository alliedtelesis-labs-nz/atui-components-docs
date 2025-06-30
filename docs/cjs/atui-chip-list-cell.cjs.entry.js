'use strict';

var index = require('./index-DGivrgtr.js');

const AtuiChipListCell = class {
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
    }
    render() {
        return (index.h(index.Host, { key: '8d96c01476e82e82e778eda696c6ed8a6b0183cf', class: "flex h-full items-center leading-[100%]" }, index.h("atui-chip-list", { key: 'e90360c1621de2ba4e4ee603b54aad81c662c7a0', chips: this.params.value, show_clear_all: false, disabled: true })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_chip_list_cell = AtuiChipListCell;
//# sourceMappingURL=atui-chip-list-cell.entry.cjs.js.map

//# sourceMappingURL=atui-chip-list-cell.cjs.entry.js.map