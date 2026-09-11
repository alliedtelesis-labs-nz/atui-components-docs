import { r as registerInstance, a as getElement, h, H as Host } from './index-BQ4XN8sR.js';

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
        return (h(Host, { key: '3e8fb6ac92e82e76370dd687d971555812d3d752', class: "flex h-full items-center" }, h("at-checkbox", { key: '2482e0af6c287f72fa736f858ab06140e163f3a7', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
};

export { AtCheckboxCellComponent as at_checkbox_cell };
