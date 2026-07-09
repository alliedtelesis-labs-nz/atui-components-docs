'use strict';

var index = require('./index-DRsFs1GW.js');

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
        return (index.h(index.Host, { key: '7403d4c65039f9d380cbb2f02830518c509d7096', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '64f00c08cb5229c70b7922d9e16e3bb80561db36', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
