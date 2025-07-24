'use strict';

var index = require('./index-BAt2i-T2.js');

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
        return (index.h(index.Host, { key: '1288df72f2210935688c5ce296fbe561a9059160', class: "flex h-full items-center leading-[100%]" }, index.h("atui-chip-list", { key: 'f6961ae1f7281c7e0448d7284e14c6e305730dd4', chips: this.params.value, show_clear_all: false, disabled: true })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_chip_list_cell = AtuiChipListCell;
//# sourceMappingURL=atui-chip-list-cell.entry.cjs.js.map

//# sourceMappingURL=atui-chip-list-cell.cjs.entry.js.map