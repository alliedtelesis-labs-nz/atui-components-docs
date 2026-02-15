import { r as registerInstance, g as getElement, h, H as Host } from './index-jvbUuQtg.js';

const AtChipListCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: '220b01463bea7b2bcf8444856b91f2fea7d61298', class: "flex h-full items-center" }, h("at-chip-list", { key: '667113d2b76509431edc840241fef358259e308b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
