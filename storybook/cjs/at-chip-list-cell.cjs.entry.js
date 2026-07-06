'use strict';

var index = require('./index-BkghNVG3.js');

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
        return (index.h(index.Host, { key: '63a279579421576a40d6fffc5bed78466d14790a', class: "flex h-full items-center" }, index.h("at-chip-list", { key: '966b47b03210f096d14ca3b399e2106f5429ba52', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

exports.at_chip_list_cell = AtChipListCell;
