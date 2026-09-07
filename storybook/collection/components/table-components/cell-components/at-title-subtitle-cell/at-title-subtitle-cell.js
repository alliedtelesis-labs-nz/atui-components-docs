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
        return (h(Host, { key: 'de2b062736fb2beaf554571fdec80ab79d221efc', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '3d6fbbde1dd4400daff265d557fbdeecdf998680', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '7262d633f24444516e00ab7b75b99597136402b9', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'b713309e5da982a99c68cdee541ea159114fb562', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'b38d427bd4d51649e239832ea370c92eeed8a623', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: 'ba5ec51cf7e22a18492ba5beba4938d56cad9407', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
