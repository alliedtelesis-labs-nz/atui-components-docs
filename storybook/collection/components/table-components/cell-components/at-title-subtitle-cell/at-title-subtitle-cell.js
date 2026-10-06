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
        return (h(Host, { key: '1c416ee9f6dd14d786faa583ce00628fe38b96fe', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'e35ff29f381079a8b09a5b9b760f0b295e7da265', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '3cb51067ffe3d5ddaa92644c6fa5d3ecd8668ee7', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'fb3f20d794de44eb06ded0f9ca3471ce2576d8b4', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: 'd621c946a34a00e9ab09458aef5807841cabffc4', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '3046e2bbb06d28f9db30fb7060333c4d3b08937f', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
