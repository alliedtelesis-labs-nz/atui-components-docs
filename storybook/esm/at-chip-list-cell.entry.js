import { r as registerInstance, a as getElement, h, H as Host } from './index-PDMXpTaC.js';

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
        return (h(Host, { key: '415637f34cac0fb0b586f25d53ac81b424eb3aea', class: "flex h-full items-center" }, h("at-chip-list", { key: 'ea739011da94ccea18258cbf918a83dab2e71525', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
