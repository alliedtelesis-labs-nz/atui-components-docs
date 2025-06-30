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
        return (h(Host, { key: '587293c76f35a566c49fba1ed1354a0dd8baeacb', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: '38d738b722fd24bed32592d5d8bc83ef2c358988', readonly: !this.params.writePermission, clearable: true, value: this.params.value, onInput: (event) => this.updateCell(event.target.value), onMouseDown: (event) => event.stopPropagation() })));
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
