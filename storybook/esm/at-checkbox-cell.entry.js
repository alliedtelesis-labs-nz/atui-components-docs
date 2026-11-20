import { r as registerInstance, a as getElement, h, H as Host } from './index-DdGm_rA6.js';

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
        return (h(Host, { key: '30c993f6dc1ac65975ccad14ffe265d04d6eff9a', class: "flex h-full items-center" }, h("at-checkbox", { key: '9ce31d6dc2c8a45c72d67ff04be72aa377e9bac9', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
};

export { AtCheckboxCellComponent as at_checkbox_cell };
