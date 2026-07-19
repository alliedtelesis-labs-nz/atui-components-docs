import { r as registerInstance, a as getElement, h, H as Host } from './index-jCYcKtgi.js';

const AtCheckboxCellComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    params;
    init(params) {
        this.params = params;
        this.params.api.refreshHeader();
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        return true;
    }
    setValue(checked) {
        if (checked !== undefined && this.params?.setValue) {
            this.params.setValue(checked);
            this.params.api.refreshHeader();
        }
    }
    render() {
        const isChecked = this.params.checked
            ? this.params.checked(this.params.data)
            : false;
        const isDisabled = this.params.getDisabled
            ? this.params.getDisabled(this.params.data)
            : false;
        return (h(Host, { key: '511aac95c94c7de0f8d28f0ade887136da5ae8ef', class: "flex h-full items-center" }, h("at-checkbox", { key: 'd241c9354a951772f0c56846ba9a64c37e407038', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
};

export { AtCheckboxCellComponent as at_checkbox_cell };
