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
        return (h(Host, { key: 'cd7313d55b08a497fffafa553b9b3716d5eca488', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '32dd69b4d7654ace9f6bb69144df541d358b18c5', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'ce3eb208854ed5f1921c2e78ce088c08eb5e7d81', slot: "tooltip-trigger" }, h("span", { key: '922773c254f9936d91b54c5e96d17473f83140f4', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '04ceb63ad27747a89605a3214b9e20da5a949c1e', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: 'fd7adfd17dc1b282968475a5955e08a346f9c8d7', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
