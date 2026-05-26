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
        return (h(Host, { key: '0c70317f8d831d1f86951aa0c159dc988dcda58a', class: "flex h-full items-center" }, h("at-chip-list", { key: 'b4a3440a4550fc0e113207bdcd9309bed6fef77b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
