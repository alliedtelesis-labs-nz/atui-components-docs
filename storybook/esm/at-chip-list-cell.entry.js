import { r as registerInstance, a as getElement, h, H as Host } from './index-DNWYfDmW.js';

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
        return (h(Host, { key: 'ba10f6b2e584f270c50f8baa8b279da3553403b8', class: "flex h-full items-center" }, h("at-chip-list", { key: '13edceb3d8e73d4a109059167c1aa7d5374ef918', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
