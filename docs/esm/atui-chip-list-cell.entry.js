import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';

const AtuiChipListCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    init(params) {
        this.params = params;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.value);
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
    }
    render() {
        return (h(Host, { key: '8d96c01476e82e82e778eda696c6ed8a6b0183cf', class: "flex h-full items-center leading-[100%]" }, h("atui-chip-list", { key: 'e90360c1621de2ba4e4ee603b54aad81c662c7a0', chips: this.params.value, show_clear_all: false, disabled: true })));
    }
    get el() { return getElement(this); }
};

export { AtuiChipListCell as atui_chip_list_cell };
//# sourceMappingURL=atui-chip-list-cell.entry.js.map

//# sourceMappingURL=atui-chip-list-cell.entry.js.map