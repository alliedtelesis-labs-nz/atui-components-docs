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
        return (h(Host, { key: '39db194d4a9c1c539c37c83a0b545a41f373324c', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: 'c29abcd7aa1d642cdf0043b135a2f05575d5468e', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
};

export { AtEditTextCell as at_edit_text_cell };
//# sourceMappingURL=at-edit-text-cell.entry.js.map
