import { r as registerInstance, a as getElement, h, H as Host } from './index-DNWYfDmW.js';

const AtEditTextCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    params;
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
        return (h(Host, { key: '8feaecee8133c7ae70bf7a7ee09ea4f189d8d5c1', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: 'ddf8c7461936a43b750dea12330c6f6ac0822de8', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

export { AtEditTextCell as at_edit_text_cell };
