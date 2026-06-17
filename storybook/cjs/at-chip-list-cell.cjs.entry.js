'use strict';

var index = require('./index-D1oh76XY.js');

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
        return (index.h(index.Host, { key: '415637f34cac0fb0b586f25d53ac81b424eb3aea', class: "flex h-full items-center" }, index.h("at-chip-list", { key: 'ea739011da94ccea18258cbf918a83dab2e71525', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
