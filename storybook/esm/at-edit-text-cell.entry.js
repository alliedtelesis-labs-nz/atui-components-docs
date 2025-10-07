import { r as registerInstance, a as getElement, h, H as Host } from './index-Cod2-jIY.js';

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
        return (h(Host, { key: '5440107427a2f11b0962ff34e079cd83ad9fd3c4', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: '8df60e84ed8d83e38cc189baf12e1e68a3194827', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

export { AtEditTextCell as at_edit_text_cell };
//# sourceMappingURL=at-edit-text-cell.entry.js.map
