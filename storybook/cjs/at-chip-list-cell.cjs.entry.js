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
        return (index.h(index.Host, { key: '163ec20046aca7a60a84a512a80283ea149f820e', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '1de7f6704b3cdeb5fecb2fce32d089532361e1a4', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
