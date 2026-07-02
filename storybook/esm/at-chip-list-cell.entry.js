import { r as registerInstance, a as getElement, h, H as Host } from './index-D_TsKqPT.js';

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
        return (h(Host, { key: '0f9c54ffd8793db9dc299b9e8da69914b29f03e8', class: "flex h-full items-center" }, h("at-chip-list", { key: '79a4750308ba6f88749abad38dbf47aac8ebd729', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
