import { p as proxyCustomElement, H, h, c as Host } from './p-DJD-7SVX.js';
import { d as defineCustomElement$2 } from './p-BwCBNhgU.js';
import { d as defineCustomElement$1 } from './p-BLBTk09G.js';

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
        const badgeType = params.mapValueToBadge && params.mapValueToBadge(value);
        return badgeType || 'default';
    }
    render() {
        var _a;
        return (h(Host, { key: 'd22a04f733cdf9d5b8e79307839f3ffa98fd751a', class: "flex h-full items-center" }, this.showSimpleText && this.params && (h("span", { key: 'caf9278097823be053b463757476c727497b35eb', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (h("atui-tooltip", { position: "right", is_visible: true }, h("atui-badge", { slot: "tooltip-trigger", type: this.type, label: this.text, onClick: () => {
                    if (this.params.click)
                        this.params.click(this.params);
                } }), h("span", { slot: "tooltip-content", class: `${(_a = this.params.tooltipClass) !== null && _a !== void 0 ? _a : ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (h("atui-badge", { type: this.type, label: this.text, onClick: () => {
                    if (this.params.click)
                        this.params.click(this.params);
                } })))));
    }
    get el() { return this; }
}, [0, "atui-text-status-cell", {
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
//# sourceMappingURL=p-BLIOuyM-.js.map

//# sourceMappingURL=p-BLIOuyM-.js.map