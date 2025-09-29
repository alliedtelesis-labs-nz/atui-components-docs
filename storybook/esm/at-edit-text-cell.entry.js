import { r as registerInstance, h, H as Host, g as getElement } from './index-BlNBm0E8.js';

const AtEditTextCell = class {
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
        return (h(Host, { key: 'd31adbbd13ef19fd58aabaac4bd6b24babd1d108', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: '526a6aa2b5c715e0d57cb151145d1bc49810bc57', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    get el() { return getElement(this); }
};

export { AtEditTextCell as at_edit_text_cell };
//# sourceMappingURL=at-edit-text-cell.entry.js.map
