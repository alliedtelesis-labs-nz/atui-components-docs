'use strict';

var index = require('./index-CzDB71Wy.js');

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
        return (index.h(index.Host, { key: '220b01463bea7b2bcf8444856b91f2fea7d61298', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '667113d2b76509431edc840241fef358259e308b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
