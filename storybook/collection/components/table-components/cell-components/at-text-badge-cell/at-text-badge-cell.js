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
        return (h(Host, { key: 'cfaa494c60131ecfb8b34829720220a5f4484c03', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '4e591c38ec980dc912429db7d9a059ce8caaf8c8', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'cab08afa823ae804de74e8eb5a76b265523da3e0', slot: "tooltip-trigger" }, h("span", { key: '31806d42780cb0abfdb8012a722a415ca8718b1a', class: "truncate" }, this.textValue), h("at-badge", { key: 'ee21b29a5ddd7366be8f0f4e0e0b449fe3196494', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: 'dd521f6d6a8d207c1afb87251501292cbcd3a4b6', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
