import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A checkbox cell component for table row selection and boolean data display. Provides accessible selection controls within data tables.
 */
export class AtuiCheckboxCellComponent {
    init(params) {
        this.params = params;
        this.params.api.refreshHeader();
        this.params.width = 60;
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.params = params;
        return true;
    }
    setValue(checked) {
        if (checked !== undefined) {
            this.params.setValue(checked);
            this.params.api.refreshHeader();
        }
    }
    render() {
        return (h(Host, { key: '7e29a15a0bae228f7a762dcda3a7f1f198556e06', class: "flex h-full items-center" }, h("atui-checkbox", { key: 'f5eaecfaece823d87b52a4d0581275b65c53d082', class: "w-auto self-center", disabled: this.params.getDisabled
                ? this.params.getDisabled(this.params.data)
                : false, value: this.params.value, onAtuiChange: (event) => this.setValue(event.detail) })));
    }
    static get is() { return "atui-checkbox-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-checkbox-cell.js.map
