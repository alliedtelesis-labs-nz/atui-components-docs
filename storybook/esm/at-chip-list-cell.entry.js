import { r as registerInstance, g as getElement, h, H as Host } from './index-7z-rGOwX.js';

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
        return (h(Host, { key: '1a9819e12605b66c8415d9b8c01cb2f8fe02abe6', class: "flex h-full items-center" }, h("at-chip-list", { key: '43242eb869f25b32f00f31f09750e1832a913eeb', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
