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
        return (h(Host, { key: '0f5335e3e8831e428f2fc70b9285e243f292aa78', class: "flex h-full items-center" }, h("at-tooltip", { key: 'a9a356023d3aaecb03060fede150f18a37e0b652', position: "right", disabled: !this.params.generateTooltip }, h("div", { key: '6899d2195c491b5801652b73eec9c832671af48d', slot: "tooltip-trigger" }, h("span", { key: 'f6112b39b0455b2765392fe4d37afde0af3f09a9', class: "truncate" }, this.textValue), h("at-badge", { key: 'b1b71d5508377f426ecc5e500e72dbc9093e50a6', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '827ce34e51548547771e0f49e88c40cca7235921', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
