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
        return (h(Host, { key: '53635764898fec3ca250f2dbbd883aba5b9c0598', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: 'a64638d26b908fa7a2100d56494f7ac2bb2752da', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
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
