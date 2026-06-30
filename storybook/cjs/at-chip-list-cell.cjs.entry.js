'use strict';

var index = require('./index-l94cJki_.js');

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
        return (index.h(index.Host, { key: '0f9c54ffd8793db9dc299b9e8da69914b29f03e8', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '79a4750308ba6f88749abad38dbf47aac8ebd729', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
