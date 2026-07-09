import { r as registerInstance, a as getElement, h, H as Host } from './index-8e2OpwTu.js';

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
        return (h(Host, { key: '7403d4c65039f9d380cbb2f02830518c509d7096', class: "flex h-full items-center" }, h("at-chip-list", { key: '64f00c08cb5229c70b7922d9e16e3bb80561db36', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
