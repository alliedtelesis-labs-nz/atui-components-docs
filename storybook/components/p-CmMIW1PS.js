import { p as proxyCustomElement, H, h, c as Host } from './p-DCAHuMKA.js';
import { d as defineCustomElement$2 } from './p-BzsPb4KK.js';
import { d as defineCustomElement$1 } from './p-BaggHTGc.js';

const AtTextStatusCellComponent = /*@__PURE__*/ proxyCustomElement(class AtTextStatusCellComponent extends H {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
    }
    get el() { return this; }
    params;
    text;
    type = 'default';
    showSimpleText = false;
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
        return (h(Host, { key: 'c803d176badce0972ede8920cc059e5c9f02baf7', class: "flex h-full items-center" }, this.showSimpleText && this.params && (h("span", { key: '0db68d72f7e416b697a5704e580665d3ea4eac51', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (h("at-tooltip", { position: "right" }, h("at-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), h("span", { class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (h("at-badge", { type: this.type, label: this.text })))));
    }
}, [256, "at-text-status-cell", {
        "params": [32],
        "text": [32],
        "type": [32],
        "showSimpleText": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["at-text-status-cell", "at-badge", "at-tooltip"];
    components.forEach(tagName => { switch (tagName) {
        case "at-text-status-cell":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, AtTextStatusCellComponent);
            }
            break;
        case "at-badge":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "at-tooltip":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { AtTextStatusCellComponent as A, defineCustomElement as d };
//# sourceMappingURL=p-CmMIW1PS.js.map

//# sourceMappingURL=p-CmMIW1PS.js.map