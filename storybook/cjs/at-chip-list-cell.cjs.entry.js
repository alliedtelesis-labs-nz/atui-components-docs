'use strict';

var index = require('./index-e0g5edej.js');

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
        return (index.h(index.Host, { key: '7aaf073d27063158f4739ee3f433dd8d6ad09970', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '257df956d3a792001b6a04c015c4c05f0c6d23bb', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
