import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';

const AtuiTitleSubtitleCell = /*@__PURE__*/ proxyCustomElement(class AtuiTitleSubtitleCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
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
    get el() { return this; }
}, [0, "atui-title-subtitle-cell", {
        "value": [32],
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-title-subtitle-cell"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-title-subtitle-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTitleSubtitleCell);
            }
            break;
    } });
}

export { AtuiTitleSubtitleCell as A, defineCustomElement as d };
//# sourceMappingURL=p-CdIh55Sx.js.map

//# sourceMappingURL=p-CdIh55Sx.js.map