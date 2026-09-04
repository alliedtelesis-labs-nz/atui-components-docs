import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying and editing text.
 */
export class AtEditTextCell {
    el;
    params;
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
        return (h(Host, { key: 'e439386755c77b9f715efe2df83252ddadf50023', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: '1290d4dcd6ff8a7fa3686b8974671fed4f05decf', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
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
