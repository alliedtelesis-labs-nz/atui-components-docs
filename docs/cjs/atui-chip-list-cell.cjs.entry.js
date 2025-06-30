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
        return (index.h(index.Host, { key: '895d628081ef57628b57f20d2adc65a3062af895', class: "flex h-full items-center leading-[100%]" }, index.h("atui-chip-list", { key: 'eb091e9d4300c4936e81b9eb3a37c7ddcf2dd905', chips: this.params.value, show_clear_all: false, disabled: true })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_chip_list_cell = AtuiChipListCell;
//# sourceMappingURL=atui-chip-list-cell.entry.cjs.js.map

//# sourceMappingURL=atui-chip-list-cell.cjs.entry.js.map