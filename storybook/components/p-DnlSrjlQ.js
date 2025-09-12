import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

const AtuiTitleSubtitleCell = /*@__PURE__*/ proxyCustomElement(class AtuiTitleSubtitleCell extends H {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '6c74dca28073aae0f5391a65a71f8614fc8a38ef', class: "flex h-full items-center" }, h("atui-tooltip", { key: '6af9b75ddc06cd80430d081e1c673d6c89e305a7', position: "right", disabled: !((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) }, h("div", { key: '5c5ac8dc30a719b5376598941850d77654e65ad0', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '3feeaed039248cb6075c420a84fc9a322b9655ac', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'eabaa6e21b5c083a9172becb63f6262ae5eabf59', class: "text-med truncate text-xs leading-normal font-normal" }, this.subtitle)), ((_b = this.params) === null || _b === void 0 ? void 0 : _b.generateTooltip) && (h("span", { key: 'ebd6074980cea2ac88154fca22632251ba7504a4', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [256, "atui-title-subtitle-cell", {
        "params": [32],
        "title": [32],
        "subtitle": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-title-subtitle-cell", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-title-subtitle-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTitleSubtitleCell);
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiTitleSubtitleCell as A, defineCustomElement as d };
//# sourceMappingURL=p-DnlSrjlQ.js.map

//# sourceMappingURL=p-DnlSrjlQ.js.map