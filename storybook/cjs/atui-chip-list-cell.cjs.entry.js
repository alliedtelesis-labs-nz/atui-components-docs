'use strict';

var index = require('./index-43B6Ydvl.js');

const AtuiChipListCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.chips = [];
    }
    init(params) {
        this.params = params;
        this.chips = params.chips(params.data);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        return (index.h(index.Host, { key: '60945cecec4fb2fdc798608c84f2a8de5d1f43e6', class: "flex h-full items-center" }, index.h("atui-chip-list", { key: 'df8e8f3f0a55c1a9fb1d354d03e464f9535f026b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
    get el() { return index.getElement(this); }
};

exports.atui_chip_list_cell = AtuiChipListCell;
//# sourceMappingURL=atui-chip-list-cell.entry.cjs.js.map

//# sourceMappingURL=atui-chip-list-cell.cjs.entry.js.map