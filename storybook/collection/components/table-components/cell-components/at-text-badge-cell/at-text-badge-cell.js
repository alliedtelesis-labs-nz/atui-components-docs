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
        return (h(Host, { key: 'c39b146e9a6a6b541f6f7875d94cfc5acfbdc5b3', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'bdfcbefb7c7c85bb03d765880feb1f26fb756143', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'c037d2394f8ff8f95dd5714af46f11db9181778c', slot: "tooltip-trigger" }, h("span", { key: '2bdb6cb1cf9b2f41c1f16ccf341f86edec7ac6f8', class: "truncate" }, this.textValue), h("at-badge", { key: '2c37f972a6a84812132360d3eda382ea6c3993ba', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: 'fc34605a4c3fe7c440de97e66bc906b8eba9b31c', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
