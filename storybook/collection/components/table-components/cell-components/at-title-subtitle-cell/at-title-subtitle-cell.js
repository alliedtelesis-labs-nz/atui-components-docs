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
        return (h(Host, { key: 'edf31d390835a0fcd82de3a915f83685a6cc4457', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '82c4c130bf2d88ec1b051fea7ed2bf2b9198aedf', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'ac88196584c555d37525933bf7aa9a98be0e5b96', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'a3997f51a3976ac11bc2207d1061ab5a4fb69ebb', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '9b4f2647835796bc8ed9cb4344d03a3f61e0b3dd', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: 'cf01b389b57c434f8d40f4e58f1ed64a2ee2f655', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
