'use strict';

var index = require('./index-D7uTOurQ.js');

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
        return (index.h(index.Host, { key: 'c4ab5bcf740ff1b12df203e782d48308de004c62', class: "flex h-full items-center" }, index.h("at-chip-list", { key: 'f14f8392120ab9b612f14e1a2fc8cbc3e1d0e7de', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
