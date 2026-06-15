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
        return (h(Host, { key: '2349309c3fe4823ebd62379ae6897330682001b9', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'd7262b9f78cf26152d6cd7b5c1d4bb70c6e18c24', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '453edb43964427ab9510b81e566f2d93d3294556', slot: "tooltip-trigger" }, h("span", { key: '4d5aa7d169ec2d7bb64788a3c72f660c320b00ef', class: "truncate" }, this.textValue), h("at-badge", { key: 'ba6f48b233160f2963e4e014d5fd104cca2cdcfd', type: "info", class: "ml-4", label: this.badgeTextValue })), this.params?.generateTooltip && (h("span", { key: '7a63c85fd5e3a17b57ea62cf17e01856f584c273', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
