'use strict';

var index = require('./index-COiLLAKF.js');

const AtChipListCell = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    params;
    chips = [];
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
        return (index.h(index.Host, { key: '1a9819e12605b66c8415d9b8c01cb2f8fe02abe6', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '43242eb869f25b32f00f31f09750e1832a913eeb', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
//# sourceMappingURL=at-chip-list-cell.entry.cjs.js.map
