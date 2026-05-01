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
        return (h(Host, { key: '1f2ef5775f1a4a2c7decef6ff2cd5988752e43bb', class: "flex h-full items-center" }, h("at-chip-list", { key: 'bf08026b7d6b4378bb2728991a76ede4f198c8d5', chips: this.chips, show_clear_all: false, readonly: true })));
    }
};

export { AtChipListCell as at_chip_list_cell };
