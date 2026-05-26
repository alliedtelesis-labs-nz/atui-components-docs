'use strict';

var index = require('./index--r5sCsiV.js');

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
        return (index.h(index.Host, { key: '67c819c39d9744a28e4accabdfd86a243186ba40', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '47f8d4f3dfcd53ce120bd387ebbfeb20d2cc9f87', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
