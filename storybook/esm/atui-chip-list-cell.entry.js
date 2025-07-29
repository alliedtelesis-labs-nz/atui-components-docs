import { r as registerInstance, h, H as Host, g as getElement } from './index-Cd7WF2gX.js';

const AtuiChipListCell = class {
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
        return (h(Host, { key: '60945cecec4fb2fdc798608c84f2a8de5d1f43e6', class: "flex h-full items-center" }, h("atui-chip-list", { key: 'df8e8f3f0a55c1a9fb1d354d03e464f9535f026b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
    get el() { return getElement(this); }
};

export { AtuiChipListCell as atui_chip_list_cell };
//# sourceMappingURL=atui-chip-list-cell.entry.js.map

//# sourceMappingURL=atui-chip-list-cell.entry.js.map