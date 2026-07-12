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
        return (h(Host, { key: '63a279579421576a40d6fffc5bed78466d14790a', class: "flex h-full items-center" }, h("at-chip-list", { key: '966b47b03210f096d14ca3b399e2106f5429ba52', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
