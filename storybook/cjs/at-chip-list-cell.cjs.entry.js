'use strict';

var index = require('./index-CZHE0nPQ.js');

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
        return (index.h(index.Host, { key: 'd5b0b37028451d313015326dd9e5ebba74c53427', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '6ce38d6452d3e3a068feac15468146d54988e302', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
