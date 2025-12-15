import { h, Host } from "@stencil/core";
/**
 * @category Data Tables
 * @description A cell component for displaying a title and subtitle.
 */
export class AtTitleSubtitleCell {
    el;
    params;
    title = '';
    subtitle = '';
    init(params) {
        this.setParams(params);
    }
    refresh(params) {
        this.setParams(params);
        return true;
    }
    getGui() {
        return this.el;
    }
    setParams(params) {
        this.params = params;
        if (params.title) {
            this.title = params.title(params.data);
        }
        else {
            this.title = params.data?.titleSubtitleCell?.title || '';
        }
        if (params.subtitle) {
            this.subtitle = params.subtitle(params.data);
        }
        else {
            this.subtitle = params.data?.titleSubtitleCell?.subtitle || '';
        }
    }
    render() {
        return (h(Host, { key: 'f5c7e36a4eee169dfa619c0cac78c3f194599f13', class: "flex h-full items-center" }, h("at-tooltip", { key: '39d7f0614e254d6385984ce9e2d3924c944339ec', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: '335425ca7d67de564571442acb7899928c1f68da', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'b85f675f0b7af73c3053ad3f27b48035af11d71a', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '06414f84b865e52c28c73ac1e7962df60589a188', class: "text-med truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: 'aa8315525190bafd80e2ad7ba837253e9af82e5b', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
    static get is() { return "at-title-subtitle-cell"; }
    static get states() {
        return {
            "params": {},
            "title": {},
            "subtitle": {}
        };
    }
    static get elementRef() { return "el"; }
}
//# sourceMappingURL=at-title-subtitle-cell.js.map
