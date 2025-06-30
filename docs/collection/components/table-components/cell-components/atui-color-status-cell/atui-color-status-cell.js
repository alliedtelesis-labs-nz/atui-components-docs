import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a color status.
 */
export class AtuiColorStatusCell {
    init(params) {
        const { color, dataPresent, containerStyles } = params;
        this.dataPresent = dataPresent;
        this.params = params;
        this.containerStyles = Object.assign({ 'background-color': color, 'height': '100%', 'width': '100%', 'cursor': 'pointer' }, containerStyles);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(params.color);
        return true;
    }
    updateCell(newValue) {
        this.params.color = newValue;
    }
    render() {
        return (h(Host, { key: '5e39c8cfe5a91bc24f74986787d774488bf82086', class: "flex h-full items-center leading-[100%]" }, h("atui-tooltip", { key: '6c0a83e5f7026b1eecde5936d9baa754b97601ee', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: '140379a435a4ff397b0afad5e1c994c012af5dac', slot: "tooltip-trigger", style: this.containerStyles, onClick: () => this.params.click(this.params), "data-present": this.dataPresent }), this.params.generateTooltip && (h("span", { key: '0d6cafe3777e0f4b134738806f2d3dc5027420e5', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "atui-color-status-cell"; }
    static get states() {
        return {
            "params": {},
            "containerStyles": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-color-status-cell.js.map
