import { p as proxyCustomElement, H, h, c as Host } from './p-Cv5ME95Z.js';
import { d as defineCustomElement$2 } from './p-1w9harR4.js';
import { d as defineCustomElement$1 } from './p-BtsG-JMI.js';

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
        return (h(Host, { key: 'bf30c243bcb584002af7174a2f034dbadd591aa1', class: "flex h-full items-center" }, h("atui-tooltip", { key: '7ab7a9c61dec391f557549db3be111365fd14227', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: '3fde108d3447f74013b447d69ca84037b0b28e3c', slot: "tooltip-trigger" }, h("span", { key: '764cad6f5d39428ef836a93664c223e1049771ba', class: "truncate" }, this.textValue), h("atui-badge", { key: '15d098a11c0c4620140626112ac5f38929cae2c0', type: "info", class: "ml-4", label: this.badgeTextValue })), ((_a = this.params) === null || _a === void 0 ? void 0 : _a.generateTooltip) && (h("span", { key: '86a19e5b2fb649ecc04e47e4c7de322c54059d69', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
//# sourceMappingURL=p-BxfyTPEy.js.map

//# sourceMappingURL=p-BxfyTPEy.js.map