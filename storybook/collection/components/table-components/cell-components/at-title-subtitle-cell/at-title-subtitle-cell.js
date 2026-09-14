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
        return (h(Host, { key: 'eee25c62f7605b381db15d16cdfe1de8ba43d771', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '94364a1ab437df7f300d511a5e2258a22fd5a6e1', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '552bc6a5b1dab697792ce00340e4307b42467398', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '4be651b640119d68623e68e8d4a800d3d934c564', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '69335f65d3e81830ef3aaf73708301c4b4e843b0', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: 'd7ea50d3e1fb65b46cfc38d38daeffcb5b196d4c', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
