import { r as registerInstance, a as getElement, h, H as Host } from './index-m_dTEvgo.js';

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
        return (h(Host, { key: '2de7ef2e72b7d70d2aaf3ad1e765f1be1c51f32b', class: "flex h-full items-center" }, h("at-checkbox", { key: '396d78ab144b34d20ce360d311c9a92849df8f81', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
};

export { AtCheckboxCellComponent as at_checkbox_cell };
