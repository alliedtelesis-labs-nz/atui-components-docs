import { p as proxyCustomElement, H, h, c as Host } from './p-CaGsJoRH.js';
import { d as defineCustomElement$2 } from './p-CGN7bmSd.js';
import { d as defineCustomElement$1 } from './p-CSWbCoPk.js';

const AtuiTextBadgeCell = /*@__PURE__*/ proxyCustomElement(class AtuiTextBadgeCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        var _a, _b;
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = ((_a = params.value) === null || _a === void 0 ? void 0 : _a.text) || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = ((_b = params.value) === null || _b === void 0 ? void 0 : _b.badgeText) || '';
        }
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.updateCell(String(params.value));
        return true;
    }
    updateCell(newValue) {
        this.params.value = newValue;
        this.textValue = this.params.value;
    }
    render() {
        var _a;
        return (h(Host, { key: '9045a3d6a93eb93bbfdea1e5c7a2df22d15474e0', class: "flex h-full items-center" }, h("atui-tooltip", { key: '099af47a38a18b3150fbe44b65a04cdc279c9207', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: '09deda0fabffc1f9b1280ecffac65bb0664b7822', slot: "tooltip-trigger" }, h("span", { key: '7a9fe4d0600eaade3b326b705795bd015a3e6adf', class: "truncate" }, this.textValue), h("atui-badge", { key: 'd4e5fd3213de79c0afbc3512b33969a08b318527', type: "info", class: "ml-4", label: this.badgeTextValue })), ((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) && (h("span", { key: '83fd45350b29ef0c46ba2c3de5aa2cc53d7bd386', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    get el() { return this; }
}, [256, "atui-text-badge-cell", {
        "textValue": [32],
        "badgeTextValue": [32],
        "params": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-text-badge-cell", "atui-badge", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-text-badge-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTextBadgeCell);
            }
            break;
        case "atui-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "atui-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtuiTextBadgeCell as A, defineCustomElement as d };
//# sourceMappingURL=p-CCeMFciH.js.map

//# sourceMappingURL=p-CCeMFciH.js.map