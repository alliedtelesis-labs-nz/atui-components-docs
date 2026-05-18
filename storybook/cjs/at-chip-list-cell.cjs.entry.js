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
        return (index.h(index.Host, { key: 'd7865d95cdf91aafb558c341189030e285f8a9ab', class: "flex h-full items-center" }, index.h("at-chip-list", { key: 'a06373e4490caab89e60f4be7e9c7b3e9246b8d1', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
