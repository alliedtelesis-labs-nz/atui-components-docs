import { r as registerInstance, h, H as Host, g as getElement } from './index-Cd7WF2gX.js';

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
        return (h(Host, { key: '2b5b7a7c7cfd5d3a9f3dd1fae1fc93b92538425a', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: 'acb00b14c33449b0abd46e554b09c36340ce8c81', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return getElement(this); }
};

export { AtuiEditTextCell as atui_edit_text_cell };
//# sourceMappingURL=atui-edit-text-cell.entry.js.map

//# sourceMappingURL=atui-edit-text-cell.entry.js.map