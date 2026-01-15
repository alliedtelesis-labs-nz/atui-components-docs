import { r as registerInstance, g as getElement, h, H as Host } from './index-EP34iaAr.js';

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
        return (h(Host, { key: 'af882731bab79e6b4a09617859a2588ea6d39da2', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: 'd5c06d25c909fb50ecbebdea04055f95e6146ce9', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

export { AtEditTextCell as at_edit_text_cell };
//# sourceMappingURL=at-edit-text-cell.entry.js.map
