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
        return (h(Host, { key: '895d628081ef57628b57f20d2adc65a3062af895', class: "flex h-full items-center leading-[100%]" }, h("atui-chip-list", { key: 'eb091e9d4300c4936e81b9eb3a37c7ddcf2dd905', chips: this.params.value, show_clear_all: false, disabled: true })));
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
