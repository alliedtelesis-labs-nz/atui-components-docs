import { r as registerInstance, h, H as Host, g as getElement } from './index-8kq1vl9Q.js';

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
        return (h(Host, { key: '1288df72f2210935688c5ce296fbe561a9059160', class: "flex h-full items-center leading-[100%]" }, h("atui-chip-list", { key: 'f6961ae1f7281c7e0448d7284e14c6e305730dd4', chips: this.params.value, show_clear_all: false, disabled: true })));
    }
    get el() { return getElement(this); }
};

export { AtuiChipListCell as atui_chip_list_cell };
//# sourceMappingURL=atui-chip-list-cell.entry.js.map

//# sourceMappingURL=atui-chip-list-cell.entry.js.map