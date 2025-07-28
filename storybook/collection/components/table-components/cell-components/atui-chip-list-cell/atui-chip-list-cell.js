import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a list of chips.
 */
export class AtuiChipListCell {
    constructor() {
        this.chips = [];
    }
    init(params) {
        this.params = params;
        this.chips = params.chips(params.data);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.init(params);
        return true;
    }
    render() {
        return (h(Host, { key: '60945cecec4fb2fdc798608c84f2a8de5d1f43e6', class: "flex h-full items-center" }, h("atui-chip-list", { key: 'df8e8f3f0a55c1a9fb1d354d03e464f9535f026b', chips: this.chips, show_clear_all: false, readonly: true })));
    }
    static get is() { return "atui-chip-list-cell"; }
    static get states() {
        return {
            "params": {},
            "chips": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-chip-list-cell.js.map
