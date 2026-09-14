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
        return (h(Host, { key: '7439020f00ba062223da8dae48dd5889961461f3', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '357ece8cecae4130fe34a41f9760d10bbacd6572', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '5af1302a356059743a2dca82d7f250751c309249', slot: "tooltip-trigger" }, h("span", { key: '74672f082a87184a43b1cc84be73811589595e34', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: 'a9932fcea02bff7ba4b22865849d44834c038083', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: 'da057878118a2571368816bf1813ea4bfe24654a', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
