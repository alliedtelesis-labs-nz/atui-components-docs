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
        return (h(Host, { key: '3acf728f92dffd1e8706de69025d35f5c1babb5f', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: 'a5c9696cac888937e95307fbd55313cc1c7f830f', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

export { AtEditTextCell as at_edit_text_cell };
//# sourceMappingURL=at-edit-text-cell.entry.js.map
