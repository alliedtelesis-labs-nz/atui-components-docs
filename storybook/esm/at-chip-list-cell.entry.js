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
        return (h(Host, { key: 'f67d687b1db75084db539af30cf1ebaadc84115a', class: "flex h-full items-center" }, h("at-chip-list", { key: '56b33141e897526896c1c70aece30501838bdd53', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
