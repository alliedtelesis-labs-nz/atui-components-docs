import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a list of chips.
 */
export class AtChipListCell {
    el;
    params;
    chips = [];
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
        return (h(Host, { key: 'c4ab5bcf740ff1b12df203e782d48308de004c62', class: "flex h-full items-center" }, h("at-chip-list", { key: 'f14f8392120ab9b612f14e1a2fc8cbc3e1d0e7de', chips: this.chips, show_clear_all: false, readonly: true })));
    }
    static get is() { return "at-chip-list-cell"; }
    static get states() {
        return {
            "params": {},
            "chips": {}
        };
    }
    static get elementRef() { return "el"; }
}
