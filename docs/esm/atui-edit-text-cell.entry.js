import { r as registerInstance, h, H as Host, g as getElement } from './index-HJO1YDmC.js';

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
        return (h(Host, { key: '587293c76f35a566c49fba1ed1354a0dd8baeacb', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: '38d738b722fd24bed32592d5d8bc83ef2c358988', readonly: !this.params.writePermission, clearable: true, value: this.params.value, onInput: (event) => this.updateCell(event.target.value), onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return getElement(this); }
};

export { AtuiEditTextCell as atui_edit_text_cell };
//# sourceMappingURL=atui-edit-text-cell.entry.js.map

//# sourceMappingURL=atui-edit-text-cell.entry.js.map