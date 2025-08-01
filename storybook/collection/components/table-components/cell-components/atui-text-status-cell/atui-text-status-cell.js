import { h, Host } from "@stencil/core";
/**
 * @category Table Cell
 * @description A cell component for displaying a text with a status.
 */
export class AtuiTextStatusCellComponent {
    constructor() {
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
    static get is() { return "atui-text-status-cell"; }
    static get states() {
        return {
            "params": {},
            "text": {},
            "type": {},
            "showSimpleText": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=atui-text-status-cell.js.map
