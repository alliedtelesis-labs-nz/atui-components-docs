'use strict';

var index = require('./index-COV7xI6A.js');

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
        return (index.h(index.Host, { key: 'ba10f6b2e584f270c50f8baa8b279da3553403b8', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '13edceb3d8e73d4a109059167c1aa7d5374ef918', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
