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
        return (h(Host, { key: '895d628081ef57628b57f20d2adc65a3062af895', class: "flex h-full items-center leading-[100%]" }, h("atui-chip-list", { key: 'eb091e9d4300c4936e81b9eb3a37c7ddcf2dd905', chips: this.params.value, show_clear_all: false, disabled: true })));
    }
    get el() { return getElement(this); }
};

export { AtuiChipListCell as atui_chip_list_cell };
//# sourceMappingURL=atui-chip-list-cell.entry.js.map

//# sourceMappingURL=atui-chip-list-cell.entry.js.map