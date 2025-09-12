import { r as registerInstance, h, H as Host, g as getElement } from './index-C8uvvL0O.js';

const AtuiEditTextCell = class {
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
        if (this.params.onValueChange) {
            this.params.onValueChange(this.params);
        }
    }
    render() {
        return (h(Host, { key: '6c15bd79915a4e8d1f7e886b1f4baa55fb0748c7', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: 'a02d2c712839e1539d4bfeb7cea05741d0edef4f', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return getElement(this); }
};

export { AtuiEditTextCell as atui_edit_text_cell };
//# sourceMappingURL=atui-edit-text-cell.entry.js.map

//# sourceMappingURL=atui-edit-text-cell.entry.js.map