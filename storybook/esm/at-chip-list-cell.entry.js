import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: '67c819c39d9744a28e4accabdfd86a243186ba40', class: "flex h-full items-center" }, h("at-chip-list", { key: '47f8d4f3dfcd53ce120bd387ebbfeb20d2cc9f87', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
