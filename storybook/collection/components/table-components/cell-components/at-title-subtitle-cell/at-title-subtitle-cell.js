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
        return (h(Host, { key: 'f86ef8e8f73c100360164de33b5798a0d13888b0', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '4a9a7a427e98103b6adb6622d1b4ebbde42c08d4', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: 'add848af6cfb1b91966664febbb4bfdc52dce095', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'c85cc77530015dc48f1050e3667d98eb1820c0b4', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '53b5f7a06323e82339889a0468f44fb4e5e66ff4', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '046c5da54ef2f51b0eb1abcc357a8bd2eb09e2de', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
