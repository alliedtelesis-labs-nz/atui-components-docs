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
        return (h(Host, { key: '9bbfbfa36d5fb30a395d7384cf85c82d77916a83', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: '9d63231351a6f517a905d5887b6ae93db6b4b3e4', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return getElement(this); }
};

export { AtuiEditTextCell as atui_edit_text_cell };
//# sourceMappingURL=atui-edit-text-cell.entry.js.map

//# sourceMappingURL=atui-edit-text-cell.entry.js.map