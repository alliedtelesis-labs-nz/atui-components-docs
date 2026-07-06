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
        return (h(Host, { key: '55eba9c00a104fd0420121a5d96909978e17ac13', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '8490784a16621b916e079101f4b2600e5a7fc1e6', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '181ca22918aaac9d2bcafd26914c32e6adb108eb', slot: "tooltip-trigger" }, h("span", { key: 'dc2aea521b4dce892d5e3eed3ebc964bf8ae75d4', class: "truncate" }, this.textValue), h("at-badge", { key: '3f0225232322f4c2b5ddfdc9906cd1a00ca1a5bd', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: 'b7f8fa21947b87c0fb031491c81174cf833bf135', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
