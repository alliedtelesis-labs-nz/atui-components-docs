import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a toggle.
 */
export class AtuiToggleCell {
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
    toggleHandler(change) {
        clearTimeout(this.timer);
        this.params.value = change.detail;
        this.timer = setTimeout(() => { }, 2000);
    }
    updateCell(newValue) {
        clearTimeout(this.timer);
        this.params.value = newValue;
        this.timer = setTimeout(() => { }, 2000);
    }
    render() {
        return (h(Host, { key: '13b0c9f5a25e2eff0de5c8e0f6093973a0eb2799', class: "flex h-full items-center leading-[100%]" }, h("atui-toggle-switch", { key: '694f5991eba64cdc8c1fc6c2822f8e63179622a2', label: this.params.getLabel(this.params), onChange: () => this.params.onTrigger(this.params), label_position: "after", value: this.params.value })));
    }
    static get is() { return "atui-toggle-cell"; }
    static get states() {
        return {
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
    static get listeners() {
        return [{
                "name": "toggleFunction",
                "method": "toggleHandler",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=atui-toggle-cell.js.map
