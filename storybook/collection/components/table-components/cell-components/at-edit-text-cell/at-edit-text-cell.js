import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying and editing text.
 */
export class AtEditTextCell {
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
        return (h(Host, { key: '401dc3423ea37f26619d1143c7eff942d5f98e83', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: '2ecc3a6e2794ffb13bb61684077ad8fed0557218', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
                // Changed to onAtuiChange
                this.updateCell(event.detail);
            }, onMouseDown: (event) => event.stopPropagation() })));
    }
    static get is() { return "at-edit-text-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-edit-text-cell.js.map
