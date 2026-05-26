import { r as registerInstance, g as getElement, h, H as Host } from './index-BAAX2Der.js';

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
        return (h(Host, { key: '2bad846e97eaebf49d683508c2638b07316bc690', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: 'bcb2a124440859aa18cd29df10b1be1d7b8b8056', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

export { AtEditTextCell as at_edit_text_cell };
