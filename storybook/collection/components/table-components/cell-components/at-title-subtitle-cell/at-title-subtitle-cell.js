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
        return (h(Host, { key: '1c776fc5070ee01bf6abee6abe8f2bef39827bf8', class: "flex h-full items-center" }, h("at-tooltip", { key: '29329023e8fe09f11ca5a258d9343494774a75a2', position: "right", disabled: !this.params?.generateTooltip }, h("div", { key: '9cfc237248d0af09b3cea021e2e1f6d9c0e62116', class: "flex h-full flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'bce764203ea6e18f4212af7678028bcb9ba4ff80', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'bb3f2680dd9c5dfa9f0007330164701d7298431c', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '3c6e1dd914488051f39e1cc6b20a153396159da1', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
