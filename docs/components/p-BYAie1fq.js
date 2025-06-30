import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$2 } from './p-DIGwH9iS.js';
import { d as defineCustomElement$1 } from './p-BIS2bAMQ.js';

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
        return (h(Host, { key: '8dab9b7ff525a142056878dadafa56f0442ecfd4', class: "align-center flex h-full" }, h("atui-tooltip", { key: 'ad0dfc03b6b74423cb07d56334f9a37b4b79b387', position: "right", is_visible: !!this.params.generateTooltip }, h("span", { key: '5a046c4c9c5843f77808198aa2143f35666cd9ef', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, this.textValue), this.params.generateTooltip && (h("span", { key: '642bc7f572d1eaefe96e9338d7009cac90ceb588', slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))), h("atui-tooltip", { key: '5efc8ced0791d3a3024599358cd5d72fa5e098b0', position: "right", is_visible: !!this.params.generateBadgeTooltip }, h("span", { key: 'ad65bfb05395340a5657ee4e7dcb45864f06b292', slot: "tooltip-trigger", "data-index": `column-${this.params.rowIndex}-data`, class: "truncate", onClick: () => {
                if (this.params.click)
                    this.params.click(this.params);
            } }, h("atui-badge", { key: '9c794cb7b2d78927203831ec7d0388c0b03f9e2e', type: (_b = this.params) === null || _b === void 0 ? void 0 : _b.badgeType, class: "ml-4", label: this.badgeTextValue })), this.params.generateBadgeTooltip && (h("span", { key: 'b391f1748f1c62bdd01c626b75b98f140d4559c5', slot: "tooltip-content", class: `${(_c = this.params.badgeTooltipClass) !== null && _c !== void 0 ? _c : ''} leading-normal` }, this.params.generateBadgeTooltip(this.params))))));
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
//# sourceMappingURL=p-BYAie1fq.js.map

//# sourceMappingURL=p-BYAie1fq.js.map