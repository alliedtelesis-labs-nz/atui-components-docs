import { p as proxyCustomElement, H, h, c as Host } from './p-Bx9nFool.js';
import { d as defineCustomElement$1 } from './p-BQo85g_v.js';

const AtTitleSubtitleCell = /*@__PURE__*/ proxyCustomElement(class AtTitleSubtitleCell extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.title = '';
        this.subtitle = '';
    }
    init(params) {
        this.setParams(params);
    }
    refresh(params) {
        this.setParams(params);
        return true;
    }
    getGui() {
        return this.el;
    }
    setParams(params) {
        var _a, _b, _c, _d;
        this.params = params;
        if (params.title) {
            this.title = params.title(params.data);
        }
        else {
            this.title = ((_b = (_a = params.data) === null || _a === void 0 ? void 0 : _a.titleSubtitleCell) === null || _b === void 0 ? void 0 : _b.title) || '';
        }
        if (params.subtitle) {
            this.subtitle = params.subtitle(params.data);
        }
        else {
            this.subtitle = ((_d = (_c = params.data) === null || _c === void 0 ? void 0 : _c.titleSubtitleCell) === null || _d === void 0 ? void 0 : _d.subtitle) || '';
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: '6fab1f86b5e5787f1555fa71cabff25330885eaf', class: "flex h-full items-center" }, h("at-tooltip", { key: '412a2aea43d27c85941ffba0a7ab0080e600fa4b', position: "right", disabled: !((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) }, h("div", { key: '18ef6a2e4c756dc53b919e1a930c6738f26fcfb1', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'a4d37c3366019e27358c5bf175ffa3092c73590d', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'f939e9ea726f333b4e8e5645a3f1d1f27eba6444', class: "text-med truncate text-xs leading-normal font-normal" }, this.subtitle)), ((_b = this.params) === null || _b === void 0 ? void 0 : _b.generateTooltip) && (h("span", { key: 'b0ec439f4f0d3a4c5fa4d6cf88c5da9c9779e49d', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [256, "at-title-subtitle-cell", {
        "params": [32],
        "title": [32],
        "subtitle": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-title-subtitle-cell", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-title-subtitle-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTitleSubtitleCell);
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTitleSubtitleCell as A, defineCustomElement as d };
//# sourceMappingURL=p-BE_PcwJX.js.map

//# sourceMappingURL=p-BE_PcwJX.js.map