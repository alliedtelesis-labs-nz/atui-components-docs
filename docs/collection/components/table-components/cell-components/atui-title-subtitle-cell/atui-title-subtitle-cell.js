import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a title and subtitle.
 */
export class AtuiTitleSubtitleCell {
    init(params) {
        const { value } = params;
        this.params = params;
        this.value = value;
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
        this.value = newValue;
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'f2a5555b3d5ce6cd6c69c77df6b81f20fad32400' }, h("div", { key: 'cb376395a33c413e9b9d4f58ea9140087e9dade0', class: "flex h-full flex-col justify-center" }, h("div", { key: '0db1be2609cd306a6288e4910f6cf3800b662135', class: "truncate text-sm leading-normal" }, (_a = this.value) === null || _a === void 0 ? void 0 : _a.title), h("div", { key: 'cd1859876101dc9342d28eb146aeb45f5af3f8af', class: "truncate text-xs font-normal leading-normal text-med" }, (_b = this.value) === null || _b === void 0 ? void 0 : _b.subtitle))));
    }
    static get is() { return "atui-title-subtitle-cell"; }
    static get states() {
        return {
            "value": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-title-subtitle-cell.js.map
