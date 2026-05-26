import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A checkbox cell component for table row selection and boolean data display. Provides accessible selection controls within data tables.
 */
export class AtCheckboxCellComponent {
    el;
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
        return (h(Host, { key: 'e344de7c3887188b72804e2ff7f134907da372ca', class: "flex h-full items-center" }, h("at-checkbox", { key: '08d1009384428d7a901b30d8cc8364ce01265c8d', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    static get is() { return "at-checkbox-cell"; }
    static get elementRef() { return "el"; }
}
