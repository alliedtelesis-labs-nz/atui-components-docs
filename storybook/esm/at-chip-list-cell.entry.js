import { r as registerInstance, h, H as Host, a as getElement } from './index-C3PSGxNR.js';

const AtChipListCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chips = [];
    }
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
        return (h(Host, { key: '066bd84aedbd02d58c687149bb74719943a442ff', class: "flex h-full items-center" }, h("at-chip-list", { key: '88a14e9b7b3fecc707b90fbd9c49532e611e33c5', chips: this.chips, show_clear_all: false, readonly: true })));
    }
    get el() { return getElement(this); }
};

export { AtChipListCell as at_chip_list_cell };
//# sourceMappingURL=at-chip-list-cell.entry.js.map
