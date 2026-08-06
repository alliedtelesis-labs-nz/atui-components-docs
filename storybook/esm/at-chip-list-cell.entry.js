import { r as registerInstance, a as getElement, h, H as Host } from './index-HD-uhvb8.js';

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
        return (h(Host, { key: '8ee8c9eb77227910efa53e2866a8ceb7e07bced1', class: "flex h-full items-center" }, h("at-chip-list", { key: 'aa6d0cbd59ed4639e4d29fcf1532df7846e19c6b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
