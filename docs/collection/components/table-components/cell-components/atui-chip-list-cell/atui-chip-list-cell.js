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
        return (h(Host, { key: '1288df72f2210935688c5ce296fbe561a9059160', class: "flex h-full items-center leading-[100%]" }, h("atui-chip-list", { key: 'f6961ae1f7281c7e0448d7284e14c6e305730dd4', chips: this.params.value, show_clear_all: false, disabled: true })));
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
