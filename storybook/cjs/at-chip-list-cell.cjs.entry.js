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
        return (index.h(index.Host, { key: '1f2ef5775f1a4a2c7decef6ff2cd5988752e43bb', class: "flex h-full items-center" }, index.h("at-chip-list", { key: 'bf08026b7d6b4378bb2728991a76ede4f198c8d5', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
