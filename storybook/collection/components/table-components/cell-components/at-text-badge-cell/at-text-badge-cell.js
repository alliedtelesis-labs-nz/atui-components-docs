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
        return (h(Host, { key: '80a91f56972a8f0d6590dab99bc6968b49000cec', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '7e09dc4445232e7fa4e667e34eb07f0cba1e3bdb', position: "top", disabled: !this.params.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'fa7d20521f9ab43a853b304bc96c0471ccc0ac24', slot: "tooltip-trigger" }, h("span", { key: 'bdacfae99abc0393bcdd852e3168ff1ebeb17c5c', class: "truncate" }, this.textValue), this.badgeTextValue && (h("at-badge", { key: '145e6c17584a352140087945bc63b8809f9fcb88', type: this.params.badgeType ?? 'info', class: "ml-4", label: this.badgeTextValue }))), this.params?.generateTooltip && (h("span", { key: '0233357ab0b7bd554055dcb06d12156762e1d022', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
