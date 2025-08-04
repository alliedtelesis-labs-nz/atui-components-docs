import { r as registerInstance, h, H as Host, g as getElement } from './index-D3rwhcmG.js';

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
        return (h(Host, { key: '0f856845b0103ec2440aab2e9afcba0c73f8f0b7', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: 'f859491dd6e8297a4330c5fd5ed07547fd23915a', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return getElement(this); }
};

export { AtuiEditTextCell as atui_edit_text_cell };
//# sourceMappingURL=atui-edit-text-cell.entry.js.map

//# sourceMappingURL=atui-edit-text-cell.entry.js.map