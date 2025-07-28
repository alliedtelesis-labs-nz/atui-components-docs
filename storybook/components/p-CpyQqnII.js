import { p as proxyCustomElement, H, h, c as Host } from './p-kcU6cSzl.js';
import { d as defineCustomElement$2 } from './p-BVyEJE0-.js';
import { d as defineCustomElement$1 } from './p-B9oksuag.js';

const AtuiTextStatusCellComponent = /*@__PURE__*/ proxyCustomElement(class AtuiTextStatusCellComponent extends H {
    constructor() {
        super();
        this.__registerHost();
        this.type = 'default';
        this.showSimpleText = false;
    }
    init(params) {
        const { value } = params;
        if (!value)
            return;
        this.setCellData(params, value);
    }
    getGui() {
        return this.el;
    }
    refresh(_) {
        return true;
    }
    setCellData(params, value) {
        this.params = params;
        const badgeType = this.mapValueToBadgeType(params, value);
        this.text = params.mapValueToText
            ? params.mapValueToText(value)
            : value;
        if (params.checkShouldShowSimpleText)
            this.showSimpleText = params.checkShouldShowSimpleText(value);
        this.type = badgeType;
    }
    mapValueToBadgeType(params, value) {
        const badgeType = params.mapValueToStatus && params.mapValueToStatus(value);
        return badgeType || 'default';
    }
    render() {
        var _a;
        return (h(Host, { key: 'b18a599d63dbd7a86335c30af7698f8c8a683085', class: "flex h-full items-center" }, this.showSimpleText && this.params && (h("span", { key: '94d4d9fd16fb67b06a4247dad6ea4f1d0bd0a2ff', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (h("atui-tooltip", { position: "right", is_visible: true }, h("atui-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), h("span", { slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (h("atui-badge", { type: this.type, label: this.text })))));
    }
    get el() { return this; }
}, [256, "atui-text-status-cell", {
        "params": [32],
        "text": [32],
        "type": [32],
        "showSimpleText": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["atui-text-status-cell", "atui-badge", "atui-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "atui-text-status-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtuiTextStatusCellComponent);
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

export { AtuiTextStatusCellComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CpyQqnII.js.map

//# sourceMappingURL=p-CpyQqnII.js.map