import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a list of chips.
 */
export class AtuiChipListCell {
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
    }
    render() {
        return (h(Host, { key: '8d96c01476e82e82e778eda696c6ed8a6b0183cf', class: "flex h-full items-center leading-[100%]" }, h("atui-chip-list", { key: 'e90360c1621de2ba4e4ee603b54aad81c662c7a0', chips: this.params.value, show_clear_all: false, disabled: true })));
    }
    static get is() { return "atui-chip-list-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-chip-list-cell.js.map
