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
        return (h(Host, { key: '04bc7340760dd99a243cd5648aff43b6cbb01850' }, h("div", { key: 'a702ca4101dfc1e209c6d62c4ae1ed847cdc9bbb', class: "flex h-full flex-col justify-center" }, h("div", { key: '724227fd63185a5a3f5c6258ccb5e7c5b9076c34', class: "truncate text-sm leading-normal" }, (_a = this.value) === null || _a === void 0 ? void 0 : _a.title), h("div", { key: 'd473594779cf546833bd540196bd5e393eebf9b3', class: "truncate text-xs font-normal leading-normal text-med" }, (_b = this.value) === null || _b === void 0 ? void 0 : _b.subtitle))));
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
