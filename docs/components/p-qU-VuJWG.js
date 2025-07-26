import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$2 } from './p-BVyEJE0-.js';
import { d as defineCustomElement$1 } from './p-CYjfaOKk.js';

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
        return (h(Host, { key: '9045a3d6a93eb93bbfdea1e5c7a2df22d15474e0', class: "flex h-full items-center" }, h("atui-tooltip", { key: '8954627407f0328bca6d9d93f5988c9a4e277f48', position: "right", is_visible: !!this.params.generateTooltip }, h("div", { key: '04963df6fbeb656434fd20c08b7fc852e76bc99f', slot: "tooltip-trigger" }, h("span", { key: '6fd70a802ff56fc062a1adc363e48be6c824add2', class: "truncate" }, this.textValue), h("atui-badge", { key: 'df650e682caa9d5f9ef7ca23bddfc7a92f59d7e1', type: "info", class: "ml-4", label: this.badgeTextValue })), ((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) && (h("span", { key: 'c41f0ae1c3dc8de2c891319fda1920a94f50a2c8', slot: "tooltip-content", class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-qU-VuJWG.js.map

//# sourceMappingURL=p-qU-VuJWG.js.map