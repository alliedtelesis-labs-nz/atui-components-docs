import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying and editing text.
 */
export class AtuiEditTextCell {
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
        return (h(Host, { key: '2b5b7a7c7cfd5d3a9f3dd1fae1fc93b92538425a', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: 'acb00b14c33449b0abd46e554b09c36340ce8c81', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    static get is() { return "atui-edit-text-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-edit-text-cell.js.map
