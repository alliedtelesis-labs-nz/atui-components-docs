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
        return (h(Host, { key: 'd5b0b37028451d313015326dd9e5ebba74c53427', class: "flex h-full items-center" }, h("at-chip-list", { key: '6ce38d6452d3e3a068feac15468146d54988e302', chips: this.chips, show_clear_all: false, readonly: true })));
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
