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
        return (h(Host, { key: '1e28b769c24ea33dca97acde2ffd93a7998c9c25', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: 'c7819136dacba333dd996e43f092262ac474454a', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '717f26757d45dc0fab93227ddb5a3d4d525085e1', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: 'c8477cc99fb61d8fda1762af412347f1dc881e52', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '949b416b8794d7485425139ec373a927f193dba7', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: '93f17a3d4f0c6441769c3e9dca4a262542047314', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
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
