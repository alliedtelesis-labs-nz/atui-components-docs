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
        return (h(Host, { key: 'f3ba4ba7b2b5361e0d44dd13ceb0d8aa7ec57db1', class: "flex h-full items-center" }, h("at-tooltip", { key: '0f11aaa096b69833f622f7ba6aed4ce8b5bb4b9f', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: 'c13da0ae10f68a59cb22ce87582f50dd07e69eb1', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'afc9e93b92f90d815363d384b723c28f89d4cb92', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'b75c9f85fee4194f8fca7db76fca32d4a0c46ba6', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '1e7e9440ca7e419709620262b40e366cbbe245a1', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
