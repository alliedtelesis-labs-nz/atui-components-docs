'use strict';

var index = require('./index-DK-3iCCu.js');

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
        return (index.h(index.Host, { key: '8ee8c9eb77227910efa53e2866a8ceb7e07bced1', class: "flex h-full items-center" }, index.h("at-chip-list", { key: 'aa6d0cbd59ed4639e4d29fcf1532df7846e19c6b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
