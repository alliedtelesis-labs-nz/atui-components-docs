import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';

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
        return (h(Host, { key: 'f2a5555b3d5ce6cd6c69c77df6b81f20fad32400' }, h("div", { key: 'cb376395a33c413e9b9d4f58ea9140087e9dade0', class: "flex h-full flex-col justify-center" }, h("div", { key: '0db1be2609cd306a6288e4910f6cf3800b662135', class: "truncate text-sm leading-normal" }, (_a = this.value) === null || _a === void 0 ? void 0 : _a.title), h("div", { key: 'cd1859876101dc9342d28eb146aeb45f5af3f8af', class: "truncate text-xs font-normal leading-normal text-med" }, (_b = this.value) === null || _b === void 0 ? void 0 : _b.subtitle))));
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
//# sourceMappingURL=p-eCnCKKVD.js.map

//# sourceMappingURL=p-eCnCKKVD.js.map