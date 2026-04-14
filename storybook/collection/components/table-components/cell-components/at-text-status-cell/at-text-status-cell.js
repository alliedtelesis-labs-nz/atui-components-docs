import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a text with a status.
 */
export class AtTextStatusCellComponent {
    el;
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
        return (h(Host, { key: 'd0968b23a67c5330f514ba7ff1ad19f6f0eef2f4', class: "flex h-full items-center" }, this.showSimpleText && this.params && (h("span", { key: 'f75f2306cbf62fa2ff45081fd489e515de70218f', class: "truncate text-sm" }, this.text)), !this.showSimpleText &&
            this.params &&
            (this.params.generateTooltip ? (h("at-tooltip", { position: "right" }, h("at-badge", { slot: "tooltip-trigger", type: this.type, label: this.text }), h("span", { class: `${this.params.tooltipClass ?? ''} leading-normal` }, this.params.generateTooltip(this.params)))) : (h("at-badge", { type: this.type, label: this.text })))));
    }
    static get is() { return "at-text-status-cell"; }
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
