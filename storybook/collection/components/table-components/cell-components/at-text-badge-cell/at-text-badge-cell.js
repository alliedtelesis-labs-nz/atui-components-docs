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
        return (h(Host, { key: 'e70fc96d3610b64b26bb5a1d594c780ee2d7f645', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '7e06a9183d47ca2400fc2c06f1fdb9ba527e5a3f', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'd4b60759110de5cd2f70be4ea706fad1f22adaf7', slot: "tooltip-trigger" }, h("span", { key: '286261e695a7b17a8940edaf91db2dbda5218c87', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '6a76f01dfb8c5f763902d147fba28de80b1d52c9', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: '46bc6e43a2700a53233f5d9b45b3cc7d666b5fdd', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
