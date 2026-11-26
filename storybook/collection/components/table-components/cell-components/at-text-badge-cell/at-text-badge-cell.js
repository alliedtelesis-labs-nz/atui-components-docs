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
        return (h(Host, { key: 'bf359d85b6af35e1acd579984388230333d45a7c', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '9eedbd40b372f7c2edf7cc69a0c0c2db3b8ebb35', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '1a2b34c1f6106fb1bae8916d9575acfe3889de09', slot: "tooltip-trigger" }, h("span", { key: '3a6d0e7cdd2a4c2e39471f4c99ceae77ab6bde34', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '69d3868caea47855b59e24c5c288cde6d9c2560f', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: 'f3863701cf8705e4dd0b09d9a7764bffd1fccf2b', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
