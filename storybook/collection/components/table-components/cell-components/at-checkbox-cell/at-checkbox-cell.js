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
        return (h(Host, { key: '511aac95c94c7de0f8d28f0ade887136da5ae8ef', class: "flex h-full items-center" }, h("at-checkbox", { key: 'd241c9354a951772f0c56846ba9a64c37e407038', class: "w-auto self-center", disabled: isDisabled, checked: isChecked, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    static get is() { return "at-checkbox-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
