'use strict';

var index = require('./index-BRms7T38.js');

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
        return (index.h(index.Host, { key: '781796cdf8c79172cc5cb55894982714b02aa561', class: "flex h-full items-center" }, index.h("at-chip-list", { key: 'b35f123d77695bb81b363b1d505562eb4291d6dc', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
