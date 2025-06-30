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
        return (h(Host, { key: 'c479412ce05622b3848089dadb82b58a05015332' }, h("div", { key: 'cc1fb4b767632a6a22854ab9b182592073b6c821', class: "flex h-full flex-col justify-center" }, h("div", { key: '485b9f2b0cc418c3f7ec419cc4f1dfc051f16edd', class: "truncate text-sm leading-normal" }, (_a = this.value) === null || _a === void 0 ? void 0 : _a.title), h("div", { key: '7ecae6d04378b376d29d53b9f8d16d8d6db514a9', class: "truncate text-xs font-normal leading-normal text-med" }, (_b = this.value) === null || _b === void 0 ? void 0 : _b.subtitle))));
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
//# sourceMappingURL=p-B8CZQmb1.js.map

//# sourceMappingURL=p-B8CZQmb1.js.map