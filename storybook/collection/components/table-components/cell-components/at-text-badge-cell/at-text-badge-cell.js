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
        return (h(Host, { key: 'cecf0e5a695983548e0dea3cbc2d240afb88eb50', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '4660fd22c4d79b42cbad3ad0960fe968d6f5a794', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '689e7a121b0f998952a54a1c83b57a766251392a', slot: "tooltip-trigger" }, h("span", { key: 'ebcbe180026e111d798a83a0d7e37ce9b9e172b7', class: "truncate" }, this.textValue), h("at-badge", { key: '5086fac8a5570c0a19e8fecbed05420d25e10520', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '0b7ef07e1d7c6afbad7d9594dcb6946813fe601f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
