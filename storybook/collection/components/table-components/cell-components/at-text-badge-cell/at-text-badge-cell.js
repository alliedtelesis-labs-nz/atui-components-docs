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
        return (h(Host, { key: 'caa899cf5f51a9c6681b965b57fba18a09b00da3', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '8f6ee5edec2ebdf6134a2e682bd166a694cc8128', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '4a93fcba0b63a05143da6e69f07ab5815ed79ffb', slot: "tooltip-trigger" }, h("span", { key: 'b953dd0bdadd97b8f9df65c0034b060b02fcfdda', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '6beecbb4353c81e3c5fe503fde7202faed764f10', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: '3f51a1da41415d695d316ff69a7945788c69ad6f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
