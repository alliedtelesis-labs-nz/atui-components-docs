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
        return (index.h(index.Host, { key: '0c70317f8d831d1f86951aa0c159dc988dcda58a', class: "flex h-full items-center" }, index.h("at-chip-list", { key: 'b4a3440a4550fc0e113207bdcd9309bed6fef77b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
