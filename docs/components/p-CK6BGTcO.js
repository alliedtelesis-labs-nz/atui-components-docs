import { p as proxyCustomElement, H, h, c as Host } from './p-DDLUhBkV.js';
import { d as defineCustomElement$2 } from './p-DuzY8Lpl.js';
import { d as defineCustomElement$1 } from './p-IMVeGR0G.js';

const AtuiTextBadgeCell = /*@__PURE__*/ proxyCustomElement(class AtuiTextBadgeCell extends H {
    constructor() {
        super();
        this.__registerHost();
    }
    init(params) {
        const { textTransform, badgeText } = params;
        this.params = params;
        this.textValue = params.value;
        this.badgeTextValue = badgeText(params);
        if (params.data) {
            if (textTransform) {
                this.textValue = textTransform(params.data, params.value);
            }
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
        var _a, _b, _c;
        return (h(Host, { key: '06688d2f88e803fa9fe40bfdd5b75bb4e7fd579d', class: "align-center flex h-full" }, h("atui-tooltip", { key: '1f7de985662542647932b2851853996df96a9e60', position: "right", is_visible: !!this.params.generateTooltip }, h("span", { key: '1ba32fea4960734f3b2a64bdb01dfb08091949ac', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: 'b9479897b34d7f06b30f35a96c508a3b686453b4', slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))), h("atui-tooltip", { key: '001cee21af866cec8c56850071ef3d47e0ace18e', position: "right", is_visible: !!this.params.generateBadgeTooltip }, h("span", { key: '67f215e4cff8920f96d4cfd5b0ab22e39619fb71', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, h("atui-badge", { key: '4ba17f21f09f4d3fcf02f6f23f16e7dd731fc9f0', type: (_b = this.params) === null || _b === void 0 ? void 0 : _b.badgeType, class: "ml-4", label: this.badgeTextValue })), this.params.generateBadgeTooltip && (h("span", { key: '8805dec1b04b3b16b409bf3229649734423140f6', slot: "tooltip-content", class: `${(_c = this.params.badgeTooltipClass) !== null && _c !== void 0 ? _c : ''} leading-normal` }, this.params.generateBadgeTooltip(this.params))))));
    }
    get el() { return this; }
}, [0, "atui-text-badge-cell", {
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
//# sourceMappingURL=p-CK6BGTcO.js.map

//# sourceMappingURL=p-CK6BGTcO.js.map