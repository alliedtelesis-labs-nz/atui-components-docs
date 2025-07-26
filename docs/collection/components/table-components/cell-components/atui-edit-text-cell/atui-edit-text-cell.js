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
        return (h(Host, { key: '3aa95b743af187ad43021b2ad5411e6837ff6ebf', class: "flex h-full items-center leading-[100%]" }, h("atui-input", { key: '051e9a3d6d6eb351ca4e84be3c076940d818c000', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
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
