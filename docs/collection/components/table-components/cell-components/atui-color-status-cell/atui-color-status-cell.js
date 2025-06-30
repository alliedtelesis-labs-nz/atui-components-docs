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
        return (h(Host, { key: '6b19412e636f1334171dc0430969b20199b5d9d1', class: "flex h-full items-center leading-[100%]" }, h("atui-tooltip", { key: 'c7da97d5d0e8e1d5b30b14bd970a4444e178b2f1', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: 'b3b34ba1115f9e48ab1fabb4f21511f5a8ff8e3a', slot: "tooltip-trigger", style: this.containerStyles, onClick: () => this.params.click(this.params), "data-present": this.dataPresent }), this.params.generateTooltip && (h("span", { key: '47e76d488c52c2619c9870d8af0864c5c6c911f1', slot: "tooltip-content" }, this.params.generateTooltip(this.params))))));
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
