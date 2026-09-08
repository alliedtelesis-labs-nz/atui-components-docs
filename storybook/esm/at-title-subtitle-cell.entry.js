import { r as registerInstance, a as getElement, h, H as Host } from './index-vSlhROK9.js';

const AtTitleSubtitleCell = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
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
        return (h(Host, { key: 'b520f1c1823a476cb811087f43197e57f27e39a0', class: "flex h-full min-w-0 items-center" }, h("at-tooltip", { key: '5b65f0e705b93cceac6eb305dd5765436886ab7f', position: "top", disabled: !this.params?.generateTooltip, class: "h-fit min-w-0 self-center" }, h("div", { key: '9672fe01d8860f30dad9398db5bd09ef6aab859e', class: "flex flex-col justify-center", slot: "tooltip-trigger" }, h("div", { key: '747bf44fdf2ad6df5237bb8b8b1d2b12f4769b8b', class: "truncate text-sm leading-normal" }, this.title), h("div", { key: '0ecf807fc82c81226219a291548212198a7ceaa9', class: "text-secondary truncate text-xs leading-normal font-normal" }, this.subtitle)), this.params?.generateTooltip && (h("span", { key: 'c383083d72002415240f853a29acf68ec069e94d', class: "leading-normal" }, this.params.generateTooltip(this.params))))));
    }
};

export { AtTitleSubtitleCell as at_title_subtitle_cell };
