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
        return (h(Host, { key: '7f21db3509569c4aa27a618cd95ecf052d745d93', class: "flex h-full items-center leading-[100%]" }, h("at-input", { key: '74241ce85a676fcc384478fbc288da53d070f1d9', readonly: !this.params.writePermission, value: this.params.value, onAtuiChange: (event) => {
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
