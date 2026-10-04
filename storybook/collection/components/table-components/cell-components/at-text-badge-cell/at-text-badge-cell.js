import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a text with a badge.
 */
export class AtTextBadgeCell {
    el;
    textValue;
    badgeTextValue;
    params;
    init(params) {
        this.applyParams(params);
    }
    getGui() {
        return this.el;
    }
    refresh(params) {
        this.applyParams(params);
        return true;
    }
    applyParams(params) {
        this.params = params;
        if (this.params.text) {
            this.textValue = this.params.text(params.data);
        }
        else {
            this.textValue = params.value?.text || '';
        }
        if (this.params.badgeText) {
            this.badgeTextValue = this.params.badgeText(params.data);
        }
        else {
            this.badgeTextValue = params.value?.badgeText || '';
        }
    }
    render() {
        return (h(Host, { key: '69d88ef34fd202bee48ab6d239e9a055c66ab2aa', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'd3e8772bfc1e4c2d5cc455d5d2424b7c05e64618', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '14eff7d62ada6b7aaca9f1cce76ff8699b5159a1', slot: "tooltip-trigger" }, h("span", { key: 'b18492b43922de3eb49eb67e38127523937164ed', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: 'bd15f7f176f65556b620958032fe3612413194d7', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: '58839fe437669355cb9bb3cbecdee2e9df2f9207', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-text-badge-cell"; }
    static get states() {
        return {
            "textValue": {},
            "badgeTextValue": {},
            "params": {}
        };
    }
    static get elementRef() { return "el"; }
}
