import { r as registerInstance, g as getElement, h, H as Host } from './index-Dm8LkzEZ.js';

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
        return (h(Host, { key: 'ea58125fb524813afe2d7da71cffc845a3852cf5', class: "flex h-full items-center" }, h("at-chip-list", { key: 'e2a71953dc5a5b000985378e56f426161e28332c', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
