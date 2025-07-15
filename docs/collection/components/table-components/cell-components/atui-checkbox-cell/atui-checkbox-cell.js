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
        return (h(Host, { key: '6969f0fdc6fb0fd04bdc698a8cd427cc2f03e19b', class: "flex h-full items-center" }, h("atui-checkbox", { key: '7340da4565fefff2ef986f55df51246178e18f21', class: "w-auto self-center", disabled: this.params.getDisabled
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
